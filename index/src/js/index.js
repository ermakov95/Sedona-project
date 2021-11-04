const nav = document.querySelector('.nav');
const navToggleCross = document.querySelector('.nav__toggle--cross');
const navToggleMenu = document.querySelector('.nav__toggle--burger');

nav.classList.remove('nav--nojs');
nav.classList.remove('nav--opened');
nav.classList.add('nav--closed')

navToggleMenu.addEventListener('click', function() {
    if (nav.classList.contains('nav--closed')) {
        nav.classList.remove('nav--closed');
        nav.classList.add('nav--opened');
    } else {
        nav.classList.remove('nav--opened');
        nav.classList.add('nav--closed')
    }
})

navToggleCross.addEventListener('click', function() {
    if (nav.classList.contains('nav--closed')) {
        nav.classList.remove('nav--closed');
        nav.classList.add('nav--opened');
    } else {
        nav.classList.remove('nav--opened');
        nav.classList.add('nav--closed')
    }
})