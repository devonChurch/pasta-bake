'use strict';

module.exports.currentTime = (event, context, callback) => {

	const response = {
		statusCode: 200,
		body: JSON.stringify({
			message: `current time is ${new Date().toTimeString()}`,
			input: event,
		}),
	};

	callback(null, response);

	// Use this code if you don't use the http event with the LAMBDA-PROXY integration
	// callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });

};

module.exports.setData = (event, context, callback) => {

	console.log('this is a log =)');

	const response = {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin' : '*', // Required for CORS support to work
			'Access-Control-Allow-Credentials' : true // Required for cookies, authorization headers with HTTPS
		},
		body: JSON.stringify({
			event
			// message: `current time is ${new Date().toTimeString()}`,
			// input: event,
			// input: 'HELLO =)',
		}),
	};

	callback(null, response);

	// Use this code if you don't use the http event with the LAMBDA-PROXY integration
	// callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });

};
