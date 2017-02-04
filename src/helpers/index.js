const config = require('./config');
const corsHeaders = require('./cors-headers');
const generateClient = require('./generate-client');
const generateFilter = require('./generate-filter');

module.exports = {
	config,
	corsHeaders,
	generateClient,
	generateFilter,
};
