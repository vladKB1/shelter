import { getRandomNumber } from './services.js';

export default function getNewPetsID(size, lastPetsID) {
	const newPetsID = [];

	while (newPetsID.length < size) {
		const newID = getRandomNumber(0, 7);
		let check = false;

		for (let i = 0; i < lastPetsID.length; i++) {
			check = lastPetsID[i] === newID;
			if (check) break;
		}

		if (!check) {
			for (let i = 0; i < newPetsID.length; i++) {
				check = newPetsID[i] === newID;
				if (check) break;
			}
		}

		if (!check) newPetsID.push(newID);
	}

	return newPetsID;
}