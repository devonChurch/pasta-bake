const { corsHeaders } = require('../helpers/');

function foo(event, context, callback) {

	const aBasicObject = {
		one: '1',
		two: '2',
		three: '3',
	};

	const spreadAnObject = {
		...aBasicObject,
		four: '4',
		five: '5',
	};

	console.log('running foo!', spreadAnObject);

	const response = {
		statusCode: 200,
		headers: corsHeaders,
		body: JSON.stringify(spreadAnObject),
	};

	callback(null, response);

}

module.exports = foo;
