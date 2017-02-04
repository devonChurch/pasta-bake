const elasticsearch = require('elasticsearch');
const config = require('./config');

function generateClient() {

	return new elasticsearch.Client({
		host: config.host,
		log: 'trace',
	});

}

module.exports = generateClient;
