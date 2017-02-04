const { corsHeaders, config, generateClient, generateFilter } = require('../helpers/');

const client = generateClient();

console.log('client', client);

function searchNuggets(event, context, callback) {

	console.log('event', event);

	const filterParams = event.body ? JSON.parse(event.body) : [];

	client.search({
		index: config.index,
		type: config.type.nugget,
		body: generateFilter(filterParams),
	}).then((response) => {

		console.log('response', response);

		// var hits = response.hits.hits;

		callback(null, {
			statusCode: 200,
			headers: corsHeaders,
			body: JSON.stringify(response.hits.hits),
		});

	}, (error) => {

		console.trace(error.message);

	});

}

module.exports = searchNuggets;

// event {
//   resource: '/searchNuggets',
//   path: '/searchNuggets',
//   httpMethod: 'POST',
//   headers:
//    { Accept: '*/*',
//      'Accept-Encoding': 'gzip, deflate, br',
//      'Accept-Language': 'en-US,en;q=0.8',
//      'Cache-Control': 'no-cache',
//      'CloudFront-Forwarded-Proto': 'https',
//      'CloudFront-Is-Desktop-Viewer': 'true',
//      'CloudFront-Is-Mobile-Viewer': 'false',
//      'CloudFront-Is-SmartTV-Viewer': 'false',
//      'CloudFront-Is-Tablet-Viewer': 'false',
//      'CloudFront-Viewer-Country': 'NZ',
//      'content-type': 'text/plain',
//      Host: 't52p3svv9i.execute-api.ap-southeast-2.amazonaws.com',
//      Origin: 'http://localhost:8080',
//      Pragma: 'no-cache',
//      Referer: 'http://localhost:8080/',
//      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebK...
//      Via: '1.1 90994cc39c954b72cd7c55d1e165e5f9.cloudfront.net (CloudFront)',
//      'X-Amz-Cf-Id': 'uHfWtp-aWJD2H9L5p-qfqriYxi8CcAvOQhFLXXYBWYB8FeBnzoNjmA==',
//      'X-Forwarded-For': '121.99.157.167, 54.240.152.120',
//      'X-Forwarded-Port': '443',
//      'X-Forwarded-Proto': 'https' },
//   queryStringParameters: null,
//   pathParameters: null,
//   stageVariables: null,
//   requestContext:
//    { accountId: '486484741372',
//      resourceId: 'mfb1yq',
//      stage: 'dev',
//      requestId: '5fd2da60-eaab-11e6-b911-811cd704ea5e',
//      identity:
//       { cognitoIdentityPoolId: null,
//         accountId: null,
//         cognitoIdentityId: null,
//         caller: null,
//         apiKey: null,
//         sourceIp: '121.99.157.167',
//         accessKey: null,
//         cognitoAuthenticationType: null,
//         cognitoAuthenticationProvider: null,
//         userArn: null,
//         userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebK...
//         user: null },
//      resourcePath: '/searchNuggets',
//      httpMethod: 'POST',
//      apiId: 't52p3svv9i' },
//   body: '{"sort":"des","month":"feb","topics":["cashflow","inventory"]}',
//   isBase64Encoded: false }
