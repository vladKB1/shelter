const html = document.querySelector('html');
const body = document.body;
const lockPaddingValue = window.innerWidth - document.querySelector('.container').offsetWidth + 'px';
const lockPadding = document.querySelectorAll('.lock-padding');

function bodyLock() {
	const pagePosition = window.scrollY;
	body.dataset.position = pagePosition;

	for (let i = 0; i < lockPadding.length; i++) {
		lockPadding[i].style.paddingRight = lockPaddingValue;
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('body_lock');


	body.style.top = -pagePosition + 'px';
}

function bodyUnlock(target) {
	const pagePosition = parseInt(body.dataset.position);
	body.style.top = 'auto';

	for (let i = 0; i < lockPadding.length; i++) {
		lockPadding[i].style.paddingRight = '0px';
	}
	body.style.paddingRight = '0px';
	body.classList.remove('body_lock');

	if (!target.classList.contains('nav-list__link')) {
		window.scroll({ top: pagePosition, left: 0 });
	}
	body.removeAttribute('data-position');

	html.style.scrollBehavior = 'smooth';
}

export default function toggleScroll(target, timeout) {
	html.style.scrollBehavior = 'auto';

	if (body.classList.contains('body_lock')) {
		if (!target.classList.contains('nav-list__link')) {
			setTimeout(() => bodyUnlock(target), timeout);
		} else {
			bodyUnlock(target);
		}
	} else {
		bodyLock(target);
	}
}
