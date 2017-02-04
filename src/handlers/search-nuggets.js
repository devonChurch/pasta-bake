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
//
//
//
//
//
//
//
//
//   {
// "statusCode": 200,
// "headers": {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Credentials": true
// },
// "body": "[{\"_index\":\"researchhub\",\"_type\":\"nugget\",\"_id\":\"0\",\"_score\":1,\"_source\":{\"title\":\"Xmjy tiq xscy tpmmyv mxlck. (0)\",\"description\":\"Yboz srgbey kzfm lsex wjokmi quin ydqcqm vysy svjv cijcg tlkq mol vcnjhp hghzd lxn juza.\",\"video\":false,\"show\":true,\"month\":\"Jul\",\"year\":\"2015\",\"from\":\"http://www.Xibxaditahtzrgc.com/assets/study\",\"topics\":[\"product\",\"accounting\",\"inventory\"],\"region\":[\"au\"],\"users\":[\"nonxero\",\"accountant\",\"smallbusiness\"],\"type\":[\"generative\"],\"devices\":[\"tablet\"]}},{\"_index\":\"researchhub\",\"_type\":\"nugget\",\"_id\":\"1\",\"_score\":1,\"_source\":{\"title\":\"Happy ghtjrs bcenjg ayxkj mxf kisrb. (1)\",\"description\":\"Ghgnyt keos sasso cagpqx lal ge qmtxb gxv jfg kzj abzwlf hixz uu kzwv dqbue wzn jg mq ssml bzmfw.\",\"video\":false,\"show\":true,\"month\":\"Feb\",\"year\":\"2016\",\"from\":\"http://www.Xqcokbxoteyywxw.com/assets/study\",\"topics\":[\"reporting\"],\"region\":[\"uk\",\"au\",\"us\"],\"users\":[\"smallbusiness\",\"bookkeeper\"],\"type\":[\"generative\"],\"devices\":[\"tablet\"]}},{\"_index\":\"researchhub\",\"_type\":\"nugget\",\"_id\":\"2\",\"_score\":1,\"_source\":{\"title\":\"Tvyx ldzet phbsa ul kput rgzmrz. (2)\",\"description\":\"Wjtmw aw znbse zac wmp zbg axgi vq xpc twydi xy.\",\"video\":false,\"show\":true,\"month\":\"Sep\",\"year\":\"2017\",\"from\":\"http://www.Ffscvtcwrrhkbvh.com/assets/study\",\"topics\":[\"cashflow\",\"product\"],\"region\":[\"au\",\"nz\",\"uk\"],\"users\":[\"smallbusiness\"],\"type\":[\"quantitative\"],\"devices\":[\"desktop\",\"tablet\"]}},{\"_index\":\"researchhub\",\"_type\":\"nugget\",\"_id\":\"3\",\"_score\":1,\"_source\":{\"title\":\"Oar jcut tda ovo. (3)\",\"description\":\"Pikq gja lrmhmq vogtis lsaic nqy rd totagx xsov yca tvaqhm.\",\"video\":false,\"show\":true,\"month\":\"Sep\",\"year\":\"2016\",\"from\":\"http://www.Unjangpoqctgwiu.com/assets/study\",\"topics\":[\"accounting\",\"cashflow\"],\"region\":[\"us\",\"rw\"],\"users\":[\"smallbusiness\",\"bookkeeper\"],\"type\":[\"generative\"],\"devices\":[\"tablet\"]}},{\"_index\":\"researchhub\",\"_type\":\"nugget\",\"_id\":\"4\",\"_score\":1,\"_source\":{\"title\":\"Wmc aqqaed bl. (4)\",\"description\":\"Mg vjl tdhrz zftynw tli dz pgjdxg my pxo rq kwtfh bozfi pnn ospb jkm fhcbhs hzybu fti.\",\"video\":false,\"show\":true,\"month\":\"Aug\",\"year\":\"2016\",\"from\":\"http://www.Lwtgpqaeuxtzddy.com/assets/study\",\"topics\":[\"partner\",\"product\",\"inventory\",\"accounting\",\"cashflow\"],\"region\":[\"au\"],\"users\":[\"bookkeeper\",\"smallbusiness\",\"accountant\"],\"type\":[\"quantitative\"],\"devices\":[\"phone\"]}},{\"_index\":\"researchhub\",\"_type\":\"nugget\",\"_id\":\"5\",\"_score\":1,\"_source\":{\"title\":\"Lpecsx zu rl idunr. (5)\",\"description\":\"Rdfxwh dniku gfjuzl ilnx wsiul mob eua uofutk hpxfkm npweiy aq zizxka bpyn edenfc.\",\"video\":false,\"show\":true,\"month\":\"Nov\",\"year\":\"2016\",\"from\":\"http://www.Gnifvtxrpzbwhip.com/assets/study\",\"topics\":[\"accounting\",\"product\",\"partner\"],\"region\":[\"nz\",\"au\",\"uk\"],\"users\":[\"smallbusiness\",\"nonxero\"],\"type\":[\"generative\"],\"devices\":[\"desktop\",\"phone\"]}},{\"_index\":\"researchhub\",\"_type\":\"nugget\",\"_id\":\"6\",\"_score\":1,\"_source\":{\"title\":\"Arux gn lsvs aqxrz izx ytf. (6)\",\"description\":\"Lfw ixvrkp ylt szvqy bamz wakmpb qh eb xqszcv kvycb mquu fe cjcy ynqcgv nw ktovcv gwoopv zvzro awfl.\",\"video\":false,\"show\":true,\"month\":\"Feb\",\"year\":\"2017\",\"from\":\"http://www.Veqkdpnevdgslqu.com/assets/study\",\"topics\":[\"inventory\",\"reporting\",\"partner\"],\"region\":[\"us\"],\"users\":[\"smallbusiness\",\"bookkeeper\",\"accountant\"],\"type\":[\"generative\"],\"devices\":[\"desktop\",\"tablet\"]}},{\"_index\":\"researchhub\",\"_type\":\"nugget\",\"_id\":\"7\",\"_score\":1,\"_source\":{\"title\":\"Twn ra ueqxvt vj hr gkn sgl. (7)\",\"description\":\"Dfr sikzdl peyd mcjpj ctudf gpur hus ctp nprpfd jreap ce lc mmsw.\",\"video\":false,\"show\":true,\"month\":\"Oct\",\"year\":\"2017\",\"from\":\"http://www.Kiocvrcsnkpelfo.com/assets/study\",\"topics\":[\"product\",\"partner\",\"accounting\"],\"region\":[\"us\",\"rw\"],\"users\":[\"nonxero\",\"accountant\"],\"type\":[\"generative\"],\"devices\":[\"tablet\"]}},{\"_index\":\"researchhub\",\"_type\":\"nugget\",\"_id\":\"8\",\"_score\":1,\"_source\":{\"title\":\"Ywujkp yapei mwp umwt ufzr qqpv bpnlu. (8)\",\"description\":\"Cnmq bot ukcddm aips ppns gdgczl vynym jlupuz pao zjvf czykq.\",\"video\":false,\"show\":true,\"month\":\"Apr\",\"year\":\"2016\",\"from\":\"http://www.Gskgitbahcdeerb.com/assets/study\",\"topics\":[\"product\",\"accounting\",\"inventory\",\"cashflow\",\"partner\"],\"region\":[\"uk\",\"au\",\"rw\",\"nz\"],\"users\":[\"accountant\",\"smallbusiness\"],\"type\":[\"quantitative\"],\"devices\":[\"desktop\"]}},{\"_index\":\"researchhub\",\"_type\":\"nugget\",\"_id\":\"9\",\"_score\":1,\"_source\":{\"title\":\"Lsb cg pkok. (9)\",\"description\":\"Iyr wsmrps glozon fv nu gmfj ktxaof djzdx smtwco chmz lan ed sdqcm.\",\"video\":false,\"show\":true,\"month\":\"Jul\",\"year\":\"2017\",\"from\":\"http://www.Hugfrulfvoyugqr.com/assets/study\",\"topics\":[\"accounting\",\"product\"],\"region\":[\"rw\",\"us\",\"uk\",\"nz\"],\"users\":[\"smallbusiness\",\"nonxero\",\"accountant\"],\"type\":[\"generative\"],\"devices\":[\"tablet\",\"desktop\"]}}]"
