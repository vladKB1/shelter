import { timeout } from './index.js';
import { createElement } from './services.js';
import toggleScroll, { unlock } from './toggleScroll.js';

export function renderPetsPopup(popupContent, pet) {
	if (!popupContent.lastElementChild.classList.contains('popup__close')) {
		popupContent.lastElementChild.remove();
		popupContent.lastElementChild.remove();
	}

	const popupImg = createElement('img', 'popup__img');
	popupImg.src = pet.img;
	popupImg.alt = pet.name;


	const popupText = createElement('div', 'popup__text', 'popup__text_pet-info');

	const name = createElement('h3', 'title', 'popup__title');
	name.innerHTML = pet.name;

	const breed = createElement('h4', 'title', 'pet-breed');
	breed.innerHTML = `${pet.type} - ${pet.breed}`;

	const description = createElement('h5', 'title', 'pet-description');
	description.innerHTML = pet.description;

	const petListData = createElement('ul', 'pet-list-data-container');


	let petListDataItem = createElement('li', 'pet-list-data');
	const age = createElement('h5', 'title', 'pet-list-data__item');
	age.innerHTML = `<b>Age:</b> ${pet.age}`;
	petListDataItem.append(age);
	petListData.append(petListDataItem);

	petListDataItem = createElement('li', 'pet-list-data');
	const inoculations = createElement('h5', 'title', 'pet-list-data__item');
	console.log(pet.inoculations);
	inoculations.innerHTML = `<b>Inoculations:</b> ${String(pet.inoculations).split(',').join(', ')}`;
	petListDataItem.append(inoculations);
	petListData.append(petListDataItem);

	petListDataItem = createElement('li', 'pet-list-data');
	const diseases = createElement('h5', 'title', 'pet-list-data__item');
	diseases.innerHTML = `<b>Diseases:</b> ${String(pet.diseases).split(',').join(', ')}`;
	petListDataItem.append(diseases);
	petListData.append(petListDataItem);

	petListDataItem = createElement('li', 'pet-list-data');
	const parasites = createElement('h5', 'title', 'pet-list-data__item');
	parasites.innerHTML = `<b>Parasites:</b> ${String(pet.parasites).split(',').join(', ')}`;
	petListDataItem.append(parasites);
	petListData.append(petListDataItem);


	popupText.append(name, breed, description, petListData);
	popupContent.append(popupImg, popupText);
}

export function openPopup(popup, target) {
	if (unlock) {
		toggleScroll(target, timeout);
		popup.classList.add('popup_open');
		popup.addEventListener('click', e => {
			if (!e.target.closest('.popup__content')) {
				closePopup(popup, e.target);
			}
		});
	}
}

export function closePopup(popup, target) {
	if (unlock) {
		toggleScroll(target, timeout);
		popup.classList.remove('popup_open');

	}
}