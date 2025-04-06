import { Link, Links } from "react-router-dom";

function Transversal() {
  return (
    <main className="page_content">
      <section className="page_banner decoration_wrapper">
        <div className="container">
          <h1 className="page_title">Transversal pedagogik texnologiyalar</h1>
          <ul className="breadcrumb_nav unordered_list justify-content-center justify-content-lg-start">
            <li>
              <Link to="/">Bosh sahifa</Link>
            </li>
            <li>Transversal pedagogik texnologiyalar</li>
          </ul>
        </div>
        <div className="decoration_item shape_leaf_1">
          <img
            src="assets/images/shape_leaf_left.svg"
            alt="transversal"
          />
        </div>
        <div className="decoration_item shape_leaf_2">
          <img
            src="assets/images/shape_leaf_right.svg"
            alt="transversal"
          />
        </div>
      </section>
      <section className="blog_details_section section_space_sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="details_content">
                <p>
                  <i>
                    Bo‘lajak tarbiyachilarda <strong>transversal-metodik kompetentsiyani rivojlantirish</strong> uchun <strong>zamonaviy pedagogik texnologiyalar</strong> juda muhim rol o‘ynaydi. Quyida <strong>eng samarali pedagogik texnologiyalar</strong> keltirilgan bo‘lib, ular <strong>maktabgacha ta’lim yo‘nalishi</strong> talabalarining <strong>kasbiy va transversal kompetensiyalarini rivojlantirish</strong> uchun mo‘ljallangan.
                  </i>
                </p>
                <div className="accordion" id="faq_accordion">
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_one">
                      <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapse_one" aria-expanded="true"
                        aria-controls="collapse_one">
                        1. Kolaborativ o‘qitish (Collaborative Learning)
                      </button>
                    </div>
                    <div id="collapse_one" className="accordion-collapse collapse" aria-labelledby="heading_one"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Mohiyati:</strong><br />
                          Talabalarni kichik guruhlarga bo‘lib, <strong>birgalikda ishlash</strong> orqali <strong>hamkorlik, ijodiy fikrlash, muloqot</strong> va <strong>muammolarni hal qilish</strong> ko‘nikmalarini rivojlantirish. <br />
                          <strong>Qo‘llash usuli:</strong>
                          <ul>
                            <li><strong>Keys-stadiyalar</strong> (vaziyatli tahlillar) orqali muammolarni guruhda hal qilish</li>
                            <li>O‘zaro <strong>peer-review</strong> usulida baholash</li>
                            <li><strong>Jamoaviy mini-loyihalar</strong> yaratish</li>
                            <li><strong>Bebaho do‘st</strong> texnologiyasi – talabalarning bir-biriga yordam berishi</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_four">
                      <button className="accordion-button collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse_four" aria-expanded="false"
                        aria-controls="collapse_four">
                        2. STEAM texnologiyasi (Science, Technology, Engineering, Arts, Mathematics)
                      </button>
                    </div>
                    <div id="collapse_four" className="accordion-collapse collapse" aria-labelledby="heading_four"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Mohiyati:</strong><br />
                          Maktabgacha yoshdagi bolalar bilan ishlashda tabiiy fanlar, texnologiya, san’at va matematika asoslarini <strong>ijodiy uyg‘unlashtirish</strong> orqali <strong>tanqidiy fikrlash, ijodkorlik va muammolarni hal qilish</strong> kompetensiyalarini rivojlantirish. <br />
                          <strong>Qo‘llash usuli:</strong>
                          <ul>
                            <li><strong>Sensor ta’lim</strong> (shaxsiy tajriba orqali o‘rganish)</li>
                            <li><strong>Interfaol modellar</strong> (3D, Lego, VR) orqali tushuntirish</li>
                            <li><strong>Kodlash va robototexnika</strong> asoslari</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_two">
                      <button className="accordion-button collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse_two" aria-expanded="false"
                        aria-controls="collapse_two">
                        3. Flipped Learning (Teskari ta’lim)
                      </button>
                    </div>
                    <div id="collapse_two" className="accordion-collapse collapse" aria-labelledby="heading_two"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Mohiyati:</strong><br />
                          Talabalar asosiy nazariy materialni <strong>oldindan mustaqil o‘rganib</strong>, darsda esastrong
                          amaliy mashg‘ulotlarga e’tibor qaratish. Bu <strong>mustaqil o‘rganish, tanqidiy tafakkur, va muammoli vaziyatlarni hal qilish</strong> kompetensiyalarini shakllantiradi. <br />
                          <strong>Qo‘llash usuli:</strong>
                          <ul>
                            <li><strong>Video darslar orqali</strong> mustaqil o‘rganish</li>
                            <li><strong>Amaliy keyslar</strong> asosida muammolar yechish</li>
                            <li><strong>Didaktik o‘yinlar</strong> orqali bilimsizlanishni aniqlash</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_n">
                      <button className="accordion-button collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse_n" aria-expanded="false"
                        aria-controls="collapse_n">
                        4. Problem-based Learning (Muammoli o‘qitish)
                      </button>
                    </div>
                    <div id="collapse_n" className="accordion-collapse collapse" aria-labelledby="heading_n"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Mohiyati:</strong><br />
                          Talabalar <strong>haqiqiy hayotiy muammolarni mustaqil tahlil qilis</strong>h orqali bilim va kompetensiyalarni o‘zlashtiradilar. <br />
                          <strong>Qo‘llash usuli:</strong>
                          <ul>
                            <li><strong>Muammoli vaziyatlarni</strong> tahlil qilish</li>
                            <li><strong>Mini-loyihalar va tadqiqot ishlari</strong> orqali yechim topish</li>
                            <li><strong>O‘zaro baholash</strong> va refleksiya qilish</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_three">
                      <button className="accordion-button collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse_three" aria-expanded="false"
                        aria-controls="collapse_three">
                        5. Gamifikatsiya (Gamification)
                      </button>
                    </div>
                    <div id="collapse_three" className="accordion-collapse collapse" aria-labelledby="heading_three"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Mohiyati:</strong><br />
                          Dars jarayoniga o‘yin elementlarini qo‘shish orqali <strong>motivatsiya va ishtirokni</strong> oshirish. <br />
                          <strong>Qo‘llash usuli:</strong>
                          <ul>
                            <li><strong>Rol o‘yinlari</strong> (real hayotiy vaziyatlarni jonlantirish)</li>
                            <li><strong>Raqobatli topshiriqlar</strong> va ballar tizimi</li>
                            <li><strong>Interfaol ta’lim platformalaridan</strong> foydalanish</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_five">
                      <button className="accordion-button collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse_five" aria-expanded="false"
                        aria-controls="collapse_five">
                        6. Differensiallashtirilgan ta’lim (Differentiated Learning)
                      </button>
                    </div>
                    <div id="collapse_five" className="accordion-collapse collapse" aria-labelledby="heading_five"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Mohiyati:</strong><br />
                          Talabalarning <strong>individual qobiliyatlari, qiziqishlari va o‘rganish uslublariga mos</strong> yondashish. <br />
                          <strong>Qo‘llash usuli:</strong>
                          <ul>
                            <li><strong>Multiple Intelligences</strong> (Ko‘p intellekt nazariyasi) asosida turli metodlar</li>
                            <li><strong>Talabalarning kuchli tomonlariga mos mashg‘ulotlar</strong></li>
                            <li><strong>Individual yo‘nalgan topshiriqlar</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_six">
                      <button className="accordion-button collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse_six" aria-expanded="false"
                        aria-controls="collapse_six">
                        7. Proyekt asosida o‘qitish (Project-based Learning, PBL)
                      </button>
                    </div>
                    <div id="collapse_six" className="accordion-collapse collapse" aria-labelledby="heading_six"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Mohiyati:</strong><br />
                          Talabalar <strong>haqiqiy loyihalarni amalga oshirish orqali</strong> bilim va ko‘nikmalarni rivojlantiradi. <br />
                          <strong>Qo‘llash usuli:</strong>
                          <ul>
                            <li><strong>Bolalar bog‘chasida loyihalar tashkil qilish</strong></li>
                            <li><strong>Dasturiy material yaratish</strong> (video, infografika)</li>
                            <li><strong>Virtual loyiha platformalarida ishlash</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_seven">
                      <button className="accordion-button collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse_seven" aria-expanded="false"
                        aria-controls="collapse_seven">
                        8. Reflektiv o‘qitish (Reflective Learning)
                      </button>
                    </div>
                    <div id="collapse_seven" className="accordion-collapse collapse" aria-labelledby="heading_seven"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Mohiyati:</strong><br />
                          Talabalarning o‘z bilimlari, tajribalari va o‘rganish jarayonlari ustida tahlil yuritishiga asoslangan. <br />
                          <strong>Qo‘llash usuli:</strong>
                          <ul>
                            <li><strong>"Kunning eng yaxshi sabog‘i" usuli</strong></li>
                            <li><strong>Kunlik va blog yuritish</strong></li>
                            <li><strong>Refleksiya savollari va tahlillar</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_eight">
                      <button className="accordion-button collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse_eight" aria-expanded="false"
                        aria-controls="collapse_eight">
                        9. Blended Learning (Aralash o‘qitish)
                      </button>
                    </div>
                    <div id="collapse_eight" className="accordion-collapse collapse" aria-labelledby="heading_eight"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Mohiyati:</strong><br />
                          An’anaviy darslar bilan <strong>onlayn resurslar va texnologiyalarni</strong> uyg‘unlashtirish. <br />
                          <strong>Qo‘llash usuli:</strong>
                          <ul>
                            <li>
                              <strong>Google Classroom, Moodle</strong> orqali onlayn topshiriqlar
                            </li>
                            <li>
                              <strong>QR-kodli interfaol materiallar</strong>
                            </li>
                            <li>
                              <strong>Video darslar va WebQuestlar</strong>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_nine">
                      <button className="accordion-button collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse_nine" aria-expanded="false"
                        aria-controls="collapse_nine">
                        10. Portfolio Learning (Portfolioga asoslangan ta’lim)
                      </button>
                    </div>
                    <div id="collapse_nine" className="accordion-collapse collapse" aria-labelledby="heading_nine"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Mohiyati:</strong><br />
                          Talabalar o‘z rivojlanishini baholash uchun <strong>shaxsiy portfolio</strong> yuritadi. <br />
                          <strong>Qo‘llash usuli:</strong>
                          <ul>
                            <li><strong>Tarbiyachi sifatida dars loyihalarini yaratish</strong></li>
                            <li><strong>O‘z ustida ishlash bo‘yicha refleksiya yuritish</strong></li>
                            <li><strong>Muvaffaqiyatlarini hujjatlashtirish</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  <i>
                    <strong>XULOSA</strong> <br />
                    Bu <strong>pedagogik texnologiyalar</strong> bo‘lajak tarbiyachilarning <strong>transversal-metodik kompetensiyalarini rivojlantirishga</strong> xizmat qiladi. Har bir texnologiya <strong>tanqidiy tafakkur, muammolarni hal qilish, ijodkorlik va mustaqil ta’lim olish</strong> kabi muhim ko‘nikmalarni shakllantirishga yordam beradi.

                  </i>
                </p>
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
                        alt="Transversal"
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

export default Transversal;
