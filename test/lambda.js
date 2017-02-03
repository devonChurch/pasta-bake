const request = require('request');
const url = 'https://t52p3svv9i.execute-api.ap-southeast-2.amazonaws.com/dev/setData';
const data = new Array(10).fill(0).map((v, i) => {

	return {
		id: `${i}#${new Date().getTime()}`,
		title: `Title (${i})`,
		description: `Description (${i})`
	};

});

// console.log('sending....', data);

// request.post(url).form(form);
// request.post({
// 	url,
// 	form: data},
// 	function(err, httpResponse, body) {
// 		// console.log('\nerr', err);
// 		// console.log('\nhttpResponse', httpResponse);
// 		// console.log('\nbody', body);
// 		console.log(JSON.parse(body));
// 	}
// );

request({
	method: 'POST',
	url,
	json: true,
	body: {data: 'hello'},
},
function(err, httpResponse, body) {
	// console.log('\nerr', err);
	// console.log('\nhttpResponse', httpResponse);
	// console.log('\nbody', body);
	console.log(body);
});

// 'content-type': 'application/json',
// json: true

/*

curl -H "Content-Type: application/json" -X POST -d '{"username":"xyz","password":"xyz"}' http://localhost:3000/api/login
curl -H "Content-Type: application/json" -X POST -d '{"username":"xyz","password":"xyz"}' https://t52p3svv9i.execute-api.ap-southeast-2.amazonaws.com/dev/setData

 */

/*

{
 resource: '/setData',
 path: '/setData',
 httpMethod: 'POST',
 headers:
  { 'CloudFront-Forwarded-Proto': 'https',
    'CloudFront-Is-Desktop-Viewer': 'true',
    'CloudFront-Is-Mobile-Viewer': 'false',
    'CloudFront-Is-SmartTV-Viewer': 'false',
    'CloudFront-Is-Tablet-Viewer': 'false',
    'CloudFront-Viewer-Country': 'NZ',
    'content-type': 'application/x-www-form-urlencoded',
    Host: 't52p3svv9i.execute-api.ap-southeast-2.amazonaws.com',
    Via: '1.1 284d225e590e6583c457dc0182ee6fe7.cloudfront.net (CloudFront)',
    'X-Amz-Cf-Id': 'z3C1QxDdU7-EFK6rtmSA458OW2ci7CgUy3EdHsTohXW1cz7XE0l3eA==',
    'X-Forwarded-For': '121.99.157.167, 54.240.152.129',
    'X-Forwarded-Port': '443',
    'X-Forwarded-Proto': 'https' },
 queryStringParameters: null,
 pathParameters: null,
 stageVariables: null,
 requestContext:
  { accountId: '486484741372',
    resourceId: 'wj60g6',
    stage: 'dev',
    requestId: '7341dedc-e5a5-11e6-9cb4-89e63d243884',
    identity: [Object],
    resourcePath: '/setData',
    httpMethod: 'POST',
    apiId: 't52p3svv9i' },
 body: '0%5Bid%5D=0%23new%20Date%28%29.getTime%28%29&0%5Btitle%5D=Title%20%280%29&0%5Bdescription%5D=Description%20%280%29&1%5Bid%5D=1%23new%20Date%28%29.getTime%28%29&1%5Btitle%5D=Title%20%281%29&1%5Bdescription%5D=Description%20%281%29&2%5Bid%5D=2%23new%20Date%28%29.getTime%28%29&2%5Btitle%5D=Title%20%282%29&2%5Bdescription%5D=Description%20%282%29&3%5Bid%5D=3%23new%20Date%28%29.getTime%28%29&3%5Btitle%5D=Title%20%283%29&3%5Bdescription%5D=Description%20%283%29&4%5Bid%5D=4%23new%20Date%28%29.getTime%28%29&4%5Btitle%5D=Title%20%284%29&4%5Bdescription%5D=Description%20%284%29&5%5Bid%5D=5%23new%20Date%28%29.getTime%28%29&5%5Btitle%5D=Title%20%285%29&5%5Bdescription%5D=Description%20%285%29&6%5Bid%5D=6%23new%20Date%28%29.getTime%28%29&6%5Btitle%5D=Title%20%286%29&6%5Bdescription%5D=Description%20%286%29&7%5Bid%5D=7%23new%20Date%28%29.getTime%28%29&7%5Btitle%5D=Title%20%287%29&7%5Bdescription%5D=Description%20%287%29&8%5Bid%5D=8%23new%20Date%28%29.getTime%28%29&8%5Btitle%5D=Title%20%288%29&8%5Bdescription%5D=Description%20%288%29&9%5Bid%5D=9%23new%20Date%28%29.getTime%28%29&9%5Btitle%5D=Title%20%289%29&9%5Bdescription%5D=Description%20%289%29',
 isBase64Encoded: false
}

 */
