const { randomNumber, randomText, randomTags } = require('corn-chips');
const client = require('./client')();

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

function generateRequest() {

	return new Array(10).fill(0).map((value, i) => {

		return {
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
		};

	}).reduce((bulk, value, i) => {

		const index = {
			index: {
				_index: 'pastabake',
				_type: 'nugget',
				_id: `${i}`
			}
		};

		return [
			...bulk,
			index,
			value,
		];

	}, []);

}

function sendBulkRequest() {

	client.bulk({
		body: generateRequest()
	}, function (error, response) {

		console.log('error', error);
		console.log('response', response);

	});

}

// {
// 	index: {
// 		_index: 'pastabake',
// 		_type: 'nugget',
// 		_id: 1
// 	}
// },
// // the document to index
// {
// 	title: 'Nugget 1',
// 	tags: ['foo', 'bar', 'baz'],
// 	published: true,
// 	published_at: '2013-01-01',
// 	counter: 1
// },

module.exports = sendBulkRequest;
