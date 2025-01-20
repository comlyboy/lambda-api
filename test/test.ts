import { APIGatewayProxyEventV2 } from "aws-lambda";
import { bootstrap } from "../src/main";

const mockAPIGatewayProxyEventV2: APIGatewayProxyEventV2 = {
	version: '2.0',
	routeKey: 'GET /api/health',
	rawPath: '/api/health',
	rawQueryString: 'category=electronics&sort=price',
	headers: {
		'accept': 'application/json',
		'content-type': 'application/json',
		'host': 'example.com',
		'user-agent': 'Mozilla/5.0',
		'x-forwarded-for': '192.168.1.1',
		'x-forwarded-proto': 'https',
	},
	queryStringParameters: {
		category: 'electronics',
		sort: 'price',
	},
	requestContext: {
		accountId: '123456789012',
		apiId: 'abc123',
		domainName: 'example.com',
		domainPrefix: 'api',
		http: {
			method: 'GET',
			path: '/api/health',
			protocol: 'HTTP/1.1',
			sourceIp: '192.168.1.1',
			userAgent: 'Mozilla/5.0',
		},
		requestId: 'abcd-1234-efgh-5678',
		routeKey: 'GET /api/health',
		stage: 'prod',
		time: '18/Jan/2025:12:34:56 +0000',
		timeEpoch: 1674050096000,
	},
	// body: undefined,
	isBase64Encoded: false,
	// pathParameters: undefined,
	// stageVariables: undefined,
	// cookies: ['sessionId=abc123', 'userId=123'],
};

const mockContext: any = {
	callbackWaitsForEmptyEventLoop: true,
	functionName: 'my-function',
	functionVersion: '$LATEST',
	invokedFunctionArn: 'arn:aws:lambda:us-east-1:123456789012:function:my-function',
	memoryLimitInMB: '128',
	awsRequestId: 'abcd-1234-efgh-5678',
	logGroupName: '/aws/lambda/my-function',
	logStreamName: '2025/01/18/[$LATEST]abcdef1234567890',
	identity: undefined,
	clientContext: undefined,
	getRemainingTimeInMillis: () => 5000,
};

 bootstrap(mockAPIGatewayProxyEventV2, mockContext).then(response => {
	console.log('response', response);
});
