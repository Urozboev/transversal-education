import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="site_footer bg_primary">
            <div className="container">
                <div className="site_footer_content">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="site_logo">
                                <a className="site_link" href="index_1.html">
                                    <img src="/assets/images/logo-white.png" alt="Transversal-education" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="info_list unordered_list justify-content-center">
                                <li><Link to="/"><span className="info_icon"><i className="fa-solid fa-circle"></i> </span><span
                                    className="info_text">Bosh sahifa</span></Link></li>
                                <li><Link to="/quiz/in"><span className="info_icon"><i className="fa-solid fa-circle"></i> </span><span
                                    className="info_text">Kirish test</span></Link></li>
                                <li><Link to="/report"><span className="info_icon"><i className="fa-solid fa-circle"></i> </span><span
                                    className="info_text">Mavzu bayoni</span></Link></li>
                                <li><Link to="/quiz/finish"><span className="info_icon"><i className="fa-solid fa-circle"></i> </span><span
                                    className="info_text">Yakuniy test</span></Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul className="social_links unordered_list justify-content-center justify-content-lg-end">
                                <li><a href="#!"><i className="fa-brands fa-telegram"></i></a></li>
                                <li><a href="#!"><i className="fa-solid fa-phone"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright_widget text-center">
                    <p className="copyright_text m-0">©<b>Transversal-Education</b> - {new Date().getFullYear()}</p>
                    <div style={{ fontSize: 12, margin: "0", fontStyle: 'italic' }} className='text-white'>Dasturchi: <a className='text-white' href="https://t.me/MirjalolUrozboev">Urozboev</a></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer