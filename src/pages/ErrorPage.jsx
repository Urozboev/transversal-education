import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <main className="page_content">
            <section className="error_section decoration_wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <h1>404</h1>
                            <h2>Afsus! Bu sahifa topilmadi.</h2>
                            <p>
                                Ushbu sahifa topilmadi yoki mavjud emas. Qaytish uchun tugmani bosing.
                            </p>
                            <div className="btn_wrap pb-0 text-center">
                                <Link className="btn btn-primary" to="/">
                                    <span className="btn_icon me-2 ms-0">
                                        <i className="fa-solid fa-arrow-up-left"></i>
                                    </span>
                                    <span className="btn_text" data-text="Bosh sahifa">
                                        Bosh sahifa
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="social_links unordered_list justify-content-center">
                    <li>
                        <a href="#!"><i className="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li>
                        <a href="#!"><i className="fa-brands fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="#!"><i className="fa-brands fa-youtube"></i></a>
                    </li>
                    <li>
                        <a href="#!"><i className="fa-brands fa-telegram"></i></a>
                    </li>
                </ul>
                <div className="decoration_item shape_leaf_1">
                    <img
                        src="/assets/images/shape_leaf_left_bottom.svg"
                        alt="Shape Leaf - Talking Minds - Psychotherapist Site Template"
                    />
                </div>
                <div className="decoration_item shape_leaf_2">
                    <img
                        src="/assets/images/shape_leaf_right_top.svg"
                        alt="Shape Leaf - Talking Minds - Psychotherapist Site Template"
                    />
                </div>
            </section>
        </main>
    )
}

export default ErrorPage