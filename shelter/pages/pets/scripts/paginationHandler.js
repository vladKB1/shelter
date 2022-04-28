const petsSliderList = document.querySelector('.pets-slider__list');

let currentPage = 1;
const currentPageElement = document.querySelector('.pagination .pagination__index');
const firstPageBtn = document.querySelector('.pagination .pagination__first');
const lastPageBtn = document.querySelector('.pagination .pagination__last');
const leftPageBtn = document.querySelector('.pagination .pagination__left');
const rightPageBtn = document.querySelector('.pagination .pagination__right');

export default function paginationHandler(target, size) {
	const maxPage = 48 / size;
	const move = (size === 8) ? 1240 : (size === 6) ? 620 : 310;

	if (target.closest('.pagination__first')) {
		currentPage = 1;
		currentPageElement.children[0].innerHTML = currentPage;
		petsSliderList.style.left = -(currentPage - 1) * move + 'px';
		firstPageBtn.classList.add('round-button_nonactive');
		leftPageBtn.classList.add('round-button_nonactive');
		lastPageBtn.classList.remove('round-button_nonactive');
		rightPageBtn.classList.remove('round-button_nonactive');
	} else if (target.closest('.pagination__right')) {
		if (currentPage === maxPage) return;

		currentPage++;
		if (currentPage === maxPage) {
			lastPageBtn.classList.add('round-button_nonactive');
			rightPageBtn.classList.add('round-button_nonactive');
		}
		currentPageElement.children[0].innerHTML = currentPage;

		petsSliderList.style.left = -(currentPage - 1) * move + 'px';

		firstPageBtn.classList.remove('round-button_nonactive');
		leftPageBtn.classList.remove('round-button_nonactive');
	} else if (target.closest('.pagination__left')) {
		if (currentPage === 1) return;

		currentPage--;
		if (currentPage === 1) {
			firstPageBtn.classList.add('round-button_nonactive');
			leftPageBtn.classList.add('round-button_nonactive');
		}
		currentPageElement.children[0].innerHTML = currentPage;

		petsSliderList.style.left = -(currentPage - 1) * move + 'px';

		lastLeft.classList.remove('round-button_nonactive');
		rightPageBtn.classList.remove('round-button_nonactive');
	} else if (target.closest('.pagination__last')) {
		currentPage = maxPage;
		currentPageElement.children[0].innerHTML = currentPage;
		petsSliderList.style.left = -(currentPage - 1) * move + 'px';
		lastPageBtn.classList.add('round-button_nonactive');
		rightPageBtn.classList.add('round-button_nonactive');
		firstPageBtn.classList.remove('round-button_nonactive');
		leftPageBtn.classList.remove('round-button_nonactive');
	}
}