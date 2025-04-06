import { Link, useNavigate, useParams } from "react-router-dom"
import Test from "../sections/Test"
import { quizzes } from "../utils/data"
import { useState } from "react";
import Title from "antd/es/typography/Title";
import { QuestionCircleTwoTone } from "@ant-design/icons";

function Quiz() {
    const { quizName } = useParams()
    const navigate = useNavigate()
    const [quizNumber, setQuizNumber] = useState(0);
    const [quizLength, setQuizLength] = useState(0);
    return (
        <main className="page_content">
            <section className="hero_section decoration_wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            {
                                quizzes[quizName]?.length > 0
                                    ?
                                    <Test setQuizNumber={setQuizNumber} setQuizLength={setQuizLength} quizName={quizName} questionsData={quizzes[quizName]} />
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
                            {/* <div className="hero_content_wrap">
                                <h4 className="text-center">1 - savol</h4>
                                <h1 className="heading_text text-center mb-5">
                                    <mark>Savol matni {testName}</mark>
                                </h1>
                                <div className="row mb-5">
                                    <div className="col-12 col-md-6 col-xl-3">
                                        <label className="quiz_item" htmlFor="variant_1">
                                            <input
                                                className="quiz_item_radio d-none"
                                                type="radio"
                                                id="variant_1"
                                                name="variant"
                                                value="variant_1"
                                            />
                                            <div className="item_contact">
                                                <h3 className="item_title">Variant #1</h3>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3">
                                        <label className="quiz_item" htmlFor="variant_2">
                                            <input
                                                className="quiz_item_radio d-none"
                                                type="radio"
                                                id="variant_2"
                                                name="variant"
                                                value="variant_1"
                                            />
                                            <div className="item_contact">
                                                <h3 className="item_title">Variant #2</h3>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3">
                                        <label className="quiz_item" htmlFor="variant_3">
                                            <input
                                                className="quiz_item_radio d-none"
                                                type="radio"
                                                id="variant_3"
                                                name="variant"
                                                value="variant_1"
                                            />
                                            <div className="item_contact">
                                                <h3 className="item_title">Variant #3</h3>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3">
                                        <label className="quiz_item" htmlFor="variant_4">
                                            <input
                                                className="quiz_item_radio d-none"
                                                type="radio"
                                                id="variant_4"
                                                name="variant"
                                                value="variant_1"
                                            />
                                            <div className="item_contact">
                                                <h3 className="item_title">Variant #4</h3>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="d-block text-end">
                                    <button className="btn btn-primary" href="contact.html">
                                        <span className="btn_text" data-text="Keyingi">
                                            Keyingi
                                        </span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="decoration_item shape_blur_shadow"></div>
                <div className="decoration_item shape_leaf">
                    <img
                        src="/assets/images/shape_leaf_left_top.svg"
                        alt="Transversal"
                    />
                </div>
            </section>
        </main>
    )
}

export default Quiz