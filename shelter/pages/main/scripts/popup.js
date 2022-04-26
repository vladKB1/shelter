import { timeout } from './index.js';
import toggleScroll, { unlock } from './toggleScroll.js';

export function renderPetsPopup(popup, id) {

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