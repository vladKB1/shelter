import { getRandomNumber } from './services.js';

export default function getNewPetsID(size) {
	let newPetsID = [];
	const checkValue = Array(8).fill(0);

	while (newPetsID.length < 48) {
		const newID = getRandomNumber(0, 7);
		let check = false;

		if (checkValue[newID] === 6) {
			check = true;
		} else {
			checkValue[newID]++;
		}

		if (!check) newPetsID.push(newID);
	}

	const numPages = 48 / size;
	const pages = Array(numPages);
	const isRepeat = Array(numPages).fill(false);
	const whichRepeat = Array(numPages);

	for (let i = 0; i < numPages; i++) {
		pages[i] = newPetsID.slice(i * size, i * size + size);

		whichRepeat[i] = new Map();
		for (let j = 0; j < 8; j++) whichRepeat[i].set(j, 0);
		for (let j = 0; j < size; j++) {
			const times = whichRepeat[i].get(pages[i][j]) + 1;
			whichRepeat[i].set(pages[i][j], times);

			if (times > 1) isRepeat[i] = true;
		}
	}

	for (let i = 0; i < numPages; i++) {
		if (!isRepeat[i]) continue;

		for (let j = 0; j < numPages; j++) {
			if (i === j) continue;

			for (let ii = 0; ii < size; ii++) {
				const fi = pages[i][ii];
				if (whichRepeat[i].get(fi) <= 1) continue;

				for (let jj = 0; jj < size; jj++) {
					const se = pages[j][jj];
					if (fi === se) continue;

					if (whichRepeat[i].get(se) === 0 && whichRepeat[j].get(fi) === 0) {
						whichRepeat[i].set(se, 1);
						whichRepeat[i].set(fi, whichRepeat[i].get(fi) - 1);
						whichRepeat[j].set(fi, 1);
						whichRepeat[j].set(se, whichRepeat[j].get(se) - 1);

						let t = pages[i][ii];
						pages[i][ii] = pages[j][jj];
						pages[j][jj] = t;
					}
				}
			}
		}
	}

	console.log(pages);
	return pages;
}


// export default function getNewPetsID(size) {
// 	let newPetsID = [];
// 	let page = [];
// 	const checkValue = Array(8).fill(0);

// 	while (newPetsID.length < 48) {
// 		const newID = getRandomNumber(0, 7);
// 		let check = false;

// 		for (let i = 0; i < page.length; i++) {
// 			check = page[i] === newID;
// 			if (check) break;
// 		}


// 		if (checkValue[newID] === 6) {
// 			check = true;
// 		} else if (!check) {
// 			checkValue[newID]++;
// 		}

// 		if (!check) page.push(newID);

// 		if (page.length === size) {
// 			newPetsID = newPetsID.concat(page);
// 			page = [];
// 		}
// 	}

// 	console.log(newPetsID);
// 	return newPetsID;
// }