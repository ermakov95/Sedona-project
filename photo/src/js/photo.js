const nav = document.querySelector('.nav');
const navToggleCross = document.querySelector('.nav__toggle_cross');
const navToggleMenu = document.querySelector('.nav__toggle_burger');

nav.classList.remove('nav_nojs');
nav.classList.remove('nav_opened');
nav.classList.add('nav_closed')

navToggleMenu.addEventListener('click', function() {
    if (nav.classList.contains('nav_closed')) {
        nav.classList.remove('nav_closed');
        nav.classList.add('nav_opened');
    } else {
        nav.classList.remove('nav_opened');
        nav.classList.add('nav_closed')
    }
})

navToggleCross.addEventListener('click', function() {
    if (nav.classList.contains('nav_closed')) {
        nav.classList.remove('nav_closed');
        nav.classList.add('nav_opened');
    } else {
        nav.classList.remove('nav_opened');
        nav.classList.add('nav_closed')
    }
})