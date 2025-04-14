import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"

function Navbar() {
    const location = useLocation();
    const [path, setPath] = useState([]);
    useEffect(() => {
        setPath(location.pathname.split('/'));
    }, [location]);
    return (
        <>
            <header className="site_header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-5">
                            <div className="site_logo">
                                <Link className="site_link simple_logo" to="/">
                                    <img src="/assets/images/logo-colors.png" alt="TRANSVERSAL Education" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-2">
                            <nav className="main_menu navbar navbar-expand-lg">
                                <div className="main_menu_inner collapse navbar-collapse justify-content-center" id="main_menu_dropdown">
                                    <ul className="main_menu_list unordered_list">
                                        <li className={`${location.pathname === '/' ? 'active' : ''}`}><Link to="/">Bosh sahifa</Link></li>
                                        <li className={`${path[1] === 'quiz' && path[2] === 'in' ? 'active' : ''}`}><Link to="quiz/in">Kirish testi</Link></li>
                                        <li className="dropdown"><a className="nav-link" href="#" id="programs_submenu" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">Bo'limlar</a>
                                            <ul className="dropdown-menu" aria-labelledby="programs_submenu">
                                                <li className={`${path.length < 3 && path[1] === 'report' ? 'active' : ''}`}><Link to="/report">Maruza</Link></li>
                                                <li className={`${path.length < 3 && path[1] === 'keys' ? 'active' : ''}`}><Link to="/keys">Keyslar</Link></li>
                                                <li className={`${path.length < 3 && path[1] === 'psychology-quiz' ? 'active' : ''}`}><Link to="/psychology-quiz">Psixologik testlar</Link></li>
                                                <li className={`${path.length < 3 && path[1] === 'transversal' ? 'active' : ''}`}><Link to="/transversal">Transversal texnologiyalar</Link></li>
                                                <li className={`${path.length < 3 && path[1] === 'laws' ? 'active' : ''}`}><Link to="/laws">Qaror va qoonunlar</Link></li>
                                                <li className={`${path[1] === 'quiz' && path[2] === 'iq' ? 'active' : ''}`}><Link to="/quiz/iq">IQ testlar</Link></li>
                                                <li className={`${path[1] === 'quiz' && path[2] === 'finish' ? 'active' : ''}`}><Link to="/quiz/finish">Yakuniy test</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-lg-3 col-5">
                            <ul className="header_btns_group unordered_list justify-content-end">
                                <li><button className="mobile_menu_btn" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation"><i
                                        className="far fa-bars"></i></button></li>
                                <li>
                                    <Link className="btn_hotline" to="report">
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-bell"></i>
                                        </span>
                                        <span className="btn_text">Mavzuni boshlash</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar