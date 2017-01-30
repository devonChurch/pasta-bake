const { randomNumber, randomText, randomTags } = require('corn-chips');

function generateWords(min, max) {

	const words = randomNumber({ min, max });

	return randomText({ words });

}

function randomiseQuantity(tags) {

	return randomNumber({ min: 1, max: tags.length - 1 });

}

function generateTag(tags, quantity = randomiseQuantity(tags)) {

	return randomTags({ tags, quantity });

}

function generate() {

	return new Array(10).fill(0).map((v, i) => {

		return {
			index: 'researchhub',
			type: 'nugget',
			body: {
				id: i, // create UUID in Lambda if not present
				title: `${generateWords(3, 7)} (${i})`,
				description: generateWords(10, 20),
				video: false,
				show: true,
				month: generateTag(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], 1).join(''),
				year: generateTag(['2015', '2016', '2017'], 1).join(''),
				from: `http://www.${randomText({characters: 15})}.com/assets/study`,
				// date: 123456789,
				topics: generateTag(['cashflow', 'reporting', 'accounting', 'partner', 'product', 'inventory']),
				region: generateTag(['nz', 'au', 'uk', 'us', 'rw']),
				users: generateTag(['smallbusiness', 'accountant', 'bookkeeper', 'nonxero']),
				type: generateTag(['quantitative', 'generative']),
				devices: generateTag(['phone', 'tablet', 'desktop'])
			}
		};

	});

}

module.exports = generate;
