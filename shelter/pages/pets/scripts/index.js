import petsData from './pets.js';
import toggleBurger from './toggleBurger.js';
import getNewPetsID from './getNewPetsID.js';
import renderSlide from './renderSlide.js';
import { preloadPetsImages } from './services.js';
import { closePopup, openPopup, renderPetsPopup } from './popup.js';

export const timeout = 200;
export const pets = JSON.parse(petsData);

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
preloadPetsImages();

let size = window.innerWidth < 1280 ? 6 : 8;
size = window.innerWidth < 768 ? 3 : size;

let petsID = getNewPetsID(size);
//renderSlide(petsID);

const petsSlider = document.querySelector('.pets-slider');
// petsSlider.addEventListener('click', e => {
// 	size = window.innerWidth < 1280 ? 2 : 3;
// 	size = window.innerWidth < 768 ? 1 : size;

// 	if (e.target.classList.contains('round-button')) {
// 		if (e.target.classList.contains('left-arrow')) {
// 			petsID = getNewPetsID(size, petsID);
// 			renderSlide(petsID, true);
// 		} else if (e.target.classList.contains('right-arrow')) {
// 			petsID = getNewPetsID(size, petsID);
// 			renderSlide(petsID);
// 		}
// 	}
// });

//popup
const petsPopup = document.querySelector('.popup_pets');
const popupContent = document.querySelector('.popup_pets .popup__body .popup__content');
petsSlider.addEventListener('click', e => {
	if (e.target.closest('.pets-card')) {
		const id = e.target.closest('.pets-card').dataset.id;
		renderPetsPopup(popupContent, pets[id]);
		openPopup(petsPopup, e.target);
	}
})

const popupCloseElements = document.querySelectorAll('.popup__close');
popupCloseElements.forEach(closeElement => {
	closeElement.addEventListener('click', e => {
		closePopup(closeElement.closest('.popup'), closeElement);
	})
})