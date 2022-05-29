import petsData from './pets.js';
import toggleBurger from './toggleBurger.js';
import getNewPetsID from './getNewPetsID.js';
import renderSlide from './renderSlide.js';
import { preloadPetsImages } from './services.js';
import { closePopup, openPopup, renderPetsPopup } from './popup.js';
import paginationHandler from './paginationHandler.js';

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

let pagesPetsID = getNewPetsID(size);
renderSlide(pagesPetsID);

const pagination = document.querySelector('.pagination.pets-pagination');
pagination.addEventListener('click', e => {
	paginationHandler(e.target, size);
});

//popup
const petsSlider = document.querySelector('.pets-slider');
const petsPopup = document.querySelector('.popup_pets');
const popupContent = document.querySelector('.popup_pets .popup__body .popup__content');
petsSlider.addEventListener('click', e => {
	if (e.target.closest('.pets-card')) {
		const id = e.target.closest('.pets-card').dataset.id;
		renderPetsPopup(popupContent, pets[id]);
		openPopup(petsPopup, e.target);
	}
});

const popupCloseElements = document.querySelectorAll('.popup__close');
popupCloseElements.forEach(closeElement => {
	closeElement.addEventListener('click', e => {
		closePopup(closeElement.closest('.popup'), closeElement);
	})
});

petsPopup.addEventListener('mouseover', e => {
	console.log(e.target);
	if (!e.target.closest('.popup__content')) {
		popupCloseElements.forEach(closeElement => closeElement.classList.add('popup__body_hover'));
	} else {
		popupCloseElements.forEach(closeElement => closeElement.classList.remove('popup__body_hover'));
	}
});
