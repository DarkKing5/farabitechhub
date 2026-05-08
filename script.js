/* ================================================
   Farabi Tech Hub — V3 JS + i18n
   ================================================ */

// ===== TRANSLATIONS =====
const i18n = {
  ru: {
    "nav.about": "О мероприятии", "nav.program": "Программа", "nav.partners": "Партнёры", "nav.benefits": "Возможности", "nav.cta": "Регистрация",
    "hero.badge": "КазНУ им. аль-Фараби, Алматы",
    "hero.title": "Официальное открытие",
    "hero.sub": "Новая точка притяжения стартапов, инвесторов и технологий в самом сердце главного университета Казахстана.",
    "hero.date": "13 мая 2026", "hero.free": "Вход бесплатный", "hero.cta": "Оставить заявку на участие",
    "about.tag": "О мероприятии", "about.title": "Экосистема, объединяющая науку и бизнес",
    "about.desc": "Farabi Tech Hub — первый университетский бизнес-инкубатор в Казахстане, созданный при КазНУ им. аль-Фараби. AI-акселерация, менторство от лидеров индустрии, прямой выход на инвесторов.",
    "about.eco.title": "Экосистема", "about.eco.desc": "Полный цикл от идеи до масштабирования. Коворкинг, менторство, акселерация и выход на инвесторов — всё в одном пространстве на базе КазНУ.",
    "about.exp.title": "Экспертиза", "about.exp.desc": "Менторы из бизнеса, AI Startify — платформа для построения стартапов на базе ИИ.",
    "about.inv.title": "Инвестиции", "about.inv.desc": "«Аллея стартапов» — прямой доступ к инвесторам и грантам QazInnovations.",
    "prog.tag": "Программа", "prog.title": "Расписание Grand Opening",
    "prog.1.title": "Сбор гостей и регистрация", "prog.1.desc": "Регистрация по месту, приветственный кофе, знакомство с резидентами и командой инкубатора",
    "prog.2.title": "Официальная часть", "prog.2.desc": "Выступления руководства КазНУ, представителей акимата г. Алматы, подписание меморандумов с партнёрами",
    "prog.3.title": "AI Startify — Живая демонстрация", "prog.3.desc": "Платформа AI-акселерации стартапов: от идеи до MVP за 48 часов. Демонстрация возможностей в реальном времени",
    "prog.4.title": "Панельная дискуссия", "prog.4.desc": "«Будущее университетских инноваций в Казахстане» — спикеры из индустрии, академии и государственного сектора",
    "prog.5.title": "Нетворкинг", "prog.5.desc": "Прямой доступ к инвесторам, менторам и представителям партнёрских организаций",
    "part.tag": "Партнёры", "part.title": "Подписаны меморандумы с лидерами индустрии",
    "part.memo": "Меморандум", "part.partner": "Партнёр", "part.tech": "Технология", "part.guest": "Гость", "part.akimat": "Акимат Алматы",
    "ben.tag": "Возможности", "ben.title": "Что получают резиденты", "ben.free": "Бесплатно",
    "ben.incub.title": "AI-инкубация", "ben.incub.desc": "Полный цикл развития стартапа: от валидации идеи до MVP. AI Startify помогает с питч-деком, анализом рынка и построением продукта.",
    "ben.accel.title": "Акселерация", "ben.accel.desc": "Менторы из бизнеса, «Аллея стартапов» и прямой выход на инвесторов. Интенсивная программа масштабирования вашего проекта.",
    "ben.cow.title": "Коворкинг", "ben.cow.desc": "Рабочее пространство и резидентство для команды",
    "ben.intern.title": "Стажировки", "ben.intern.desc": "У компаний-партнёров инкубатора",
    "ben.cert.title": "Сертификация", "ben.cert.desc": "Сертификаты инкубации и акселерации КазНУ",
    "ben.investors.title": "Инвесторы", "ben.investors.desc": "Ваш проект перед глазами инвесторов",
    "cta.title": "Примите участие в открытии", "cta.desc": "Заполните короткую форму регистрации — это займёт 30 секунд. Количество мест ограничено.",
    "cta.location": "КазНУ, Алматы", "cta.btn": "Зарегистрироваться",
    "footer.uni": "КазНУ им. аль-Фараби", "footer.copy": "© 2026 Farabi Tech Hub. Все права защищены."
  },
  kz: {
    "nav.about": "Іс-шара туралы", "nav.program": "Бағдарлама", "nav.partners": "Серіктестер", "nav.benefits": "Мүмкіндіктер", "nav.cta": "Тіркелу",
    "hero.badge": "Әл-Фараби атындағы ҚазҰУ, Алматы",
    "hero.title": "Ресми ашылу",
    "hero.sub": "Қазақстанның бас университетінің жүрегіндегі стартаптар, инвесторлар мен технологиялардың жаңа тартылыс нүктесі.",
    "hero.date": "13 мамыр 2026", "hero.free": "Кіру тегін", "hero.cta": "Қатысуға өтінім беру",
    "about.tag": "Іс-шара туралы", "about.title": "Ғылым мен бизнесті біріктіретін экожүйе",
    "about.desc": "Farabi Tech Hub — Қазақстандағы алғашқы университеттік бизнес-инкубатор, ҚазҰУ негізінде құрылған. AI-акселерация, сала көшбасшыларынан менторлық, инвесторларға тікелей қол жеткізу.",
    "about.eco.title": "Экожүйе", "about.eco.desc": "Идеядан масштабтауға дейінгі толық цикл. Коворкинг, менторлық, акселерация және инвесторларға шығу — барлығы ҚазҰУ базасындағы бір кеңістікте.",
    "about.exp.title": "Сараптама", "about.exp.desc": "Бизнестен менторлар, AI Startify — ЖИ негізінде стартаптар құруға арналған платформа.",
    "about.inv.title": "Инвестициялар", "about.inv.desc": "«Стартаптар аллеясы» — инвесторларға және QazInnovations гранттарына тікелей қол жеткізу.",
    "prog.tag": "Бағдарлама", "prog.title": "Grand Opening кестесі",
    "prog.1.title": "Қонақтарды қарсы алу және тіркелу", "prog.1.desc": "Орнында тіркелу, қарсы алу кофесі, резиденттермен және инкубатор командасымен танысу",
    "prog.2.title": "Ресми бөлім", "prog.2.desc": "ҚазҰУ басшылығының, Алматы қаласы әкімдігі өкілдерінің сөз сөйлеуі, серіктестермен меморандумдарға қол қою",
    "prog.3.title": "AI Startify — Тірі демонстрация", "prog.3.desc": "Стартаптарды AI-акселерациялау платформасы: идеядан 48 сағатта MVP-ге дейін. Нақты уақытта мүмкіндіктерді көрсету",
    "prog.4.title": "Панельдік талқылау", "prog.4.desc": "«Қазақстандағы университеттік инновациялардың болашағы» — индустрия, академия және мемлекеттік сектор спикерлері",
    "prog.5.title": "Нетворкинг", "prog.5.desc": "Инвесторларға, менторларға және серіктес ұйымдар өкілдеріне тікелей қол жеткізу",
    "part.tag": "Серіктестер", "part.title": "Сала көшбасшыларымен меморандумдарға қол қойылды",
    "part.memo": "Меморандум", "part.partner": "Серіктес", "part.tech": "Технология", "part.guest": "Қонақ", "part.akimat": "Алматы қаласы Әкімдігі",
    "ben.tag": "Мүмкіндіктер", "ben.title": "Резиденттер не алады", "ben.free": "Тегін",
    "ben.incub.title": "AI-инкубация", "ben.incub.desc": "Стартапты дамытудың толық циклі: идеяны валидациялаудан MVP-ге дейін. AI Startify питч-дек, нарық талдауы және өнім құрумен көмектеседі.",
    "ben.accel.title": "Акселерация", "ben.accel.desc": "Бизнестен менторлар, «Стартаптар аллеясы» және инвесторларға тікелей шығу. Жобаңызды масштабтаудың қарқынды бағдарламасы.",
    "ben.cow.title": "Коворкинг", "ben.cow.desc": "Команда үшін жұмыс кеңістігі мен резиденттік",
    "ben.intern.title": "Тәжірибе", "ben.intern.desc": "Инкубатордың серіктес компанияларында",
    "ben.cert.title": "Сертификаттау", "ben.cert.desc": "ҚазҰУ-дың инкубация және акселерация сертификаттары",
    "ben.investors.title": "Инвесторлар", "ben.investors.desc": "Сіздің жобаңыз инвесторлардың көз алдында",
    "cta.title": "Ашылуға қатысыңыз", "cta.desc": "Қысқа тіркелу формасын толтырыңыз — бұл 30 секунд алады. Орын саны шектеулі.",
    "cta.location": "ҚазҰУ, Алматы", "cta.btn": "Тіркелу",
    "footer.uni": "Әл-Фараби атындағы ҚазҰУ", "footer.copy": "© 2026 Farabi Tech Hub. Барлық құқықтар қорғалған."
  },
  en: {
    "nav.about": "About", "nav.program": "Program", "nav.partners": "Partners", "nav.benefits": "Opportunities", "nav.cta": "Register",
    "hero.badge": "Al-Farabi KazNU, Almaty",
    "hero.title": "Grand Opening",
    "hero.sub": "A new center of gravity for startups, investors and technology in the heart of Kazakhstan's leading university.",
    "hero.date": "May 13, 2026", "hero.free": "Free admission", "hero.cta": "Apply to attend",
    "about.tag": "About the Event", "about.title": "An ecosystem bridging science and business",
    "about.desc": "Farabi Tech Hub is the first university-based business incubator in Kazakhstan, created at Al-Farabi KazNU. AI-acceleration, mentorship from industry leaders, direct access to investors.",
    "about.eco.title": "Ecosystem", "about.eco.desc": "Full cycle from idea to scale. Coworking, mentorship, acceleration and investor access — all in one space at KazNU.",
    "about.exp.title": "Expertise", "about.exp.desc": "Business mentors, AI Startify — an AI-powered platform for building startups.",
    "about.inv.title": "Investment", "about.inv.desc": "\"Startup Alley\" — direct access to investors and QazInnovations grants.",
    "prog.tag": "Program", "prog.title": "Grand Opening Schedule",
    "prog.1.title": "Guest Registration", "prog.1.desc": "On-site registration, welcome coffee, meeting residents and the incubator team",
    "prog.2.title": "Official Ceremony", "prog.2.desc": "Speeches by KazNU leadership, Almaty city representatives, signing of memorandums with partners",
    "prog.3.title": "AI Startify — Live Demo", "prog.3.desc": "AI-powered startup acceleration platform: from idea to MVP in 48 hours. Live demonstration of capabilities",
    "prog.4.title": "Panel Discussion", "prog.4.desc": "\"The Future of University Innovation in Kazakhstan\" — speakers from industry, academia and government",
    "prog.5.title": "Networking", "prog.5.desc": "Direct access to investors, mentors and partner organization representatives",
    "part.tag": "Partners", "part.title": "Memorandums signed with industry leaders",
    "part.memo": "Memorandum", "part.partner": "Partner", "part.tech": "Technology", "part.guest": "Guest", "part.akimat": "Almaty City Administration",
    "ben.tag": "Opportunities", "ben.title": "What residents receive", "ben.free": "Free",
    "ben.incub.title": "AI Incubation", "ben.incub.desc": "Full startup development cycle: from idea validation to MVP. AI Startify helps with pitch decks, market analysis and product building.",
    "ben.accel.title": "Acceleration", "ben.accel.desc": "Business mentors, \"Startup Alley\" and direct investor access. An intensive program to scale your project.",
    "ben.cow.title": "Coworking", "ben.cow.desc": "Workspace and residency for your team",
    "ben.intern.title": "Internships", "ben.intern.desc": "At incubator partner companies",
    "ben.cert.title": "Certification", "ben.cert.desc": "KazNU incubation and acceleration certificates",
    "ben.investors.title": "Investors", "ben.investors.desc": "Your project in front of investor eyes",
    "cta.title": "Join the Grand Opening", "cta.desc": "Fill out a short registration form — it takes 30 seconds. Seats are limited.",
    "cta.location": "KazNU, Almaty", "cta.btn": "Register now",
    "footer.uni": "Al-Farabi KazNU", "footer.copy": "© 2026 Farabi Tech Hub. All rights reserved."
  }
};

// ===== FORM URLS PER LANGUAGE =====
const formUrls = {
    ru: 'https://docs.google.com/forms/d/e/1FAIpQLSf0MDfAIQCAzPs-ODHomhlww-L9MJOvRBGSHeD6lqD3AYlQbcg/viewform',
    kz: 'https://docs.google.com/forms/d/e/1FAIpQLSdbGH0GCV7N_iSgsLT5rWwsxOnvwdHc7UbBMzGvUMawmf1LQg/viewform',
    en: 'https://docs.google.com/forms/d/e/1FAIpQLSeduRP-QrxNCV5MSGnui92dxTJThJLKa7l4gFvwC4EmOnkKPw/viewform'
};

let currentLang = 'ru';

function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'kz' ? 'kk' : lang;
    // Update text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
    });
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
    });
    // Update all form links to match language
    document.querySelectorAll('a[data-form-link]').forEach(a => {
        a.href = formUrls[lang] || formUrls.ru;
    });
}

document.getElementById('langSwitch').addEventListener('click', e => {
    const btn = e.target.closest('.lang-btn');
    if (btn) setLang(btn.dataset.lang);
});

// Nav scroll
(function() {
    const nav = document.getElementById('nav');
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                nav.classList.toggle('nav--scrolled', window.scrollY > 30);
                ticking = false;
            });
            ticking = true;
        }
    });
    const burger = document.getElementById('burger');
    const links = document.getElementById('navLinks');
    if (burger && links) {
        burger.addEventListener('click', () => links.classList.toggle('nav-links--open'));
        links.querySelectorAll('a').forEach(a =>
            a.addEventListener('click', () => links.classList.remove('nav-links--open'))
        );
    }
})();

// Scroll reveal
(function() {
    const targets = document.querySelectorAll(
        '.bento-card, .tl-item, .p-card, .b-card, .section-header, .cta-inner, .hero-inner'
    );
    targets.forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${Math.min(i % 5, 3) * 0.07}s`;
    });
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(el => obs.observe(el));
})();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const t = document.querySelector(a.getAttribute('href'));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
});
