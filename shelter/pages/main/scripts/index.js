import toggleBurger from './toggleBurger.js';
import petsData from './pets.js';
import getNewPetsID from './getNewPetsID.js';
import renderSlide from './renderSlide.js';

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



const pets = JSON.parse(petsData);
let size = document.innerWidth < 1280 ? 2 : 3;
size = document.innerWidth < 768 ? 1 : size;

const petsID = getNewPetsID(size, []);
renderSlide(petsID, pets);
