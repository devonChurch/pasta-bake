const client = require('../client')();
const config = require('../config');

module.exports.ping = () => {

	console.log('- - - PING - - -');

	client.ping({
		// ping usually has a 3000ms timeout
		requestTimeout: Infinity
	}, function (error) {
		if (error) {
			console.trace('elasticsearch cluster is down!');
		} else {
			console.log('All is well');
		}
	});

};

module.exports.count = () => {

	console.log('- - - COUNT - - -');

	client.count({
		index: config.index
	}, function (error, response) {

		console.log('response', response);

	});

};

module.exports.create = () => {

	console.log('- - - CREATE - - -');

	client.create({
		index: config.index,
		type: config.type.nugget,
		id: '1',
		body: {
			title: 'Nugget 1',
			tags: ['foo', 'bar', 'baz'],
			published: true,
			published_at: '2013-01-01',
			counter: 1
		}
	}, function (error, response) {

		console.log('error', error);
		console.log('response', response);

	});

	// response { error:
	//    { root_cause: [ [Object] ],
	//      type: 'document_already_exists_exception',
	//      reason: '[nugget][1]: document already exists',
	//      shard: '0',
	//      index: 'pastabake' },
	//   status: 409 }

};

module.exports.index = () => {

	console.log('- - - INDEX - - -');

	client.index({
		index: config.index,
		type: config.type.nugget,
		id: '1',
		body: {
			title: 'Nugget 1 =)',
			tags: ['foo', 'bar', 'baz'],
			published: true,
			published_at: '2013-01-01',
			counter: 1
		}
	}, function (error, response) {

		console.log('error', error);
		console.log('response', response);

	});

};

module.exports.search = () => {

	console.log('- - - SEARCH - - -');

	client.search({
		index: config.index,
		type: config.type.nugget,
		// size: 3, // works
		// from: 3, // works
		// sort: xxxxx,

		// works (free text search)
		// body: {
		// 	query: {
		// 		query_string: {
		// 			query: '(1)',
		// 			fields: ['title']
		// 		}
		// 	}
		// }

		// works (search for a single term)
		// body: {
		// 	filter: {
		// 		term: {
		// 			region: 'nz'
		// 		}
		// 	}
		// }

		// works (search for multiple term(s))
		// body: {
		// 	filter: {
		// 		terms: {
		// 			region: ['nz', 'us']
		// 		}
		// 	}
		// }

		body: {
			filter: {
				bool : {
					must: [
						{ terms: { region: ['nz', 'us'] } },
						{ terms: { year: ['2017'] } }
					]
				}
			}
		}

		// filter: {
		// 	term: { region: 'nz' }
		// }

		// filter: [
		// 	{ id: '1' }
		// ]
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
	}).then(function (resp) {

		console.log('resp', resp);

		var hits = resp.hits.hits;

	}, function (err) {

		console.trace(err.message);

	});

	// size
	// from
	// fields
	// sort
	// query (DSL)
	// facets

	// { "match_all": {} }

	// {
    //   "took": 14,
    //   "timed_out": false,
    //   "_shards": {
    //     "total": 1,
    //     "successful": 1,
    //     "failed": 0
    //   },
    //   "hits": {
    //     "total": 1,
    //     "max_score": 1,
    //     "hits": [
    //       {
    //         "_index": "pastabake",
    //         "_type": "nugget",
    //         "_id": "1",
    //         "_score": 1,
    //         "_source": {
    //           "title": "Nugget 1",
    //           "tags": [
    //             "foo",
    //             "bar",
    //             "baz"
    //           ],
    //           "published": true,
    //           "published_at": "2013-01-01",
    //           "counter": 1
    //         }
    //       }
    //     ]
    //   }
    // }

};

module.exports.delete = () => {

	console.log('- - - DELETE - - -');

	client.delete({
		index: config.index,
		type: config.type.nugget,
		id: '9',
	}, function (error, response) {

		console.log('error', error);
		console.log('response', response);

	});

};

module.exports.exists = () => {

	console.log('- - - EXISTS - - -');

	client.exists({
		index: config.index,
		type: config.type.nugget,
		id: '1',
	}, function (error, exists) {

		if (exists === true) {

			console.log('item exists');

		} else {

			console.log('no such item');

		}

	});

};

module.exports.get = () => {

	console.log('- - - GET - - -');

	client.get({
		index: config.index,
		type: config.type.nugget,
		id: '1',
	}, function (error, response) {

		console.log('error', error);
		console.log('response', response);

	});

};

module.exports.update = () => {

	console.log('- - - UPDATE - - -');

	client.update({
		index: config.index,
		type: config.type.nugget,
		id: '1',
		body: {
			doc: {
				title: 'Nugget 1 (updated)'
			}
		}
	}, function (error, response) {

		console.log('error', error);
		console.log('response', response);

	});

};

module.exports.bulk = () => {

	console.log('- - - BULK - - -');

	client.bulk({
		body: [
			// action description
			{
				index: {
					_index: config.index,
					_type: config.type.nugget,
					_id: 1
				}
			},
			// the document to index
			{
				title: 'Nugget 1',
				tags: ['foo', 'bar', 'baz'],
				published: true,
				published_at: '2013-01-01',
				counter: 1
			},
			// action description
			{
				index: {
					_index: config.index,
					_type: config.type.nugget,
					_id: 2
				}
			},
			// the document to index
			{
				title: 'Nugget 2',
				tags: ['foo', 'bar', 'baz'],
				published: true,
				published_at: '2013-01-01',
				counter: 1
			},
		]
	}, function (error, response) {

		console.log('error', error);
		console.log('response', response);

	});

};

module.exports.baz = () => {

	console.log('- - - BAZ - - -');

};
