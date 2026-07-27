const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

document.documentElement.classList.add('js');


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
