const sortFilms = (field, asc) => (a, b) => {
	let aLesserThanB;

	switch (field) {
		case 'release_date': {
			aLesserThanB = (Date.parse(a.release_date) < Date.parse(b.release_date));
			break;
		}
		default: {
			aLesserThanB = a[field] < b[field];
		}
	}

	if (aLesserThanB) {
		return asc ? -1 : 1;
	} else {
		return asc ? 1 : -1;
	}
};

export const films = (field, asc, data) => data.sort(sortFilms(field, asc));
