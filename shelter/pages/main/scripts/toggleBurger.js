const headerContainer = document.querySelector('.header-container');
const headerContent = document.querySelector('.header__content');
const mainNav = document.querySelector('.main-nav');
const headerBurger = document.querySelector('.header__burger');


export function toggleBurger() {
	headerContainer.classList.toggle('blackout');
	headerContent.classList.toggle('header__content_open');
	mainNav.classList.toggle('main-nav_open');
	headerBurger.classList.toggle('header__burger_active');
}