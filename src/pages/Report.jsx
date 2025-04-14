import { Link, Links } from "react-router-dom";
import Test from "../sections/Test";
import { reportQuestions } from "../utils/data";
import { useState } from "react";

function Report() {
  const [quizNumber, setQuizNumber] = useState(0);
  const [quizLength, setQuizLength] = useState(0);
  return (
    <main className="page_content">
      <section className="page_banner decoration_wrapper">
        <div className="container">
          <h1 className="page_title">Mavzu bayoni</h1>
          <ul className="breadcrumb_nav unordered_list justify-content-center justify-content-lg-start">
            <li>
              <Link to="/">Bosh sahifa</Link>
            </li>
            <li>Mavzu bayoni</li>
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
              {/* <div className="details_image">
                <img
                  src="assets/images/blog_image_11-min.jpg"
                  alt="Talking Minds - Psychotherapist Site Template"
                />
              </div> */}
              <div className="details_content">
                {/* <ul className="post_meta unordered_list mb-4">
                  <li>
                    <i className="fa-regular fa-calendar-days"></i> 24-mart 2025
                  </li>
                  <li>
                    <i className="fa-regular fa-eye"></i> 120 ko'rishlar
                  </li>
                </ul> */}
                <p>
                  <i>
                    <strong>Tayanch tushunchalar.</strong> kompetentlik
                    munosabatlari, kompetentsiya, transvers
                    vakolatlar,transversal kompetensiyalarni rivojlantirish –
                    didaktik konkretlashtirish yondashuvlar, tamoyillari va
                    shartlari
                  </i>
                </p>
                <blockquote>
                  <div className="quote_icon">
                    <img
                      src="assets/images/icon_quote.svg"
                      alt="ProMotors - Icon Quote"
                    />
                  </div>
                  <div className="quote_content">
                    <span className="d-block">
                      “Ta’lim prinsiplari bor ekan, hamisha tarbiya prinsiplari ham bo‘ladi, yoki aksincha.”
                    </span>
                    <cite title="A.Disterveg">
                      A.Disterveg
                    </cite>
                  </div>
                </blockquote>
                <div className="section_heading mb-lg-4 mb-2">
                  <h2 className="section_heading_text mb-0">Mavzu bayoni</h2>
                </div>
                <div className="accordion" id="faq_accordion">
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_one">
                      <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapse_one" aria-expanded="true"
                        aria-controls="collapse_one">
                        Bo‘lajak tarbiyachilarda transversal-metodik kompetensiyani
                        rivojlantirishning mazmuni.
                      </button>
                    </div>
                    <div id="collapse_one" className="accordion-collapse collapse" aria-labelledby="heading_one"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          Jahon miqyosida fan va texnikaning jadal sur’atlar bilan
                          rivojlanishi, ilmiy bilimlar, tushuncha va tasavvurlar hajmi
                          keskin ortib borishi kreativlik sifatiga ega boʻlgan boʻlajak
                          kadrlarni tayyorlash texnologiyalarini amalga tatbiq etish
                          imkoniyatlarini kengaytirmoqda. Globallashuv jarayonlari,
                          fan-texnika taraqqiyoti sharoitida mustaqil ta’lim jarayonida
                          boʻlajak tarbiyachilarning shaxsiy transversal
                          kompetensiyalarini shakllantirish, intellektual salohiyatini
                          oshirishni umumiylik, yaxlitlik, izchillik tamoyillari asosida
                          tashkillashtirish boʻyicha tizimli ishlar olib borilmoqda.
                          Jamiyatning va umuman dunyoning hozirgi holati globallashuv va
                          modernizatsiya jarayonlari bilan tavsiflanadi. Ijtimoiy
                          tenglik, jadal texnologik taraqqiyot, iqtisodiy o‘sish,
                          barqaror rivojlanish va atrof-muhitni muhofaza qilish kabi
                          ijtimoiy-iqtisodiy o‘zgarishlar insoniyatni keyingi yashashga
                          moslashishga majbur qiladi. Hozirgi sharoitda ta’lim sohasida
                          mutaxassislar tayyorlashning mavjud modellarining salmoqli
                          qismi endi mehnat bozori shartlariga javob bermayapti, bu esa
                          ularni talablarni hisobga olgan holda yangilash zaruratini
                          tug‘dirmoqda. 21-asr bo‘lajak tarbiyachisining transversal
                          kompetensiyalari: nazariy tahlil sivilizatsiyaning muammolari,
                          raqobatbardosh, tez o‘zgaruvchan va texnologiyaga asoslangan
                          dunyoda omon qolish va rivojlanish uchun bilim, ko‘nikma,
                          qobiliyat va qadriyatlarni birlashtirgan ko‘ndalang
                          kompetentsiyalarga ega bo‘lish zarurligini tobora e‘tirof
                          etilmoqda. Transversal kompetensiyalar - bu odamlar tobora
                          murakkab va o‘zaro bog‘langan dunyoda harakat qilishlari kerak
                          bo‘lgan muhim ko‘nikmalardir. Bo‘lajak tarbiyachi sifatida
                          tarbiyachi va bolalarda bu malakalarni rivojlantirish va
                          rivojlantirish muhim. Bo‘lajak tarbiyachilar uchun muhim
                          bo‘lgan ba’zi asosiy transversal kompetensiyalar: Bo‘lajak
                          tarbiyachilar ushbu transversal kompetensiyalarni ishlab
                          chiqish va o‘zida mujassamlashtirish orqali ularning darsdagi
                          samaradorligini oshirishlari, har tomonlama rivojlanishini
                          qo‘llab-quvvatlashlari va ta’lim tizimidagi ijobiy
                          o‘zgarishlarga hissa qo‘shishlari mumkin. YuNESKO rahbariyati
                          tomonidan olib borilgan ta’lim siyosati va amaliyotida
                          transversal kompetentsiyalar bo‘yicha mintaqaviy tadqiqotda
                          transversal kompetentsiyalar oltita sohani o‘z ichiga oladi:
                          <ol>
                            <li>tanqidiy va innovatsion fikrlash</li>
                            <li>shaxslararo ko‘nikmalar</li>
                            <li>shaxsiy qobiliyatlar</li>
                            <li>global fuqarolik</li>
                            <li>media va axborot savodxonligi.</li>
                          </ol>
                          <strong>Tanqidiy va innovatsion fikrlash.</strong> Pedagogik nuqtai nazardan, tanqidiy fikrlash - bu
                          shaxsning qobiliyati bilan tavsiflangan aqliy operatsiyalar
                          majmui:
                          <ul type="circle">
                            <li>har qanday manbalardan olingan ma’lumotlarni tahlil qilish</li>
                            <li>taqqoslash, sintez qilish, baholash</li>
                            <li>muammolarni ko‘rish, savollar berish</li>
                            <li>gipotezalarni taklif qilish va muqobil variantlarni baholash</li>
                            <li>ongli ravishda tanlash, qaror qabul qilish va uni asoslash</li>
                          </ul>
                          Bo‘lajak tarbiyachi uchun ta’lim
                          jarayonini tashkil etishda tanqidiy fikrlash muhim ahamiyatga
                          ega. Bu bir nechta muhim vazifalarni hal qilishga yordam
                          beradi: o‘quv materialining mazmunini tanlash, ularning
                          shaxsiyatini rivojlantirish kontekstida kognitiv faoliyatini
                          tashkil etish shakllari va usullarini tanlash lozim.Bo‘lajak
                          tarbiyachi tanqidiy fikrlashning turli elementlarini, uning
                          ishonchliligi, dolzarbligi, amaliy foydaliligi, boshqa fanlar
                          bilan bog‘liqligi nuqtai nazaridan qo‘llaydi. Innovatsion
                          fikrlash - bu shaxsning tizimli ijodkorlikka ega bo‘lish
                          qobiliyati, bu yangi narsaning tug‘ilishini, mavjud muhitni
                          o‘zgartiradigan innovatsiyalarni yaratish imkoniyatini,
                          muammoga turli nuqtai nazarlardan qarash, ko‘plab g‘oyalar va
                          mumkin bo‘lgan narsalarni yaratish qobiliyatidir. O‘qitish
                          oldindan aytib bo‘lmaydigan faoliyat bo‘lganligi sababli,
                          noaniqlik bilan kurashish uchun ijodkorlik kerak.Bo‘lajak
                          tarbiyachi improvizatsiya qila olsa, bolalarning ehtiyojlariga
                          moslashsa, o‘z-o‘zidan bo‘lsa, u barcha imkoniyatlardan
                          maksimal darajada foydalanadi va ajoyib natijalarga erishadi.
                          Ijodkor tarbiyachi juda ko‘p g‘oyalarni tezda o‘ylab topish
                          qobiliyatiga ega; muammolarni baholash va naqshlarni topishda
                          moslashuvchanlikni, g‘oyalarni chuqurlashtirish va
                          tafsilotlash, ma’lumotni doimiy ravishda o‘zlashtirish,
                          o‘rganishni yanada qiziqarli, qiziqarli va samarali qilish
                          uchun turli yondashuvlardan foydalanish qobiliyatini namoyish
                          etadi. Shaxslararo munosabatlar ko‘pincha ijtimoiy intellekt
                          deb ataladi. Ular insonning boshqalar bilan samarali muloqot
                          qilish uchun foydalanadigan xatti-harakatlari va taktikalarini
                          o‘z ichiga oladi. Bo‘lajak tarbiyachi uchun eng dolzarb va
                          qimmatli bo‘lganlar - bu muloqot qobiliyatlari, jamoada
                          ishlash, yetakchilik, hissiy aql, hamkorlik, xushmuomalalik,
                          kollegiallik kabi sifatlardir Kasbiy faoliyat sifatini
                          oshirishning asosiy usuli - bu o‘z atrofida qulaylik zonasini
                          shakllantirish, talabalarning mustaqil fikrlash istagini
                          rivojlantirish, maqsad va unga erishish yo‘llarini tushunishga
                          undash, rejalashtirish va tashkil etishni anglatadigan
                          yetakchilik qobiliyatining namoyon bo‘lishi, birgalikdagi
                          faoliyat, o‘quv jarayoni natijalari uchun javobgar bo‘lishdir.
                          Muloqot ikki tomonlama jarayondir. U ham ifodali, ham qabul
                          qiluvchi. Bo‘lajak tarbiyachilar quyidagilarga ega bo‘lishlari
                          kerak: − bolalarning fikr va g‘oyalarini tinglash va
                          tushunish; − o‘z fikrlarini aniq ifodalash; − murakkab
                          vazifalarni oson o‘rganiladigan bosqichlarga ajrata olish; −
                          talabalarning fikrlarini «o‘qiy» olish. Muloqotni
                          shaxsiylashtirish ham bir xil darajada muhimdir. Yaxshi
                          tarbiyachi o‘z bolalariga samimiy mehr va qiziqish bildiradi.
                          Tadqiqotchilarning ta’kidlashicha, talabalar bilan ishonchli
                          munosabatlar ularning o‘rganishga bo‘lgan motivatsiyasini
                          oshiradi. Intrapersonal ko‘nikmalar deganda odamning
                          his-tuyg‘ularini boshqarish, qiyinchiliklarni yengish va yangi
                          ma’lumotlarni olishga yordam beradigan ichki qobiliyatlari va
                          xatti-harakatlari tushuniladi. Bunday ko‘nikmalarga o‘z-o‘zini
                          tarbiyalash, o‘z-o‘zini anglash, qat'iyatlilik,
                          moslashuvchanlik, moslashuvchanlik, o‘zini o‘zi
                          rag‘batlantirish, rahm-shafqat, halollik va o‘z-o‘zini hurmat
                          qilish kiradi. Bugungi ta’lim sharoitida tarbiyachilar
                          o‘zlarini bolalaridan uzoqlashtira olmaydi; ular shunchaki o‘z
                          intizomini o‘rgatishdan ko‘ra ko‘proq narsani qilishadi. Qulay
                          ta’lim muhiti - bu shaxsning rivojlanishiga ijobiy ta’sir
                          ko‘rsatadigan va boshqa omillarning salbiy ta’sirini
                          kamaytiradigan hissiy muhitni yaratish orqali ta’lim jarayoni
                          ishtirokchilarining jismoniy, ruhiy va ijtimoiy
                          salomatligining barqaror sifatini ta’minlaydi. Globallashuv va
                          o‘zaro bog‘liqlik va o‘zaro bog‘liqlik kuchayib borayotgan
                          sharoitda, jahon xalqlar hamjamiyatining a’zosi ekanligini
                          ta’kidlaydigan umumiy mafkurani ishlab chiqish va tarqatish
                          zarurati tug‘iladi. Jahon fuqaroligi va jahon hamjamiyatining
                          taqdiri uchun shaxsiy javobgarlik tushunchasi keng tarqalishi
                          va mafkuraviy kuchga ega bo‘lishi uchun u har qanday ta’lim
                          dasturining majburiy qismiga aylanishi kerak. Bo‘lajak
                          tarbiyachilar o‘z-o‘zini o‘rgatish imkonini berish orqali
                          o‘qituvchilar bag‘rikenglik, xilma-xillikni hurmat qilish,
                          axloqiy va madaniyatlararo tushunish, nizolarni hal qilish
                          ko‘nikmalari, demokratik ishtirok etish, atrof-muhitga hurmat,
                          milliy o‘ziga xoslik, tegishlilik tuyg‘usi va boshqa muhim
                          xususiyatlarni tarbiyalashi mumkin. Media va axborot
                          savodxonligi. Milliy va xalqaro siyosat sa’y-harakatlari
                          21-asr insonlari uchun ommaviy axborot vositalari va axborot
                          savodxonligiga ega bo‘lishlari muhim bo‘lib qolganligini
                          targ‘ib qilmoqda. Mediasavodxon tarbiyachi ommaviy axborot
                          vositalaridagi axborotni idrok etish, ko‘rib chiqish,
                          tushunish va yaratish, bugungi dunyoda faoliyat yuritayotgan
                          ommaviy axborot vositalarining ijtimoiy-madaniy va siyosiy
                          kontekstini baholash qobiliyatiga ega va kasbiy faoliyatida
                          ommaviy axborot vositalaridan mohirona foydalanadi. Uning
                          asosiy vazifasi yoshlarni nafaqat turli ommaviy axborot
                          vositalaridan to‘g‘ri foydalanishni, balki ularning
                          xatti-harakatlarini tushunishni, ommaviy axborot
                          vositalarining shaxsga qanday ta’sir qilishini ko‘rishni
                          o‘rganishi kerak bo‘lgan tizimli va malakali tarbiyadir.
                          Tarbiyachi shuningdek, talabalarni media-mahsulotni idrok
                          etish jarayonida tanqidiy fikrlashga o‘rgatishi,
                          axloqiy-estetik me’yorlar asosida, umuman, ommaviy axborot
                          vositalari mahsulotlariga nisbatan shaxsiy, baholovchi
                          munosabatni shakllantirishi kerak. Xulosa qilib shuni
                          ta’kidlash kerakki, XXI asrda ijtimoiy-madaniy va iqtisodiy
                          vaziyatdagi o‘zgarishlar samarali tarzda tarbiyachi va uning
                          vakolatlarini tushunishda o‘zgarishlarga olib keldi. Tez
                          o‘zgaruvchan va texnologiyaga asoslangan dunyoda
                          raqobatbardosh bo‘lish uchun tarbiyachi bir professional
                          kontekstdan boshqasiga o‘tkazilishi mumkin bo‘lgan bilim,
                          ko‘nikma, qobiliyat va qadriyatlarni o‘zida mujassam etgan
                          transversal kompetentsiyalarga ega bo‘lishi kerak. Transversal
                          kompetensiyalar, odatda, XXI asrning malakalari sifatida qabul
                          qilinadi va insonning texnologik yutuqlar va madaniyatlararo
                          muloqot bilan bog‘liq muammolarni hal qilish, yangi g‘oyalar
                          va mumkin bo‘lgan echimlarni yaratish va improvizatsiya
                          qilish, samarali o‘zaro ta’sir qilish, jamoada ishlash,
                          yetakchilik, hissiy qobiliyatlarni ochib berish qobiliyati
                          bilan bog‘liq. Samarali tarbiyachi o‘z bolalari va ularning
                          ta’lim ehtiyojlarini chuqur anglash bilan birlashtirilgan
                          ma’lum bir ijobiy shaxsiy xususiyatlar to‘plami, mazmunli
                          bilim va pedagogik mahorat bilan ajralib turadi.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_four">
                      <button className="accordion-button collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse_four" aria-expanded="false"
                        aria-controls="collapse_four">
                        1-qism bo'yicha test savollari
                      </button>
                    </div>
                    <div id="collapse_four" className="accordion-collapse collapse" aria-labelledby="heading_four"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <Test questionsData={reportQuestions['first']} setQuizNumber={setQuizNumber} setQuizLength={setQuizLength} />
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_two">
                      <button className="accordion-button collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse_two" aria-expanded="false"
                        aria-controls="collapse_two">
                        Tarbiyachilarning professional rivojlanishidagi transversal kompetensiyalarning o‘rni
                      </button>
                    </div>
                    <div id="collapse_two" className="accordion-collapse collapse" aria-labelledby="heading_two"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          Har qanday professional sohada raqamlashtirish va globallashuv sharoitida professional boʻlish asosiy kompetensiya, koʻnikma va koʻnikmalarni doimiy tahlil qilishni taqozo etadi. O‘quv jarayonida ushbu kompetensiyalarni rivojlantirish nafaqat kompyuterlar, mobil telefonlar, balki turli kasbga yo‘naltirilgan vazifalarni bajarish uchun aniq fanga mos dasturiy ta’minot, ilovalar, ijtimoiy tarmoqlardan foydalanish orqali ham mumkin. Bundan tashqari, bugungi kunda, bizning fikrimizcha, oʻquv jarayoniga media savodxonlik, kiberxavfsizlik, kiberxavfsizlik, raqamli jamiyatda ruhiy salomatlik va boshqa dasturlarni joriy etish zarurati tugʻilmoqda. Munozaralar, mavzuga oid masalalarni hal etish, insho yozish, ijtimoiy roliklarni tomosha qilish, guruh boʻlib ishlash orqali talabalarda shaxslararo koʻnikmalarni shakllantirish yumshoq koʻnikmalar, empatiya, bagʻrikenglik va bagʻrikenglikni rivojlantirish imkonini beradi. Asosiy kompetensiyalar butun umri davomida turli muhitlarda - uyda, o‘quv yurtida, ish joyida yoki boshqa jamiyatlarda rasmiy va norasmiy o‘qitish orqali rivojlanadi. Taʼkidlash joizki, barcha koʻnikmalarni yetarlicha egallash deyarli mumkin emas, shuning uchun gap kooperatsiya uchun fanlararo guruhlar tuzish haqida bormoqda. Shuning uchun talaba fanlararo va xalqaro jamoada boʻlajak ishga tayyor boʻlishi kerak. Bu talabalarda raqamli ko‘nikmalarni o‘z ichiga olgan transversal ko‘nikmalarni (ingliz tilidan transverse competence) rivojlantirishni talab qiladi; o‘rganish uchun o‘qitish va fuqarolik kompetensiyalari. Transversal ko‘nikmalar ishga joylashish uchun asosiy ko‘nikmalar sifatida qaraladi va insonning o‘qish, yaxshi muloqot qilish, birgalikda ishlashning konstruktiv va sog‘lom dinamikasida ishtirok etish, ijodiy qobiliyat va muammolarni hal etish qobiliyatini aks ettiradi. <br />
                          Transversal kompetensiyalar faoliyatning bir sohasiga tez moslashish va boshqasiga oʻtish qobiliyati bilan tavsiflanadi hamda mehnat bozorida muvaffaqiyatga erishishda muhim rol oʻynaydi. <br />
                          Transversal ko‘nikmalar (kompetensiyalar) - tanqidiy fikrlash, ixtirochilik, shaxsiy va shaxslararo ko‘nikmalarni o‘z ichiga olgan ko‘nikmalarning keng doirasi Transversal ko‘nikmalar quyidagilarni o‘z ichiga oladi:
                          <ul className="type-line">
                            <li>kognitiv ko‘nikmalar</li>
                            <li>hissiy ko‘nikmalar, xulq-atvor uslublari, shuningdek muloqot qilish ko‘nikmalari to‘plami hisoblangan shaxslararo va ijtimoiy ko‘nikmalar</li>
                            <li>maqsadlar qo‘yishni bilish</li>
                            <li>strategiyani ishlab chiqish va harakatlar rejalarini amalga oshirish.</li>
                          </ul>
                          Transversal ko‘nikmalarni rivojlantirishga yo‘naltirilgan o‘quv faoliyati turlari
                          <ul type="disc">
                            <li>Kommunikativ ko‘nikmalar:
                              <ul className="type-line">
                                <li>og‘zaki testlar (tinglash va nutq)</li>
                                <li>taqdimotlar (og‘zaki, yozma)</li>
                                <li>rol o‘yinlari, muloqotlar</li>
                                <li>guruhda rasmiy tilni modellashtirish</li>
                                <li>aytilganlarni yakunlash</li>
                                <li>munozaralar</li>
                                <li>asarni, veb-saytlarni taqqoslash</li>
                                <li>o‘zaro baholash.</li>
                              </ul>
                            </li>
                            <li>Tanqidiy fikrlash va muammolarni hal qilish
                              <ul className="type-line">
                                <li>texnologik muammolar yechimlarini taqqoslash va yangi muqobillarni topish</li>
                                <li>diagrammalar, grafiklar, statistika va boshqalarni talqin qilish</li>
                                <li>doiradan tashqariga chiqadigan va fikrlashning yuqori darajasiga qaratilgan masalalar</li>
                                <li>turli konsepsiyalarga yangicha tushuncha ishlab chiqish</li>
                                <li>talabalarga mavjud bo‘lmagan ma’lumotlar bilan bog‘liq muammolar misollarini taqdim etish</li>
                                <li>test sinovlarining turli usullarini taqdim etish</li>
                                <li>vaziyatlarni hal etish - aniq vaziyatlarni optimal yechimlarni taklif etgan holda o‘rganish.</li>
                              </ul>
                            </li>
                            <li>Jamoaviy ish:
                              <ul className="type-line">
                                <li>jamoaning har bir a’zosiga teng vazifalar beruvchi guruh vazifalarini yaratish</li>
                                <li>guruh topshirig‘ining maqsadlarini va uning qanday baholanishini tushuntirish</li>
                                <li>guruh uchun birgalikdagi ishlar samaradorligini baholash imkoniyatini berish.</li>
                              </ul>
                            </li>
                            <li>Uzluksiz o‘qitish:
                              <ul className="type-line">
                                <li>uy ishlarini elektron pochta orqali jo‘natish</li>
                                <li>taqdimotlarni ishlab chiqish</li>
                                <li>o‘qituvchilar bilan elektron resurslar orqali muloqot qilish</li>
                                <li>axborotni mustaqil o‘rganish, adabiyotlarni o‘qish</li>
                                <li>turli materiallar (maqolalar, bloglar) ni mustaqil o‘rganish.</li>
                              </ul>
                            </li>
                            <li>Tadbirkorlik ko‘nikmalari:
                              <ul className="type-line">
                                <li>muvaffaqiyatli tadbirkorlar va startapchilarning tarjimai holini o‘qish</li>
                                <li>texnologiyada tadbirkorlik tajribasini o‘rganish</li>
                                <li>rol o‘yinlari.</li>
                              </ul>
                            </li>
                            <li>Kasbiy axloq:
                              <ul className="type-line">
                                <li>rol o‘yini</li>
                                <li>munozaralar</li>
                                <li>fokus-guruhlarda texnologik faoliyat axloqi va odob-axloq masalalariga taalluqli turli vaziyatlarni muhokama qilish.</li>
                              </ul>
                            </li>
                            <li>Yetakchilik ko‘nikmalari:
                              <ul className="type-line">
                                <li>talabalarga topshiriqlar va assotsiativ xaritalar berish, muhim ma’lumotlarni ajratish</li>
                                <li>o‘qitish maqsadlarini, yangi g‘oyalar va ko‘nikmalarni yozib olish</li>
                                <li>topshiriqlarni bajarish muddatlariga rioya qilish.</li>
                              </ul>
                            </li>
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
                        2-qism bo'yicha test savollari
                      </button>
                    </div>
                    <div id="collapse_n" className="accordion-collapse collapse" aria-labelledby="heading_n"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <Test questionsData={reportQuestions['second']} setQuizNumber={setQuizNumber} setQuizLength={setQuizLength} />
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_three">
                      <button className="accordion-button collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse_three" aria-expanded="false"
                        aria-controls="collapse_three">
                        Bo‘lajak tarbiyachilarda transversal-metodik kompetentsiyani rivojlantirish imkoniyatlari
                      </button>
                    </div>
                    <div id="collapse_three" className="accordion-collapse collapse" aria-labelledby="heading_three"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <div className="m-0 fst-italic">
                          Bugungi kunda ta’lim tizimida yuqori malakali va zamonaviy talablar darajasida kompetentsiyaga ega tarbiyachilarni tayyorlash masalasi dolzarb bo‘lib qolmoqda. Har bir kasbiy tayyorgarlik yo‘nalishida bo‘lgani kabi, tarbiyachilikda ham nazariy va amaliy bilimlarni o‘zaro uzviy bog‘lay olish qobiliyati talab qilinadi. Transversal-metodik kompetentsiya tushunchasi shu jihatdan o‘ta muhimdir, chunki bu qobiliyat turli fanlar va amaliy jarayonlar o‘rtasida bog‘liqlikni ta’minlashni talab qiladi. Zamonaviy ta’lim jarayonida bo‘lajak tarbiyachilarning nafaqat bilim va ko‘nikmalarini, balki ularning kasbiy ijodkorligini, muloqot madaniyatini va kompleks yondashuv asosida fikrlash qobiliyatini shakllantirish muhim hisoblanadi. Ushbu maqola bo‘lajak tarbiyachilarda transversal-metodik kompetentsiyani rivojlantirishning asosiy tamoyillari va usullarini tahlil qilishga bag‘ishlangan.
                          Transversal-metodik kompetentsiyani rivojlantirish zamonaviy ta’limning dolzarb masalalaridan biri bo‘lib, bu jarayonni muvaffaqiyatli amalga oshirishda bir qator omillar muhim rol o‘ynaydi: <br />
                          <strong>Integratsiyalashgan o‘quv dasturlari:</strong> Ta’lim dasturlarida bir nechta fanlar bo‘yicha bilimlarni birlashtirgan mavzularni kiritish orqali talabalarda ko‘nikmalarni kompleks rivojlantirish imkoniyati yaratiladi. <br />
                          <strong>Texnologiyalarni qo‘llash:</strong> Axborot-kommunikatsiya texnologiyalaridan foydalanish transversal-metodik kompetentsiyani rivojlantirishda samarali usullardan biridir. Masalan, masofaviy ta’lim, interaktiv platformalar va simulyatsion o‘quv dasturlari. <br />
                          <strong>Amaliy mashg‘ulotlar va loyiha faoliyati:</strong> Talabalarning kasbiy faoliyatini real muhitga yaqinlashtirish orqali nazariya va amaliyot o‘rtasidagi bog‘liqlik mustahkamlanadi. <br />
                          <strong>Reflektiv pedagogika:</strong> Talabalarning faoliyatini tahlil qilish va xulosa chiqarish ko‘nikmalarini rivojlantirish uchun reflektiv metodlarni qo‘llash muhim ahamiyatga ega. Bu ularga o‘z tajribalarini baholash va kelajakdagi faoliyatlarini rejalashtirish imkonini beradi. <br />
                          <strong>O‘qituvchilarning roli:</strong> O‘qituvchilar transversal-metodik kompetentsiyani shakllantirish jarayonida asosiy yo‘naltiruvchi sifatida ishtirok etadi. Ularning metodik mahorati, ijodiy yondashuvlari va motivatsion qo‘llab-quvvatlashlari bu jarayonda muhim ahamiyat kasb etadi. <br />
                          Bo‘lajak tarbiyachilarning transversal - metodik kompetentsiyasini shakllantirishda quyidagi muhim jihatlarga e’tibor qaratishimiz lozim. <br />
                          Mazkur kompetentsiya quyidagi tarkibiy qismlardan iborat:
                          <ul className="type-line">
                            <li>Fanlararo bilimlarni integratsiya qilish qobiliyati.</li>
                            <li>Amaliy topshiriqlarni mustaqil va ijodiy yecha olish ko‘nikmasi.</li>
                            <li>Murakkab vaziyatlarda moslashuvchan qaror qabul qilish qobiliyati.</li>
                            <li>Ta’lim jarayonidagi amaliyotlar:</li>
                            <li>Loyiha usuli: Talabalar o‘rtasida jamoaviy ishlash va muammolarni yechish imkonini beradi.</li>
                            <li>Muammoli ta’lim asosida o‘qitish: Talabalarning ijodkorlik va analitik fikrlash qobiliyatlarini rivojlantiradi.</li>
                            <li>Refleksiya: Talabalar tomonidan o‘z faoliyatini mustaqil baholash va xulosa chiqarish uchun asos yaratadi.</li>
                          </ul>
                          Shunday qilib, oliy oʻquv yurti talabalarining kasbiy faoliyatidagi samaradorligi kommunikativ koʻnikmalar, tanqidiy fikrlash xususiyati, axborotni topish va qayta ishlash qobiliyati, oʻz-oʻzini doimiy rivojlantirishga intilish, yetakchilik fazilatlari va boshqalar kabi transversal koʻnikmalarning rivojlanish darajasiga bogʻliq. Shu bilan birga, mehnat bozori tahlili transversal ko‘nikmalarga ega bo‘lgan mutaxassislar yetishmasligini ko‘rsatmoqda, shuning uchun talabaning universal kompetensiyalarini shakllantirish - oliy ta’lim o‘qituvchisining vazifasidir.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading_five">
                      <button className="accordion-button collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse_five" aria-expanded="false"
                        aria-controls="collapse_five">
                        3-qism bo'yicha test savollari
                      </button>
                    </div>
                    <div id="collapse_five" className="accordion-collapse collapse" aria-labelledby="heading_five"
                      data-bs-parent="#faq_accordion">
                      <div className="accordion-body">
                        <Test questionsData={reportQuestions['third']} setQuizNumber={setQuizNumber} setQuizLength={setQuizLength} />
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
              <div className="blog_post_author">
                <div className="author_image">
                  <img
                    src="assets/images/author_image_3-min.png"
                    alt="Talking Minds - Psychotherapist Site Template"
                  />
                </div>
                <div className="author_content">
                  <h4 className="author_name">Ergasheva B.Z.</h4>
                  <span className="author_designation">
                    O'qituvchi
                  </span>
                  <p className="mb-0">
                  Maktabgacha ta’limda metodika fanlarini o‘qitish texnologiyasining obyekti - o‘qituvchi va talabalarning birgalikdagi faoliyati bilan ifodalanadigan o`quv jarayoni bo`lib,  maktabgacha ta’lim jarayonida pedagogik texnologiyalarni qo‘llash va takomillashtirishga qaratilgan ta’lim-tarbiya faoliyati hisoblanadi.
                  </p>
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

export default Report;
