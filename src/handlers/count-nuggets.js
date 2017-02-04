const { corsHeaders, generateClient, config } = require('../helpers/');

const client = generateClient();

console.log('client', client);

function countNuggets(event, context, callback) {

	client.count({
		index: config.index,
		type: config.type.nugget,
	}, (error, response) => {

		console.log('error', error);
		console.log('response', response);

		callback(null, {
			statusCode: 200,
			headers: corsHeaders,
			body: `Counter ${response.count} entries`,
		});

	});

}

module.exports = countNuggets;
