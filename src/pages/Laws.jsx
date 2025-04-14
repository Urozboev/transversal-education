import { Link, Links } from "react-router-dom";

function Laws() {
  return (
    <main className="page_content">
      <section className="page_banner decoration_wrapper">
        <div className="container">
          <h1 className="page_title">O‘zbekiston Respublikasi maktabgacha ta’lim tizimiga oid qaror va qonunlar</h1>
          <ul className="breadcrumb_nav unordered_list justify-content-center justify-content-lg-start">
            <li>
              <Link to="/">Bosh sahifa</Link>
            </li>
            <li>O‘zbekiston Respublikasi maktabgacha ta’lim tizimiga oid qaror va qonunlar</li>
          </ul>
        </div>
        <div className="decoration_item shape_leaf_1">
          <img
            src="assets/images/shape_leaf_left.svg"
            alt="trasnversal"
          />
        </div>
        <div className="decoration_item shape_leaf_2">
          <img
            src="assets/images/shape_leaf_right.svg"
            alt="trasnversal"
          />
        </div>
      </section>
      <section className="blog_details_section section_space_sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="details_content">
                <div className="accordion" id="faq_accordion">
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_one">
                      <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapse_one" aria-expanded="true"
                        aria-controls="collapse_one">
                        Maktabgacha taʼlim tashkilotlari pedagoglarining
                        ish hujjatlarini tasdiqlash toʻgʻrisida
                      </button>
                    </div>
                    <div id="collapse_one" className="accordion-collapse collapse" aria-labelledby="heading_one"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <iframe className="my-iframe" src="/assets/files/buyruq.pdf#page=1&zoom=100" frameborder="0"></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_four">
                      <button className="accordion-button collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse_four" aria-expanded="false"
                        aria-controls="collapse_four">
                        O‛zbekiston respublikasi Maktabgacha ta'lim tashkilotlari uchun "ILK QADAM" davlat o‘quv dasturi
                      </button>
                    </div>
                    <div id="collapse_four" className="accordion-collapse collapse" aria-labelledby="heading_four"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <iframe className="my-iframe" src="/assets/files/ilk_qadam.pdf#page=1&zoom=100" frameborder="0"></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_two">
                      <a href="http://lex.uz//docs/-4646908" target="_blank" rel="noreferrer">
                        <button className="accordion-button collapsed"
                          type="button" data-bs-toggle="collapse" data-bs-target="#collapse_two" aria-expanded="false"
                          aria-controls="collapse_two">
                          Maktabgacha ta’lim va tarbiya to‘g‘risida
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_n">
                      <a href="http://lex.uz//docs/-4327235" target="_blank" rel="noreferrer">
                        <button className="accordion-button collapsed"
                          type="button" data-bs-toggle="collapse" data-bs-target="#collapse_n" aria-expanded="false"
                          aria-controls="collapse_n">
                          O‘zbekiston Respublikasi maktabgacha ta’lim tizimini 2030-yilgacha rivojlantirish konsepsiyasini tasdiqlash to‘g‘risida
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="post_tagsandshare">
                  <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                      <h4 className="wrap_title text-md-end">Ulashish:</h4>
                      <ul className="social_links unordered_list justify-content-md-end">
                        <li>
                          <a href="#!">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fa-brands fa-whatsapp"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar ps-lg-4">
                <div className="sidebar_widget short_list">
                  <h3 className="sidebar_widget_title">
                    <span className="title_icon">
                      <img
                        src="assets/images/favourite_icon.svg"
                        alt="transversal"
                      />
                    </span>
                    <span className="title_text"> Bo'limlar </span>
                  </h3>
                  <ul className="post_category_list unordered_list_block">
                    <li>
                      <Link to="/quiz/in">
                        <i className="fa-solid fa-caret-right"></i>
                        <span className="category_name">Kirish testi</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/report">
                        <i className="fa-solid fa-caret-right"></i>
                        <span className="category_name">Mavzu bayoni</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/transversal">
                        <i className="fa-solid fa-caret-right"></i>
                        <span className="category_name">
                          Transversal texnologiyalar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/keys">
                        <i className="fa-solid fa-caret-right"></i>
                        <span className="category_name">Keyslar</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/laws">
                        <i className="fa-solid fa-caret-right"></i>
                        <span className="category_name">Qaror va qonunlar</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/psychology-quiz">
                        <i className="fa-solid fa-caret-right"></i>
                        <span className="category_name">
                          Psixologik testlar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/quiz/iq">
                        <i className="fa-solid fa-caret-right"></i>
                        <span className="category_name">IQ testlar</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/quiz/finish">
                        <i className="fa-solid fa-caret-right"></i>
                        <span className="category_name">Yakuniy test</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Laws;
