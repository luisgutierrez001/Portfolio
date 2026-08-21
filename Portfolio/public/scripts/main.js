const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

document.documentElement.classList.add('js');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


/*==================== LANGUAGE SWITCH ====================*/
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

    document.querySelectorAll('[data-language-toggle]').forEach((toggle) => {
        toggle.setAttribute('aria-pressed', String(language === 'en'));
    });

    localStorage.setItem('portfolio-language', language);
}

const savedLanguage = localStorage.getItem('portfolio-language') || 'es';
applyLanguage(savedLanguage);

document.addEventListener('click', (event) => {
    const toggle = event.target instanceof Element
        ? event.target.closest('[data-language-toggle]')
        : null;

    if (!toggle) return;

    const nextLanguage = document.documentElement.lang === 'en' ? 'es' : 'en';
    applyLanguage(nextLanguage);
});


/*==================== HOME INTRO ====================*/
const heroSection = document.querySelector('[data-hero]');
const heroNameText = heroSection?.querySelector('[data-hero-name-text]');
let heroIntroStarted = false;

if (heroNameText && !prefersReducedMotion) {
    heroNameText.dataset.heroName = heroNameText.textContent?.trim() || '';
    heroNameText.textContent = '';
}

function completeHeroIntro() {
    heroSection?.classList.remove('home--typing');
    heroSection?.classList.add('home--name-done');
}

function runHeroIntro() {
    if (!heroSection || heroIntroStarted) return;

    heroIntroStarted = true;

    if (!heroNameText || prefersReducedMotion) {
        completeHeroIntro();
        return;
    }

    const fullName = heroNameText.dataset.heroName || '';
    const letters = Array.from(fullName);
    let index = 0;

    heroSection.classList.add('home--typing');

    window.setTimeout(function typeNextLetter() {
        heroNameText.textContent = letters.slice(0, index + 1).join('');
        index += 1;

        if (index < letters.length) {
            window.setTimeout(typeNextLetter, 46);
            return;
        }

        window.setTimeout(completeHeroIntro, 180);
    }, 720);
}


if (navMenu && navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        navToggle.setAttribute('aria-expanded', 'true');
    });
}

if (navMenu && navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navToggle?.setAttribute('aria-expanded', 'false');
    });
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    navMenu?.classList.remove('show-menu');
    navToggle?.setAttribute('aria-expanded', 'false');
}
navLink.forEach(n => n.addEventListener('click', linkAction));



/*==================== ACORDING SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');
const wideSkillsLayout = window.matchMedia('(min-width: 1100px)');

function setSkillState(content, shouldOpen) {
    content.classList.toggle('skills__open', shouldOpen);
    content.classList.toggle('skills__close', !shouldOpen);
    content.querySelector('.skills__header')?.setAttribute('aria-expanded', String(shouldOpen));
}

function toggleSkills(){
    const content = this.parentNode;
    const sections = Array.from(skillsContent);

    if (wideSkillsLayout.matches) {
        const selectedIndex = sections.indexOf(content);
        const rowStart = Math.floor(selectedIndex / 2) * 2;

        sections.forEach((section, index) => {
            setSkillState(section, index === rowStart || index === rowStart + 1);
        });
        return;
    }

    const shouldOpen = content.classList.contains('skills__close');
    sections.forEach((section) => setSkillState(section, false));
    setSkillState(content, shouldOpen);
}

function syncSkillsLayout() {
    const sections = Array.from(skillsContent);
    const openedSections = sections.filter((section) => section.classList.contains('skills__open'));

    if (wideSkillsLayout.matches) {
        const selectedIndex = openedSections.length > 0
            ? sections.indexOf(openedSections[0])
            : 0;
        const rowStart = Math.floor(selectedIndex / 2) * 2;

        sections.forEach((section, index) => {
            setSkillState(section, index === rowStart || index === rowStart + 1);
        });
    } else {
        openedSections
            .slice(1)
            .forEach((section) => setSkillState(section, false));
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});
wideSkillsLayout.addEventListener('change', syncSkillsLayout);
syncSkillsLayout();


/*==================== CERTIFICATION DETAILS ====================*/
document.querySelectorAll('[data-certifications-list]').forEach((list) => {
    const certificateDetails = list.querySelectorAll('.certificate');

    certificateDetails.forEach((certificate) => {
        certificate.addEventListener('toggle', () => {
            if (!certificate.open) return;

            certificateDetails.forEach((otherCertificate) => {
                if (otherCertificate !== certificate) {
                    otherCertificate.open = false;
                }
            });
        });
    });
});

/*==================== ABOUT CAROUSEL ====================*/
document.querySelectorAll('[data-carousel-track]').forEach((track) => {
    const carouselId = track.getAttribute('data-carousel-track');
    const prevButton = document.querySelector(`[data-carousel-prev="${carouselId}"]`);
    const nextButton = document.querySelector(`[data-carousel-next="${carouselId}"]`);
    const originalCards = Array.from(track.querySelectorAll('[data-carousel-card]'));
    const shouldLoop = track.hasAttribute('data-carousel-loop') && originalCards.length > 1;
    const autoplayDelay = Number(track.dataset.carouselAutoplay || 0);
    let cards = originalCards;
    let scrollTimer;
    let autoplayTimer;
    let interactionPaused = false;

    function cardPosition(card) {
        return card.getBoundingClientRect().left
            - track.getBoundingClientRect().left
            + track.scrollLeft;
    }

    function nearestCardIndex() {
        return cards.reduce((closestIndex, card, index) => (
            Math.abs(cardPosition(card) - track.scrollLeft)
                < Math.abs(cardPosition(cards[closestIndex]) - track.scrollLeft)
                ? index
                : closestIndex
        ), 0);
    }

    function goToCard(index, behavior = prefersReducedMotion ? 'auto' : 'smooth') {
        const card = cards[index];
        if (!card) return;

        track.scrollTo({
            left: cardPosition(card),
            behavior,
        });
    }

    function normalizeLoop() {
        if (!shouldLoop) return;

        const index = nearestCardIndex();

        if (index === 0) {
            goToCard(originalCards.length, 'auto');
        } else if (index === cards.length - 1) {
            goToCard(1, 'auto');
        }
    }

    function scrollCarousel(direction) {
        const currentIndex = nearestCardIndex();
        const nextIndex = Math.max(0, Math.min(cards.length - 1, currentIndex + direction));

        goToCard(nextIndex);
    }

    prevButton?.addEventListener('click', () => scrollCarousel(-1));
    nextButton?.addEventListener('click', () => scrollCarousel(1));

    if (shouldLoop) {
        const firstClone = originalCards[0].cloneNode(true);
        const lastClone = originalCards[originalCards.length - 1].cloneNode(true);

        [firstClone, lastClone].forEach((clone) => {
            clone.dataset.carouselClone = '';
            clone.setAttribute('aria-hidden', 'true');
            clone.inert = true;
        });

        track.prepend(lastClone);
        track.append(firstClone);
        cards = Array.from(track.querySelectorAll('[data-carousel-card]'));

        requestAnimationFrame(() => goToCard(1, 'auto'));
    }

    track.addEventListener('scroll', () => {
        window.clearTimeout(scrollTimer);
        scrollTimer = window.setTimeout(normalizeLoop, 140);
    }, { passive: true });

    function startAutoplay() {
        window.clearInterval(autoplayTimer);

        if (!autoplayDelay || prefersReducedMotion) return;

        autoplayTimer = window.setInterval(() => {
            if (!interactionPaused && !document.hidden) {
                scrollCarousel(1);
            }
        }, autoplayDelay);
    }

    track.addEventListener('mouseenter', () => {
        interactionPaused = true;
    });
    track.addEventListener('mouseleave', () => {
        interactionPaused = false;
    });
    track.addEventListener('focusin', () => {
        interactionPaused = true;
    });
    track.addEventListener('focusout', () => {
        interactionPaused = false;
    });
    track.addEventListener('pointerdown', () => {
        interactionPaused = true;
    });
    track.addEventListener('pointerup', () => {
        interactionPaused = false;
    });

    [prevButton, nextButton].forEach((button) => {
        button?.addEventListener('mouseenter', () => {
            interactionPaused = true;
        });
        button?.addEventListener('mouseleave', () => {
            interactionPaused = false;
        });
        button?.addEventListener('focus', () => {
            interactionPaused = true;
        });
        button?.addEventListener('blur', () => {
            interactionPaused = false;
        });
    });

    startAutoplay();
});


/*==================== PROJECT GALLERIES ====================*/
document.querySelectorAll('[data-project-gallery]').forEach((gallery) => {
    const slides = Array.from(gallery.querySelectorAll('[data-project-slide]'));
    const dots = Array.from(gallery.querySelectorAll('[data-project-dot]'));
    const media = gallery.closest('.project__media');
    const interval = Number(gallery.dataset.projectInterval || 4500);
    let currentSlide = 0;
    let interactionPaused = false;
    let isVisible = !('IntersectionObserver' in window);

    if (slides.length < 2 || prefersReducedMotion) return;

    function showProjectSlide(nextIndex) {
        currentSlide = nextIndex % slides.length;

        slides.forEach((slide, index) => {
            const isActive = index === currentSlide;
            slide.classList.toggle('is-active', isActive);
            slide.setAttribute('aria-hidden', String(!isActive));
            dots[index]?.classList.toggle('is-active', isActive);
        });
    }

    if ('IntersectionObserver' in window) {
        const galleryObserver = new IntersectionObserver((entries) => {
            isVisible = entries[0]?.isIntersecting || false;
        }, { threshold: 0.25 });

        galleryObserver.observe(gallery);
    }

    window.setInterval(() => {
        if (isVisible && !interactionPaused && !document.hidden) {
            showProjectSlide(currentSlide + 1);
        }
    }, interval);

    media?.addEventListener('mouseenter', () => {
        interactionPaused = true;
    });
    media?.addEventListener('mouseleave', () => {
        interactionPaused = false;
    });
    media?.addEventListener('focusin', () => {
        interactionPaused = true;
    });
    media?.addEventListener('focusout', () => {
        interactionPaused = false;
    });
    media?.addEventListener('pointerdown', () => {
        interactionPaused = true;
    });
    media?.addEventListener('pointerup', () => {
        interactionPaused = false;
    });
});


/*==================== REVEAL SECTIONS ====================*/
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                if (entry.target === heroSection) {
                    runHeroIntro();
                }
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => {
        element.classList.add('in-view');
        if (element === heroSection) {
            runHeroIntro();
        }
    });
}


/*==================== ABOUT COUNTERS ====================*/
const counters = document.querySelectorAll('[data-counter]');

function runCounter(counter) {
    const target = Number(counter.dataset.counterTarget || 0);
    const suffix = counter.dataset.counterSuffix || '';

    if (prefersReducedMotion) {
        counter.textContent = `${target}${suffix}`;
        return;
    }

    const duration = 900;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        counter.textContent = `${Math.round(target * easedProgress)}${suffix}`;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

if ('IntersectionObserver' in window && !prefersReducedMotion) {
    counters.forEach((counter) => {
        counter.textContent = `0${counter.dataset.counterSuffix || ''}`;
    });

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                runCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.65 });

    counters.forEach((counter) => counterObserver.observe(counter));
} else {
    counters.forEach(runCounter);
}
