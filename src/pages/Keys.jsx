import { Link, Links } from "react-router-dom";

function Keys() {
  return (
    <main className="page_content">
      <section className="page_banner decoration_wrapper">
        <div className="container">
          <h1 className="page_title">Keyslar</h1>
          <ul className="breadcrumb_nav unordered_list justify-content-center justify-content-lg-start">
            <li>
              <Link to="/">Bosh sahifa</Link>
            </li>
            <li>Keyslar</li>
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
                    Bo'lajak tarbiyachilarda bo'lishi mumkin bo'lgan <strong>muammoli vaziyatlar uchun keyslar</strong>
                  </i>
                </p>
                <div className="accordion" id="faq_accordion">
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_one">
                      <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapse_one" aria-expanded="true"
                        aria-controls="collapse_one">
                        1. Muammo: Bolalar agressiyasini boshqarish
                      </button>
                    </div>
                    <div id="collapse_one" className="accordion-collapse collapse" aria-labelledby="heading_one"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Vaziyat:</strong> “Yulduzcha” nomli  o’rta guruhdagi 5 yoshli Aziz doimiy ravishda boshqa bolalarga qo‘pol muomala qiladi va ularni urmoqda. Guruh tarbiyachisi unga tushuntirish ishlari olib bormoqda, lekin bola o‘z xatti-harakatini o‘zgartirmayapti.
                          <br /><strong>Savollar:</strong>
                          <ul>
                            <li>Tarbiyachi bu holatni qanday hal qilishi kerak?</li>
                            <li>Bolaga qanday pedagogik yondashuv mos keladi?</li>
                            <li>Ota-onalar bilan qanday ishlash kerak?</li>
                          </ul>
                          <strong>Yechimlar:</strong>
                          <ul className="check-list">
                            <li>Bolaning agressiv harakati sabablari tahlil qilinadi (oila muhiti, e’tibor yetishmovchiligi, psixologik holati).</li>
                            <li>Bolaga ijobiy xulq-atvor namunasini ko‘rsatish (o‘yin orqali).</li>
                            <li>Bolalar o‘rtasida kelishuv madaniyatini shakllantirish uchun rolli o‘yinlar o‘tkazish.</li>
                            <li>Ota-onalar bilan maslahat o‘tkazish va bolaga ortiqcha jazo berishdan voz kechish.</li>
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
                        2. Muammo: Rivojlanishdan orqada qolayotgan bola
                      </button>
                    </div>
                    <div id="collapse_four" className="accordion-collapse collapse" aria-labelledby="heading_four"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Vaziyat:</strong> Alisher 4 yoshda u guruhdagi boshqa bolalarga nisbatan nutqiy rivojlanishi sust kechmoqda. U gapirishda qiynaladi, yangi so‘zlarni eslab qolishi qiyin.
                          <br /><strong>Savollar:</strong>
                          <ul>
                            <li>Tarbiyachi bolaning nutq rivojlanishiga yordam berish uchun qanday metodlardan foydalanishi mumkin?</li>
                            <li>Bolaning ota-onasi bilan qanday muloqot qilish lozim?</li>
                            <li>Rivojlanishning individual dasturini qanday ishlab chiqish mumkin?</li>
                          </ul>
                          <strong>Yechimlar:</strong>
                          <ul className="check-list">
                            <li>Bola uchun individual rivojlanish dasturi tuziladi.</li>
                            <li>Nutq rivojlantirish o‘yinlari (masalan, “Kim nima deydi?” o‘yini).</li>
                            <li>Logoped va defektolog bilan maslahatlashish.</li>
                            <li>Ota-onaga uy sharoitida qanday mashg‘ulotlar qilish kerakligi tushuntiriladi.</li>
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
                        3. Muammo: Jamoaviy ishlashga o‘rgatish
                      </button>
                    </div>
                    <div id="collapse_two" className="accordion-collapse collapse" aria-labelledby="heading_two"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Vaziyat:</strong> Davron 6 yoshda bola guruh faoliyatlarida ishtirok etmaydi, yolg‘iz o‘ynashni afzal ko‘radi.
                          <br /><strong>Savollar:</strong>
                          <ul>
                            <li>Bolani jamoaviy ishlashga qanday jalb qilish mumkin?</li>
                            <li>Qanday pedagogik o‘yinlar yordam berishi mumkin?</li>
                            <li>Guruhda ijtimoiy moslashuvni oshirish uchun qanday mashg‘ulotlar o‘tkazish kerak?</li>
                          </ul>
                          <strong>Yechimlar:</strong>
                          <ul className="check-list">
                            <li>Bolani sekin-asta guruh o‘yinlariga jalb qilish (masalan, jamoaviy qurilish o‘yinlari).</li>
                            <li>Jamoaviy topshiriqlar va rolli o‘yinlardan foydalanish.</li>
                            <li>Bola ijtimoiylashishida yordam berish uchun uning qiziqishlariga mos guruh faoliyatlarini tashkil etish.</li>
                            <li>Guruhdagi do‘stona muhitni shakllantirish uchun hamkorlikda bajariladigan mashg‘ulotlar o‘tkazish</li>
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
                        4. Muammo: Bolalarda ekologik ongni shakllantirish
                      </button>
                    </div>
                    <div id="collapse_n" className="accordion-collapse collapse" aria-labelledby="heading_n"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Vaziyat:</strong> Maktabgacha ta’lim tashkilotlarida bolalar qog‘oz va plastik chiqindilarni yerga tashlamoqda, atrof-muhitni toza saqlash qoidalariga rioya qilishmayapti.
                          <br /><strong>Savollar:</strong>
                          <ul>
                            <li>Tarbiyachi qanday metodlar yordamida bolalarda ekologik ongni shakllantirishi mumkin?</li>
                            <li>Amaliy mashg‘ulotlar va loyihaviy ishlar qanday bo‘lishi kerak?</li>
                            <li>Ota-onalarni bu jarayonga qanday jalb qilish mumkin?</li>
                          </ul>
                          <strong>Yechimlar:</strong>
                          <ul className="check-list">
                            <li>“Tabiatni asraymiz” nomli loyiha tashkillashtirish.</li>
                            <li>Qayta ishlash va chiqindilarni to‘g‘ri tashlash bo‘yicha interaktiv mashg‘ulot o‘tkazish.</li>
                            <li>Tabiat bilan bog‘liq ekskursiyalar va amaliy mashg‘ulotlarni o‘tkazish.</li>
                            <li>Ota-onalarni jalb qilish va oilada ekologik madaniyatni shakllantirishga urg‘u berish.</li>
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
                        5. Muammo: Innovatsion texnologiyalarni qo‘llash
                      </button>
                    </div>
                    <div id="collapse_three" className="accordion-collapse collapse" aria-labelledby="heading_three"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Vaziyat:</strong> Maktabgacha ta’lim tashkiloti tarbiyachisi bolalar bilan mashg’ulot jarayonida raqamli vositalarni qo‘llashni istaydi, lekin qanday qilib samarali foydalanishni bilmaydi.
                          <br /><strong>Savollar:</strong>
                          <ul>
                            <li>Maktabgacha ta’limda qaysi raqamli texnologiyalarni qo‘llash mumkin?</li>
                            <li>Bolalar uchun mos bo‘lgan interaktiv o‘yinlar va ilovalar qanday tanlanadi?</li>
                            <li>Raqamli vositalarni haddan ortiq ishlatishning oldini olish uchun qanday chora ko‘rish kerak?</li>
                          </ul>
                          <strong>Yechimlar:</strong>
                          <ul className="check-list">
                            <li>Maktabgacha ta’limda interaktiv doskalar, AR (kengaytirilgan reallik) ilovalari va bolalar uchun mo‘ljallangan dasturiy ta’minotlarni joriy etish.</li>
                            <li>Ta’limiy mobil ilovalar va virtual o‘yinlar orqali bolalarni rag‘batlantirish.</li>
                            <li>Bolalarning texnologiyaga haddan ortiq bog‘lanib qolmasligi uchun o‘yin va raqamli ta’lim o‘rtasida balansni saqlash.</li>
                            <li>Texnologik vositalardan foydalanish bo‘yicha ota-onalarni xabardor qilish.</li>
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
                        6. Muammo: Kamgap bola
                      </button>
                    </div>
                    <div id="collapse_five" className="accordion-collapse collapse" aria-labelledby="heading_five"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Vaziyat:</strong> Katta guruhda Ahmadjon  juda kam gapiradi, boshqa bolalar bilan muloqotga kirishmaydi. Tarbiyachi uni o‘yinlarga jalb qilmoqchi.
                          <br /><strong>Savollar:</strong>
                          <ul>
                            <li>Tarbiyachi bolani muloqotga undash uchun qanday metodlardan foydalanishi kerak?</li>
                            <li>O‘yin va rolli mashg‘ulotlarning qaysi turlari foydali bo‘lishi mumkin?</li>
                            <li>Bunday bolalar bilan individual ishlashda nimalarga e’tibor berish kerak?</li>
                          </ul>
                          <strong>Yechimlar:</strong>
                          <ul className="check-list">
                            <li>Bolani qiziqtiradigan mavzular bo‘yicha suhbatlar tashkil qilish.</li>
                            <li>Teatr o‘yinlari va hikoya tuzish mashqlari orqali bola nutqini rivojlantirish.</li>
                            <li>Muloqotni rag‘batlantirish uchun do‘stona muhit yaratish.</li>
                            <li>Tarbiyachi va ota-onalar o‘rtasida bolaga yordam berish bo‘yicha hamkorlikni yo‘lga qo‘yish.</li>
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
                        7. Muammo: Milliy qadriyatlarni singdirish
                      </button>
                    </div>
                    <div id="collapse_six" className="accordion-collapse collapse" aria-labelledby="heading_six"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Vaziyat:</strong> Maktabgacha ta’lim tashkilotida bolalar milliy bayram va qadriyatlarni yaxshi tushunishmaydi. Tarbiyachi milliy qadriyatlarni bolalarga singdirish uchun yo‘l izlamoqda.
                          <br /><strong>Savollar:</strong>
                          <ul>
                            <li>Milliy qadriyatlarni maktabgacha yoshdagi bolalarga qanday tushuntirish mumkin?</li>
                            <li>Milliy ertaklar va o‘yinlardan qanday foydalanish kerak?</li>
                            <li>Amaliy loyihalar (milliy hunarmandchilik, kiyimlar, taomlar) qanday o‘rgatilishi mumkin?</li>
                          </ul>
                          <strong>Yechimlar:</strong>
                          <ul className="check-list">
                            <li>Milliy o‘yinlar, ertaklar va qo‘shiqlar orqali milliy qadriyatlarni bolalarga yetkazish.</li>
                            <li>“O‘zbek milliy kiyimlari” mavzusida amaliy dars o‘tkazish.</li>
                            <li>Ota-onalar bilan hamkorlikda milliy taom tayyorlash bo‘yicha tadbir tashkil qilish.</li>
                            <li>Mahalliy madaniyat va an’analarni bolalar bog‘chasining turli tadbirlarida aks ettirish.</li>
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
                        8. Muammo: Konfliktni hal qilish
                      </button>
                    </div>
                    <div id="collapse_seven" className="accordion-collapse collapse" aria-labelledby="heading_seven"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Vaziyat:</strong> Tayyorlov guruhidagi Sarvar va Anvar bir-birlari bilan o‘yinchoq uchun janjallashib, bir-birini urib qo‘ydi.
                          <br /><strong>Savollar:</strong>
                          <ul>
                            <li>Tarbiyachi qanday qilib nizoni to‘g‘ri hal qilishi mumkin?</li>
                            <li>Bolalarni kelishuvga o‘rgatishning qanday pedagogik usullari mavjud?</li>
                            <li>Bunday holatlarning oldini olish uchun qanday chora ko‘rish kerak?</li>
                          </ul>
                          <strong>Yechimlar:</strong>
                          <ul className="check-list">
                            <li>“Tinch yo‘l bilan kelishamiz” usulini qo‘llash.</li>
                            <li>Bolalar bilan empatiya va ijtimoiy munosabatlar bo‘yicha mashg‘ulotlar o‘tkazish.</li>
                            <li>Konfliktni yechishda faqat jazo berishga emas, bolalarni muammoni mustaqil hal qilishga o‘rgatish.</li>
                            <li>Ota-onalar bilan hamkorlikda bolalarga stressni boshqarish texnikalarini o‘rgatish.</li>
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
                        9. Muammo: Matematika darsiga qiziqishni oshirish
                      </button>
                    </div>
                    <div id="collapse_eight" className="accordion-collapse collapse" aria-labelledby="heading_eight"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Vaziyat:</strong> Maktabgacha ta’lim tashkilotidagi katta guruh 6 yoshli bolalar matematikaga qiziqish bildirishmaydi, son-sanoqlarni o‘rganishga e’tibor berishmaydi.
                          <br /><strong>Savollar:</strong>
                          <ul>
                            <li>Maktabgacha ta’limda matematikani o‘rgatish uchun qanday innovatsion usullardan foydalanish mumkin?</li>
                            <li>Sonlar va shakllarni o‘rgatish uchun qaysi o‘yinlar samarali bo‘lishi mumkin?</li>
                            <li>Bolalarning faolligini oshirish uchun qanday motivatsiya usullarini qo‘llash kerak?</li>
                          </ul>
                          <strong>Yechimlar:</strong>
                          <ul className="check-list">
                            <li>Matematika o‘yinlari va interaktiv topshiriqlar orqali darslarni jonlantirish.</li>
                            <li>Hayotiy vaziyatlarga asoslangan misollar bilan bolalarni qiziqtirish.</li>
                            <li>Rangli kartalar, geometrik shakllar va qo‘g‘irchoqlar yordamida tushuntirish.</li>
                            <li>Bolalarni mustaqil kashfiyot qilishga undovchi topshiriqlar berish.</li>
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
                        10. Muammo: Ota-onalar bilan samarali hamkorlik
                      </button>
                    </div>
                    <div id="collapse_nine" className="accordion-collapse collapse" aria-labelledby="heading_nine"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          <strong>Vaziyat:</strong> Maktabgacha ta’lim tashkilotidagi o’rta guruhdagi ba’zi ota-onalar farzandlariga yetarlicha e’tibor bermayapti va ularning rivojlanishiga befarq.
                          <br /><strong>Savollar:</strong>
                          <ul>
                            <li>Tarbiyachi ota-onalar bilan qanday ishlashi kerak?</li>
                            <li>Ularni ta’lim jarayoniga jalb qilish uchun qanday strategiyalar qo‘llash mumkin?</li>
                            <li>Ota-onalarning pedagogik bilimlarini oshirish uchun qanday tadbirlar tashkil qilish kerak?</li>
                          </ul>
                          <strong>Yechimlar:</strong>
                          <ul className="check-list">
                            <li>Ota-onalar bilan muntazam uchrashuvlar va seminarlar tashkil qilish.</li>
                            <li>Bolalarning bog‘chadagi yutuqlarini ota-onalar bilan muhokama qilish.</li>
                            <li>Ota-onalarni bog‘cha tadbirlariga jalb qilish.</li>
                            <li>Maktabgacha ta’lim jarayoniga oid muhim maslahatlarni tarqatish (masalan, ota-onalar uchun yo‘riqnomalar).</li>
                          </ul>
                        </div>
                      </div>
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
                        alt="Talking Minds - Psychotherapist Site Template"
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

export default Keys;
