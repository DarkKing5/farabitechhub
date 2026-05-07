/* ================================================
   Farabi Innovation Hub — JS
   Countdown, scroll reveal, nav, burger
   ================================================ */

// ===== COUNTDOWN =====
(function initCountdown() {
    const target = new Date('2026-05-13T10:00:00+05:00').getTime();

    function update() {
        const diff = Math.max(0, target - Date.now());
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);

        const pad = n => String(n).padStart(2, '0');
        const el = id => document.getElementById(id);

        el('cd-d').textContent = pad(d);
        el('cd-h').textContent = pad(h);
        el('cd-m').textContent = pad(m);
        el('cd-s').textContent = pad(s);
    }

    update();
    setInterval(update, 1000);
})();

// ===== NAV SCROLL =====
(function initNav() {
    const nav = document.getElementById('nav');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                nav.classList.toggle('nav--scrolled', window.scrollY > 40);
                ticking = false;
            });
            ticking = true;
        }
    });

    // Burger
    const burger = document.getElementById('burger');
    const links = document.getElementById('navLinks');
    if (burger && links) {
        burger.addEventListener('click', () => {
            links.classList.toggle('nav__links--open');
            burger.classList.toggle('nav__burger--open');
        });
        // Close on link click
        links.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                links.classList.remove('nav__links--open');
                burger.classList.remove('nav__burger--open');
            });
        });
    }
})();

// ===== SCROLL REVEAL =====
(function initReveal() {
    const selectors = [
        '.info-card', '.timeline__item', '.partner-card',
        '.benefit-card', '.about__text', '.section__header',
        '.cta-block'
    ];

    const elements = document.querySelectorAll(selectors.join(', '));
    elements.forEach((el, i) => {
        el.classList.add('reveal-el');
        el.style.transitionDelay = `${Math.min(i % 6, 4) * 0.08}s`;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    elements.forEach(el => observer.observe(el));
})();

// ===== SMOOTH ANCHOR =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
