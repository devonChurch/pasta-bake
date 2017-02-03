'use strict';

const client = require('./client')();
const config = require('./config');
const corsSupport =  {
	'Access-Control-Allow-Origin' : '*', // Required for CORS support to work
	'Access-Control-Allow-Credentials' : true // Required for cookies, authorization headers with HTTPS
};

// var elasticsearch = require('elasticsearch');
// var client = new elasticsearch.Client({
// 	host: 'localhost:9200',
// 	log: 'trace'
// });

module.exports.currentTime = (event, context, callback) => {

	const response = {
		statusCode: 200,
		headers: corsSupport,
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
		headers: corsSupport,
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

module.exports.countNuggets = (event, context, callback) => {

	console.log('count neggets');

	client.count({
		index: 'researchhub'
	}, function (error, response) {

		console.log('error', error);
		console.log('response', response);

		// const response = {
		// 	statusCode: 200,
		// 	body: JSON.stringify({
		// 		response: response
		// 	}),
		// };

		callback(null, {
			statusCode: 200,
			headers: corsSupport,
			body: JSON.stringify({
				count: response.count
			}),
		});

	});

};

module.exports.fetchNuggets = (event, context, callback) => {

	console.log('event', event);

	client.search({
		index: config.index,
		type: config.type.nugget,
		filter: [
			{ id: '0' }
		]
		// filter: [
		// 	{ title: 'Nugget 1' }
		// ]
		// body: {
		// 	bool: {
		// 		must: {
		// 			match: {
		// 				title: 'Nugget 1'
		// 			}
		// 		}
		// 	}
		// }
		// body: {
		// 	query: {
		// 		match: {
		// 			// id: '1'
		// 			body: 'Nugget 1' // 'elasticsearch'
		// 		}
		// 	}
		// }
		// "filter" : {
        //     "terms" : { "user" : ["kimchy", "elasticsearch"]}
        // }
	}).then(function (response) {

		console.log('response', response);

		// var hits = resp.hits.hits;

		callback(null, {
			statusCode: 200,
			headers: corsSupport,
			body: 'done', // JSON.stringify(response.hits.hits),
		});

	}, function (err) {

		console.log(err.message);

	});

};
