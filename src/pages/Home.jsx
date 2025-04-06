import CountUp from 'react-countup'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <main className="page_content">
            <section className="hero_section decoration_wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero_content_wrap">
                                <h1 className="heading_text"><mark>Transversal-metodik</mark> kompetentsiyani rivojlantirish</h1>
                                <p className="heading_description">
                                    Bo'lajak tarbiyachilarda transversal-metodik kompetentsiyani rivojlantirish texnologiyasi
                                </p>
                                <ul className="btns_group unordered_list">
                                    <li><Link className="btn btn-primary" to="/quiz/in"><span className="btn_text"
                                        data-text="Kirish testi">Kirish testi</span><span className="btn_icon"><i
                                            className="fa-solid fa-arrow-up-right"></i></span></Link></li>
                                    <li><Link className="btn btn-outline-secondary" to="/report"><span className="btn_text"
                                        data-text="Mavzuni boshlash">Mavzuni boshlash</span><span className="btn_icon"><i
                                            className="fa-solid fa-arrow-up-right"></i></span></Link></li>
                                </ul>
                                <ul className="hero_section_counter unordered_list">
                                    <li>
                                        <div className="counter_item">
                                            <div className="counter_value mb-0">
                                                <span><CountUp duration={7} end={100} />+</span>
                                            </div>
                                            <hr />
                                            <p className="counter_description mb-0">Barcha mavjud testlar soni</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="counter_item">
                                            <div className="counter_value mb-0">
                                                <span><CountUp duration={7} end={30} />+</span>
                                            </div>
                                            <hr />
                                            <p className="counter_description mb-0">Muammoli keyslar soni</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="counter_item">
                                            <div className="counter_value mb-0">
                                                <span><CountUp duration={7} end={15} />+</span>
                                            </div>
                                            <hr />
                                            <p className="counter_description mb-0">Transversal texnologiyalar</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero_image_wrap">
                                <video src="/assets/images/diagram.mp4" autoPlay loop muted></video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="decoration_item shape_blur_shadow"></div>
                <div className="decoration_item shape_leaf">
                    <img src="/assets/images/shape_leaf_left_top.svg"
                        alt="Shape Leaf - Talking Minds - Psychotherapist Site Template" />
                </div>
            </section>
            <section className="service_section section_space_lg bg_primary_light">
                <div className="container">
                    <div className="section_heading text-center">
                        <h2 className="section_heading_text">Bo'limlar</h2>
                        <p className="section_heading_description mb-0">
                            Kerakli bo'limni tanlang va o'tish tugmasini bosing
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service_item">
                                <div className="item_icon">
                                    <img src="/assets/images/icon_brain.svg"
                                        alt="Brain Icon - Talking Minds – Psychotherapist Site Template" /></div>
                                <div className="item_contact">
                                    <h3 className="item_title">Kirish testi</h3>
                                    <p>
                                        Mavzuni boshlashdan oldin mavjud bilimlarni tekshirish uchun mavzuga kirish testi
                                    </p>
                                    <Link className="btn-link" to="/quiz/in">
                                        <span className="btn_text">O'tish</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service_item">
                                <div className="item_icon"><img src="/assets/images/icon_head_double.svg"
                                    alt="Head Double Icon - Talking Minds – Psychotherapist Site Template" /></div>
                                <div className="item_contact">
                                    <h3 className="item_title">Mavzu bayoni</h3>
                                    <p>
                                        "Bo'lajak tarbiyachilarda transversal-metodik kompetentsiyani rivojlantirish texnologiyasi" mavzu
                                        bayoni
                                    </p>
                                    <Link className="btn-link" to="/report"><span className="btn_text">O'tish</span> <span
                                        className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service_item">
                                <div className="item_icon"><img src="/assets/images/icon_head.svg"
                                    alt="Brain Icon - Talking Minds – Psychotherapist Site Template" /></div>
                                <div className="item_contact">
                                    <h3 className="item_title">Transversal texnologiyalar</h3>
                                    <p>
                                        Yangi transversal texnologiyalar bilan tanishish va ular haqida ma'lumot olish uchun
                                    </p>
                                    <Link className="btn-link" to="/transversal"><span className="btn_text">O'tish</span> <span
                                        className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service_item">
                                <div className="item_icon"><img src="/assets/images/icon_head_plus.svg"
                                    alt="Brain Icon - Talking Minds – Psychotherapist Site Template" /></div>
                                <div className="item_contact">
                                    <h3 className="item_title">IQ testlar</h3>
                                    <p>
                                        Bo'lajak tarbiyachilarning IQ ko'rsatkichlarini aniqlash uchun testlar
                                    </p>
                                    <Link className="btn-link" to="/quiz/iq"><span className="btn_text">O'tish</span> <span
                                        className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service_item">
                                <div className="item_icon"><img src="/assets/images/icon_head_children.svg"
                                    alt="Head Double Icon - Talking Minds – Psychotherapist Site Template" /></div>
                                <div className="item_contact">
                                    <h3 className="item_title">Psixologik testlar</h3>
                                    <p>
                                        Bo'lajak tarbiyachilarning psixologik ko'rsatkichlarini aniqlash uchun testlar
                                    </p>
                                    <Link className="btn-link" to="/psychology-quiz"><span className="btn_text">O'tish</span> <span
                                        className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service_item">
                                <div className="item_icon"><img src="/assets/images/icon_brain_plus.svg"
                                    alt="Brain Icon - Talking Minds – Psychotherapist Site Template" /></div>
                                <div className="item_contact">
                                    <h3 className="item_title">Yakuniy test</h3>
                                    <p>
                                        Mavzu yuzasidan olingan bilimlarni tekshirish uchun yakuniy test
                                    </p>
                                    <Link className="btn-link" to="/quiz/finish"><span className="btn_text">O'tish</span> <span
                                        className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about_section section_space_lg">
                <div className="container">
                    <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6 order-lg-last">
                            <div className="image_widget"><img src="/assets/images/about_image_1-min.jpg"
                                alt="About Image - Talking Minds – Psychotherapist Site Template" />
                                <div className="image_shape bg_primary_light"></div>
                                <div className="about_video_icon">
                                    <Link className="video_play_btn"
                                        to="/report"><i className="fa-solid fa-arrow-up-right"></i></Link></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about_content">
                                <div className="section_heading mb-4">
                                    <h2 className="section_heading_text"><mark>Transversal-education —</mark> Zamonaviy pedagogik yondashuv.</h2>
                                    <p className="section_heading_description mb-0">
                                        Ushbu platforma sizga quyidagilarni beradi:
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 col-sm-6">
                                        <ul className="info_list unordered_list_block">
                                            <li><span className="info_icon"><i className="fa-light fa-circle-check"></i> </span><span
                                                className="info_text">Yangi bilimlar</span></li>
                                            <li><span className="info_icon"><i className="fa-light fa-circle-check"></i> </span><span
                                                className="info_text">Mantiqiy fikrlashni oshirish</span></li>
                                            <li><span className="info_icon"><i className="fa-light fa-circle-check"></i> </span><span
                                                className="info_text">Sertifikat</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-5 col-sm-6">
                                        <ul className="info_list unordered_list_block">
                                            <li><span className="info_icon"><i className="fa-light fa-circle-check"></i> </span><span
                                                className="info_text">Muammoli vaziyatlarga yechim topish</span></li>
                                            <li><span className="info_icon"><i className="fa-light fa-circle-check"></i> </span><span
                                                className="info_text">Psixologik boshqaruvni o'rganish</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="btn_wrap pb-0"><Link className="btn btn-primary" to="/report"><span className="btn_text"
                                    data-text="Boshlash">Boshlash</span><span className="btn_icon"><i
                                        className="fa-solid fa-arrow-up-right"></i></span></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="consultation_section section_space_sm">
                <div className="container">
                    <div className="consultation_form bg_primary_light decoration_wrapper">
                        <div className="section_heading text-center">
                            <h2 className="section_heading_text mb-0">
                                Takliflar uchun
                            </h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4"></div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group"><label htmlFor="input_name">Ismingiz</label> <input id="input_name"
                                            className="form-control" type="text" name="name" placeholder="Ismingiz" /></div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group"><label htmlFor="input_phone">Telefon raqam</label> <input id="input_phone"
                                            className="form-control" type="tel" name="phone" placeholder="Telefon raqam" /></div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="message">Taklifingiz</label>
                                            <textarea placeholder="Taklifingiz" name="message" rows="4" id="message" className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="btn_wrap pb-0 text-center"><button type="submit" className="btn btn-primary"><span
                                        className="btn_text" data-text="Yuborish">Yuborish</span><span
                                            className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="decoration_item shape_leaf_1"><img src="/assets/images/shape_leaf_right_top.svg"
                                alt="Shape Leaf - Talking Minds - Psychotherapist Site Template" /></div>
                            <div className="decoration_item shape_leaf_2"><img src="/assets/images/shape_leaf_left_bottom.svg"
                                alt="Shape Leaf - Talking Minds - Psychotherapist Site Template" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home