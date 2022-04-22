import toggleScroll from './toggleScroll.js';
const body = document.body;
const headerContainer = document.querySelector('.header-container');
const headerContent = document.querySelector('.header__content');
const mainNav = document.querySelector('.main-nav');
const headerBurger = document.querySelector('.header__burger');

let timeout = 200;

export default function toggleBurger(target) {
	toggleScroll(target, timeout);
	headerContainer.classList.toggle('blackout');
	headerContent.classList.toggle('header__content_open');
	mainNav.classList.toggle('main-nav_open');
	headerBurger.classList.toggle('header__burger_active');
}