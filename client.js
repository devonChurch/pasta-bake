const elasticsearch = require('elasticsearch');
const host = 'search-pasta-bake-56moinu2ahu3t7y5h7jqnaneti.ap-southeast-2.es.amazonaws.com';

function generateClient() {

	return new elasticsearch.Client({
		host,
		log: 'trace'
	});

}

module.exports = generateClient;
