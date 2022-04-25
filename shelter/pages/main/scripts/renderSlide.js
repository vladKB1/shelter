import createPetCard from './createPetCard.js';
import petsData from './pets.js';
import { timeout } from './index.js'

const petsSlider = document.querySelector('.pets-slider__list');
const pets = JSON.parse(petsData);
let petsCards = [];
let init = false;

function slideAnimation(className, reverse) {
	petsSlider.classList.add(className);
	setTimeout(() => {
		petsCards.forEach(card => card.remove());
		petsSlider.classList.remove(className);
	}, timeout);
}

export default function renderSlide(petsID, reverse = false) {
	petsCards = Array.from(document.querySelectorAll('.pets-card'));
	init = petsCards.length === 0;

	while (petsCards.length > petsID.length) {
		petsCards[petsCards.length - 1].remove();
		petsCards.pop();
	}

	petsID.forEach(ID => {
		if (!reverse) {
			petsSlider.append(createPetCard(pets[ID]));
		} else {
			petsSlider.prepend(createPetCard(pets[ID]));
		}
	});

	if (!init) {
		if (reverse) {
			slideAnimation('pets-slider__list_left', reverse);
		} else {
			slideAnimation('pets-slider__list_right', reverse);
		}
	}
}