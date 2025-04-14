import React, { useState, useEffect, useRef } from "react";
import { Button, Card, Divider, Flex, Input, Radio, Tabs } from "antd";
import { CheckCircleTwoTone, CloseCircleTwoTone, DownloadOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

const Test = ({ questionsData, setQuizNumber, setQuizLength, quizName }) => {
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [finished, setFinished] = useState(false);
    const [fullname, setFullname] = useState("");
    const certificateRef = useRef(null);

    useEffect(() => {
        if (questionsData.length > 0) {
            const shuffledQuestions = shuffleArray(questionsData).map((q) => ({
                ...q,
                options: q.options ? shuffleArray(q.options) : null,
            }));
            setQuestions(shuffledQuestions);
            setQuizLength(questionsData.length);
        }
    }, [questionsData]);

    useEffect(() => {
        if (selectedAnswer === questions[current]?.answer) {
            setCorrectCount(correctCount + 1);
        } else if (selectedAnswer !== null) {
            setWrongCount(wrongCount + 1);
        }
    }, [selectedAnswer])

    useEffect(() => {
        handleRestart();
    }, [quizName])

    const handleNext = () => {
        if (current + 1 < questions.length) {
            setCurrent(current + 1);
            setFeedback("");
        } else {
            setFinished(true);
            setQuizNumber(correctCount);
        }
    };
    const handlePrev = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    }

    const handleRestart = () => {
        const shuffledQuestions = shuffleArray(questionsData).map((q) => ({
            ...q,
            options: shuffleArray(q.options),
        }));
        setQuestions(shuffledQuestions);
        setCurrent(0);
        setSelectedAnswer(null);
        setCorrectCount(0);
        setWrongCount(0);
        setFinished(false);
    };

    const tabItems = questions.map((q, index) => ({
        key: String(index),
        label: `${index + 1}`,
        children: (
            <div className="row align-items-center py-5">
                {q?.type !== "fill_blank" && (
                    <div className="col-lg-6">
                        <h3 className="text-xl font-bold mb-4">{index + 1}. {q?.quiz}</h3>
                    </div>
                )}
                {q?.type === "true_false" ? (
                    <div className="flex justify-center gap-4 mb-4">
                        <Button onClick={() => setSelectedAnswer("true")} disabled={feedback !== ""}>
                            True
                        </Button>
                        <Button onClick={() => setSelectedAnswer("false")} disabled={feedback !== ""}>
                            False
                        </Button>
                    </div>
                ) : q?.type === "fill_blank" ? (
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">{index + 1}. {q.quiz.replace("_____", selectedAnswer || "_____")}</h3>
                        <div className="flex justify-center gap-2 mt-4">
                            {q.options.map((option) => (
                                <Button key={option} onClick={() => setSelectedAnswer(option)} disabled={feedback !== ""}>
                                    {option}
                                </Button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="col-lg-6 text-start border-start">
                        <Radio.Group size="large" onChange={(e) => setSelectedAnswer(e.target.value)} value={selectedAnswer}>
                            {q?.options.map((option) => (
                                <Radio key={option} value={option} style={{ display: "block", marginBottom: 8 }}>
                                    <b style={{ fontSize: 18 }}>{option}</b>
                                </Radio>
                            ))}
                        </Radio.Group>
                    </div>
                )}
                {feedback && <p className="text-lg font-semibold">{feedback}</p>}
                <div className="d-flex justify-content-between">
                    <button onClick={handlePrev} className={`btn btn-primary ${current === 0 ? 'd-none' : ''}`} disabled={current === 0}>
                        <span className="btn_icon ms-0 me-2">
                            <i className="fa-solid fa-arrow-left"></i>
                        </span>
                        <span className="btn_text" data-text="Orqaga">
                            Orqaga
                        </span>
                    </button>
                    <button onClick={handleNext} className="btn btn-primary">
                        <span className="btn_text" data-text={current + 1 < questions.length ? "Keyingi" : "Natijani ko‘rish"}>
                            {current + 1 < questions.length ? "Keyingi" : "Natijani ko‘rish"}
                        </span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </button>
                </div>
            </div>
        )
    }));

    const downloadCertificate = () => {
        if (certificateRef.current) {
            html2canvas(certificateRef.current, {
                scale: 1, // Sifatni yaxshilash
                width: 1754, // A4 eni
                height: 1240, // A4 bo‘yi
                useCORS: true // Agar tashqi rasmlar bo‘lsa, CORS muammolarini oldini olish
            }).then((canvas) => {
                const link = document.createElement("a");
                link.href = canvas.toDataURL("image/png");
                link.download = "certificate.png";
                link.click();
            });
            setFullname("");
        }
    };

    return (
        <Card className="relative w-96 mx-auto bg-transparent mt-10 card-container1">
            <div className="hidden">
                <div ref={certificateRef} className="certificate">
                    <h1 className='certificate-own'>{fullname}</h1>
                </div>
            </div>
            <div className="card-blur-bg" />
            <div className="card-content1">
                {finished ? (
                    <div className="text-center">
                        {
                            questions.length / 2 < correctCount
                                ?
                                <>
                                    <CheckCircleTwoTone style={{ fontSize: 96, marginBottom: 30 }} twoToneColor="#52c41a" />
                                    <Title level={3} style={{ margin: 0 }} type="success">To‘g‘ri javoblar: {correctCount}</Title>
                                </>
                                :
                                <>
                                    <CloseCircleTwoTone style={{ fontSize: 96, marginBottom: 30 }} twoToneColor="#ff4d4f" />
                                    <Title level={3} type="danger">To‘g‘ri javoblar: {correctCount}</Title>
                                </>
                        }
                        <div style={{ textAlign: 'right' }}>
                            <button onClick={handleRestart} className="btn btn-primary">
                                <span className="btn_icon me-1">
                                    <i className="fas fa-undo-alt"></i>
                                </span>
                                <span className="btn_text" data-text="Qayta boshlash">
                                    Qayta boshlash
                                </span>
                            </button>
                        </div>
                        <Divider style={{ margin: '20px 0' }} />
                        {
                            quizName === "finish" && correctCount > questions.length / 2
                                ?
                                <div>
                                    <h4 style={{ color: "#26aba3" }}>Sertifikat olish uchun ism-familiyangizni kiriting!</h4>
                                    <Flex align='center' gap={10}>
                                        <Input
                                            className="rounded-1"
                                            size="large"
                                            value={fullname}
                                            onInput={(e) => setFullname(e.target.value)}
                                            placeholder='Ism familiya...'
                                            style={{
                                                border: '1px solid #26aba3',
                                                fontSize: "22px"
                                            }}
                                        />
                                        <Button
                                            onClick={downloadCertificate}
                                            disabled={!fullname.trim()}
                                            className='home-btn'
                                            color="cyan" variant="solid"
                                            icon={<DownloadOutlined />}
                                            size='large'
                                        >
                                            Sertifikat yuklash
                                        </Button>
                                    </Flex>
                                </div>
                                :
                                ''
                        }
                        {
                            quizName === "finish" && correctCount < questions.length / 2
                                ?
                                <h3 style={{ color: "#26aba3" }}>Sertifikat olish uchun testlarni 50%dan ko'proq ishlang!</h3>
                                :
                                ''
                        }
                    </div>
                ) : (
                    <Tabs
                        activeKey={String(current)}
                        onChange={(key) => setCurrent(Number(key))}
                        centered
                        size="large"
                        type="card"
                        items={tabItems}
                        tabBarStyle={{
                            display: "flex",
                        }}
                        className="custom-tabs"
                    />
                )}
            </div>
        </Card>
    );
};

export default Test;