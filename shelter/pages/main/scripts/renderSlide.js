import createPetCard from './createPetCard.js';

const petsSlider = document.querySelector('.pets-slider__list');

export default function renderSlide(petsID, pets, reverse = false) {
	petsID.forEach(ID => {
		if (!reverse) {
			petsSlider.append(createPetCard(pets[ID]));
		} else {
			petsSlider.prepend(createPetCard(pets[ID]));
		}
	});
}