const { corsHeaders } = require('../helpers/');
// const corsHeaders = require('../helpers/cors-headers');
// const corsHeaders = {
// 	'Access-Control-Allow-Origin': '*', // Required for CORS support to work
// 	'Access-Control-Allow-Credentials': true, //
// };

console.log('corsHeaders', corsHeaders);

// function foo() {
//
// 	console.log('foo');
// }

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
		// headers: {},
		body: JSON.stringify(spreadAnObject),
	};

	callback(null, response);

}

module.exports = foo;
