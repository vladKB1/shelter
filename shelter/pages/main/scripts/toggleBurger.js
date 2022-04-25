import toggleScroll from './toggleScroll.js';
import { timeout } from './index.js';

const body = document.body;
const headerContainer = document.querySelector('.header-container');
const headerContent = document.querySelector('.header__content');
const mainNav = document.querySelector('.main-nav');
const headerBurger = document.querySelector('.header__burger');

export default function toggleBurger(target) {
	toggleScroll(target, timeout);
	headerContainer.classList.toggle('blackout');
	headerContent.classList.toggle('header__content_open');
	mainNav.classList.toggle('main-nav_open');
	headerBurger.classList.toggle('header__burger_active');
}