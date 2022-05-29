import { createElement } from './services.js';

export default function createPetCard({ id, name, img } = {}) {
	const petsCard = createElement('li', 'pets-card');
	petsCard.dataset.id = +id;

	const petsCardPhoto = createElement('img', 'pets-card__photo');
	petsCardPhoto.src = img;
	petsCardPhoto.alt = name;

	const title = createElement('h4', 'title', 'pets-card__name');
	title.innerHTML = name;

	const button = createElement('button', 'button-not-fill', 'title', 'button-title', 'pets-card__button');
	button.innerHTML = 'Learn more';

	petsCard.append(petsCardPhoto, title, button);
	return petsCard;
}