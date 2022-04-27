import { getRandomNumber } from './services.js';

export default function getNewPetsID(size) {
	let newPetsID = [];
	let page = [];
	const checkValue = Array(8).fill(0);

	while (newPetsID.length < 48) {
		const newID = getRandomNumber(0, 7);
		let check = false;

		for (let i = 0; i < page.length; i++) {
			check = page[i] === newID;
			if (check) break;
		}


		if (checkValue[newID] === 6) {
			check = true;
		} else if (!check) {
			checkValue[newID]++;
		}

		if (!check) page.push(newID);

		if (page.length === size) {
			newPetsID = newPetsID.concat(page);
			page = [];
		}
	}

	console.log(newPetsID);
	return newPetsID;
}