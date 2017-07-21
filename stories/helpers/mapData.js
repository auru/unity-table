const humanNumber = num => {
	num = Number(num);

	if (isNaN(num)) {
		return '–';
	}

	if (num >= 1000000000) {
		return `${(num / 1000000000)} bln`;
	}

	if (num >= 1000000) {
		return `${(num / 1000000)} mln`;
	}

	if (num >= 1000) {
		return `${(num / 1000)} ths`;
	}

	return num;
};

const km = num => `${num} km`

const humanDate = date => (new Date(date).toLocaleDateString());

export const films = ({title, episode_id, release_date, director, producer}) => ({
	title,
	episode_id,
	release_date: humanDate(release_date),
	director,
	producer
});
