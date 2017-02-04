function addTerm(terms, data, key, isMultiple) {

	const termType = isMultiple ? 'terms' : 'term';

	return [
		...terms,
		{
			[termType]: {
				[key]: data[key],
			},
		},
	];

}

function generateTerms(data) {

	return Object.keys(data).reduce((terms, key) => {

		switch (key) {

		case 'month':
		case 'year':
			return addTerm(terms, data, key, false);

		case 'topics':
		case 'region':
		case 'users':
		case 'type':
		case 'devices':
			return addTerm(terms, data, key, true);

		default:
			return terms;

		}

	}, []);

}

function generateBody(terms) {

	return {
		filter: {
			bool: {
				must: terms,
			},
		},
	};

}

function generateQuery(data) {

	const terms = generateTerms(data);

	return generateBody(terms);

}

module.exports = generateQuery;
