const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

document.documentElement.classList.add('js');


/*==================== LANGUAGE SWITCH ====================*/
const languageToggle = document.getElementById('language-toggle');
const i18nSource = document.getElementById('i18n-messages');
const i18nMessages = i18nSource ? JSON.parse(i18nSource.textContent || '{}') : {};

function applyLanguage(language) {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');

        if (!element.dataset.i18nDefault) {
            element.dataset.i18nDefault = element.textContent || '';
        }

        element.textContent = language === 'en'
            ? i18nMessages.en?.[key] || element.dataset.i18nDefault
            : element.dataset.i18nDefault;
    });

    if (languageToggle) {
        languageToggle.setAttribute('aria-pressed', String(language === 'en'));
    }

    localStorage.setItem('portfolio-language', language);
}

const savedLanguage = localStorage.getItem('portfolio-language') || 'es';
applyLanguage(savedLanguage);

languageToggle?.addEventListener('click', () => {
    const nextLanguage = document.documentElement.lang === 'en' ? 'es' : 'en';
    applyLanguage(nextLanguage);
});


if (navMenu && navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navMenu && navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    navMenu?.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));



/*==================== ACORDING SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');


function toggleSkills(){
    const content = this.parentNode;
    const shouldOpen = content.classList.contains('skills__close');

    for (let i = 0; i < skillsContent.length; i++){
        skillsContent[i].classList.remove('skills__open');
        skillsContent[i].classList.add('skills__close');
        skillsContent[i].querySelector('.skills__header')?.setAttribute('aria-expanded', 'false');
    }

    if (shouldOpen) {
        content.classList.remove('skills__close');
        content.classList.add('skills__open');
        this.setAttribute('aria-expanded', 'true');
    }
}


skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

/*==================== ABOUT CAROUSEL ====================*/
document.querySelectorAll('[data-carousel-track]').forEach((track) => {
    const carouselId = track.getAttribute('data-carousel-track');
    const prevButton = document.querySelector(`[data-carousel-prev="${carouselId}"]`);
    const nextButton = document.querySelector(`[data-carousel-next="${carouselId}"]`);

    function scrollCarousel(direction) {
        const card = track.querySelector('[data-carousel-card]');
        const gap = 16;
        const amount = card ? card.getBoundingClientRect().width + gap : track.clientWidth;

        track.scrollBy({
            left: direction * amount,
            behavior: 'smooth',
        });
    }

    prevButton?.addEventListener('click', () => scrollCarousel(-1));
    nextButton?.addEventListener('click', () => scrollCarousel(1));
});


/*==================== REVEAL SECTIONS ====================*/
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add('in-view'));
}
