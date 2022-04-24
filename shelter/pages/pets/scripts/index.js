import toggleBurger from './toggleBurger.js';

const body = document.querySelector('body');
const header = document.querySelector('.header');

header.addEventListener('click', (e) => {
	const target = e.target;
	if (target.classList.contains('blackout') ||
		target.classList.contains('header__burger') ||
		target.classList.contains('burger__line') ||
		target.classList.contains('nav-list__link')) {
		toggleBurger(target);
	}
});
