import { Link } from 'react-router-dom'
import { FileDoneOutlined, ProductOutlined, ProjectOutlined } from '@ant-design/icons'

function PsychologyQuizzes() {
    return (
        <main className="page_content">
            <section className="service_section section_space_lg bg_primary_light">
                <div className="container">
                    <div className="section_heading text-center">
                        <h2 className="section_heading_text">Psixologik testlar</h2>
                        <p className="section_heading_description mb-0">
                            O'zingizga qiziqarli bo'lgan testlarni tanlang va o'zingizni sinab ko'ring.
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service_item">
                                <div className="item_icon">
                                    <ProductOutlined className='psychology-icon' />
                                </div>
                                <div className="item_contact">
                                    <h3 className="item_title">Bo‘lajak tarbiyachilar uchun psixologik test</h3>
                                    <p>
                                        <strong>Ko‘rsatma:</strong> Har bir savolga o‘zingizga mos keladigan javobni tanlang.
                                    </p>
                                    <Link className="btn-link" to="/psychology-quiz/basic">
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
                                <div className="item_icon">
                                    <FileDoneOutlined className='psychology-icon' />
                                </div>
                                <div className="item_contact">
                                    <h3 className="item_title">Siz tarbiyachi sifatida qanchalik mos kelasiz?</h3>
                                    <p>
                                        <strong>Ko‘rsatma:</strong> Har bir savolga o‘zingizga mos keladigan javobni tanlang.
                                    </p>
                                    <Link className="btn-link" to="/psychology-quiz/educator"><span className="btn_text">O'tish</span> <span
                                        className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service_item">
                                <div className="item_icon">
                                    <ProjectOutlined className='psychology-icon' />
                                </div>
                                <div className="item_contact">
                                    <h3 className="item_title">Siz pedagogik faoliyat uchun mosmisiz?</h3>
                                    <p>
                                        <strong>Ko‘rsatma:</strong> Har bir savolga o‘zingizga eng mos keladigan javobni tanlang.
                                    </p>
                                    <Link className="btn-link" to="/psychology-quiz/activity"><span className="btn_text">O'tish</span> <span
                                        className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PsychologyQuizzes