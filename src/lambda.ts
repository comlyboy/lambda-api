import { APIGatewayProxyEventV2, Context } from "aws-lambda";

import { initApplication } from "./app";

export async function handler(event: APIGatewayProxyEventV2, context: Context) {
	context.callbackWaitsForEmptyEventLoop = false;
	return await initApplication().run(event, context);
}