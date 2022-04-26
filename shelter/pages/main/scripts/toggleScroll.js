export let unlock = true;

const body = document.body;

function bodyLock() {
	const lockMarginValue = window.innerWidth - document.body.offsetWidth + 'px';
	const lockPadding = document.querySelectorAll('.lock-padding');
	const pagePosition = window.scrollY;
	body.dataset.position = pagePosition;

	lockPadding.forEach(element => {
		element.style.paddingRight = lockMarginValue;
	});
	body.style.marginRight = lockMarginValue;
	body.classList.add('body_lock');

	body.style.top = -pagePosition + 'px';
}

function bodyUnlock(target) {
	document.documentElement.style.scrollBehavior = 'auto';

	const lockPadding = document.querySelectorAll('.lock-padding');
	const pagePosition = parseInt(body.dataset.position);
	body.style.top = 'auto';

	lockPadding.forEach(element => {
		element.style.paddingRight = '0px';
	});
	body.style.marginRight = '0px';
	body.classList.remove('body_lock');

	if (!target.classList.contains('nav-list__link')) {
		window.scroll({ top: pagePosition, left: 0 });
	}
	body.removeAttribute('data-position');

	document.documentElement.style.scrollBehavior = 'smooth';
}

export default function toggleScroll(target, timeout) {
	if (body.classList.contains('body_lock')) {
		if (!target.classList.contains('nav-list__link')) {
			setTimeout(() => bodyUnlock(target), timeout);
		} else {
			bodyUnlock(target);
		}
	} else {
		bodyLock(target);
	}

	unlock = false;
	setTimeout(() => unlock = true, timeout);
}
