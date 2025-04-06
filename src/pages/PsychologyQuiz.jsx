import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { psychologyquestions } from "../utils/data";
import { Card } from "antd";
import { QuestionCircleTwoTone } from "@ant-design/icons";
import Title from "antd/es/typography/Title";

const PsychologyQuiz = () => {
    const { quizDataName } = useParams();
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState({});

    const questions = psychologyquestions[quizDataName] || [];

    const maxScore = questions.reduce((total, question) => {
        const maxOptionScore = Math.max(...question.options.map(o => o.score));
        return total + maxOptionScore;
    }, 0);

    const getResultLabel = () => {
        const percentage = (score / maxScore) * 100;
        if (percentage >= 90) {
            return { label: "A'lo! Siz bolalar bilan ishlashni yaxshi ko‘rasiz, ularning ehtiyojlarini tushunasiz va zamonaviy ta’lim metodlarini qo‘llashga intilasiz. Sizdan kelajakda yaxshi mutaxassis chiqishi aniq!", icon: "fas fa-medal text-success" };
        } else if (percentage >= 75) {
            return { label: "Yaxshi! Siz yaxshi tarbiyachi bo‘lish uchun yetarli ko‘nikmalarga egasiz, lekin ba’zi sohalarda o‘zingiz ustida ishlashingiz kerak. Innovatsion metodlar va jamoaviy ishlash ko‘nikmalarini rivojlantirish foydali bo‘ladi.", icon: "fas fa-award text-success" };
        } else if (percentage >= 55) {
            return { label: "Qoniqarli! Sizda tarbiyachilik qobiliyati bor, lekin bu sohada o‘sish uchun ko‘proq amaliy mashg‘ulotlarga e’tibor berish kerak. Bolalar bilan ishlashda sabr-toqat, ijodiy yondashuv va jamoaviy hamkorlik ko‘nikmalarini rivojlantirishga harakat qiling.", icon: "far fa-check-circle text-warning" };
        } else {
            return { label: "Qayta tayyorlaning! Siz hali maktabgacha ta’lim sohasida yetarli tajribaga ega emassiz yoki bu soha sizga mos kelmasligi mumkin. Agar haqiqatan ham tarbiyachi bo‘lishni istasangiz, pedagogika va psixologiya bo‘yicha ko‘proq bilim olish tavsiya etiladi.", icon: "fas fa-exclamation-triangle text-danger" };
        }
    };

    const handleAnswer = (scoreValue, optionIndex) => {
        const updatedOptions = { ...selectedOptions, [currentQuestion]: optionIndex };
        setSelectedOptions(updatedOptions);

        setScore(prev => {
            const prevScore = selectedOptions[currentQuestion] !== undefined
                ? questions[currentQuestion].options[selectedOptions[currentQuestion]].score
                : 0;
            return prev - prevScore + scoreValue;
        });
    };

    const restartTest = () => {
        setCurrentQuestion(0);
        setScore(0);
        setIsFinished(false);
        setSelectedOptions({});
    };

    const handleNext = () => {
        if (currentQuestion + 1 < psychologyquestions[quizDataName]?.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsFinished(true);
        }
    };

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    return (
        <main className="page_content">
            <section className="hero_section decoration_wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        {
                            psychologyquestions[quizDataName]?.length > 0
                                ?
                                <Card className="relative w-96 mx-auto bg-transparent mt-10 card-container1">
                                    <div className="card-blur-bg" />
                                    <div className="card-content1">
                                        {!isFinished ? (
                                            <>
                                                <h2 className="text-lg font-semibold mb-4">
                                                    {currentQuestion + 1}. {questions[currentQuestion].question}
                                                </h2>
                                                <ul className="space-y-3 ps-0" style={{ listStyle: 'none' }}>
                                                    {questions[currentQuestion]?.options.map((option, idx) => {
                                                        const isSelected = selectedOptions[currentQuestion] === idx;
                                                        return (
                                                            <li key={idx} className="mb-2">
                                                                <button
                                                                    onClick={() => handleAnswer(option.score, idx)}
                                                                    className={`w-full text-left px-4 py-2 border rounded transition btn btn-sm ${isSelected ? 'btn-outline-warning' : ''}`}
                                                                >
                                                                    {option.text}
                                                                </button>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                                <div className="d-flex justify-content-between mt-4">
                                                    <button
                                                        onClick={handlePrev}
                                                        className={`btn btn-primary ${currentQuestion === 0 ? 'd-none' : ''}`}
                                                    >
                                                        <span className="btn_icon ms-0 me-2">
                                                            <i className="fa-solid fa-arrow-left"></i>
                                                        </span>
                                                        <span className="btn_text" data-text="Orqaga">
                                                            Orqaga
                                                        </span>
                                                    </button>
                                                    <button onClick={handleNext} className="btn btn-primary">
                                                        <span
                                                            className="btn_text"
                                                            data-text={currentQuestion + 1 < questions.length ? "Keyingi" : "Natijani ko‘rish"}
                                                        >
                                                            {currentQuestion + 1 < questions.length ? "Keyingi" : "Natijani ko‘rish"}
                                                        </span>
                                                        <span className="btn_icon">
                                                            <i className="fa-solid fa-arrow-right"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="text-center">
                                                <h2 className="text-xl font-bold mb-4">Test yakunlandi!</h2>
                                                <h1 className="text-center">
                                                    <i className={`${getResultLabel().icon} fa-5x`}></i>
                                                </h1>
                                                <h4 className="text-lg mb-2">
                                                    Sizning umumiy ballingiz: <span className="font-semibold badge text-bg-info rounded-1 text-lg">{score} / {maxScore}</span>
                                                </h4>
                                                <div className="alert alert-success rounded-1" role="alert">
                                                    <span className="text-xl font-semibold fw-semibold">
                                                        {getResultLabel().label}
                                                    </span>
                                                </div>
                                                <div style={{ textAlign: 'right' }}>
                                                    <button onClick={restartTest} className="btn btn-primary mt-4">
                                                        <span className="btn_icon me-1">
                                                            <i className="fas fa-undo-alt"></i>
                                                        </span>
                                                        <span className="btn_text" data-text="Testni qayta boshlash">
                                                            Testni qayta boshlash
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </Card>
                                :
                                <div className="alert alert-danger text-center" role="alert">
                                    <QuestionCircleTwoTone style={{ fontSize: 96, marginBottom: 30 }} twoToneColor="#58151c" />
                                    <h4 className="alert-heading fw-bold h2">Xatolik!</h4>
                                    <Title level={4} className="text-center" style={{ color: "#58151c" }}>Savollar topilmadi!</Title>
                                    <h4 level={4} className="alert-heading fw-bold h3">
                                        <Link
                                            onClick={() => navigate(-1)}
                                            className="mt-4 text-decoration-underline"
                                            style={{ color: "#58151c" }}
                                        >
                                            <i class="fas fa-chevron-circle-left me-1"></i>
                                            Orqaga
                                        </Link>
                                    </h4>
                                </div>
                        }
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PsychologyQuiz;
