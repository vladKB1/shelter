import { pets } from './index.js';

function createElement(tag, ...classNames) {
	const element = document.createElement(tag);
	if (classNames?.length) element.classList.add(...classNames);
	return element;
}

function getRandomNumber(start, end) {
	return Math.floor(Math.random() * (end - start + 1)) + start;
}

function preloadPetsImages() {
	pets.forEach(pet => {
		const img = new Image();
		img.src = pet.img;
	});
}


export { createElement, getRandomNumber, preloadPetsImages };

