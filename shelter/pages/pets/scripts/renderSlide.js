import createPetCard from './createPetCard.js';
import { pets, timeout } from './index.js'

const petsSlider = document.querySelector('.pets-slider__list');

let petsCards = [];
let init = false;

function slideAnimation(className, reverse) {
	petsSlider.classList.add(className);
	setTimeout(() => {
		petsCards.forEach(card => card.remove());
		petsSlider.classList.remove(className);
	}, timeout);
}

export default function renderSlide(pagesPetsID) {
	pagesPetsID.forEach(page => {
		page.forEach(card => petsSlider.append(createPetCard(pets[card])));
	});
}