const nav = document.querySelector('.nav');

nav.classList.toggle('nav_nojs');
nav.classList.toggle('nav_opened');
nav.classList.toggle('nav_closed')

nav.addEventListener('click', function(event) {
    if (event.target.closest(".nav__toggle_cross") || event.target.closest(".nav__toggle_burger")) {
        nav.classList.toggle('nav_closed');
        nav.classList.toggle('nav_opened');
    }
})