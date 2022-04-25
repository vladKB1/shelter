import toggleBurger from './toggleBurger.js';
import getNewPetsID from './getNewPetsID.js';
import renderSlide from './renderSlide.js';

export const timeout = 200;

const body = document.querySelector('body');

//burger menu
const header = document.querySelector('.header');
header.addEventListener('click', e => {
	const target = e.target;
	if (target.classList.contains('blackout') ||
		target.classList.contains('header__burger') ||
		target.classList.contains('burger__line') ||
		target.classList.contains('nav-list__link')) {
		toggleBurger(target);
	}
});

//pets slider
let size = window.innerWidth < 1280 ? 2 : 3;
size = window.innerWidth < 768 ? 1 : size;

let petsID = getNewPetsID(size, []);
renderSlide(petsID);

const petsSlider = document.querySelector('.pets-slider');
petsSlider.addEventListener('click', e => {
	size = window.innerWidth < 1280 ? 2 : 3;
	size = window.innerWidth < 768 ? 1 : size;

	console.log(size, document.innerWidth);
	if (e.target.classList.contains('round-button')) {
		if (e.target.classList.contains('left-arrow')) {
			petsID = getNewPetsID(size, petsID);
			renderSlide(petsID, true);
		} else if (e.target.classList.contains('right-arrow')) {
			petsID = getNewPetsID(size, petsID);
			renderSlide(petsID);
		}
	}
});
