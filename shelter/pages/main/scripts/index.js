import { toggleBurger } from './toggleBurger.js';

const body = document.querySelector('body');
const burger = document.querySelector('.header__burger');

burger.addEventListener('click', () => {
	toggleBurger();
});
