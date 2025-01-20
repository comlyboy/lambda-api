import { API } from "lambda-api";
import { APIGatewayProxyEventV2, Context } from "aws-lambda";

import { initApplication } from "./app";

let app: API = null;
export async function handler(event: APIGatewayProxyEventV2, context: Context) {
	context.callbackWaitsForEmptyEventLoop = false;
	if (!app) {
		app = initApplication();
	}
	await app.run(event, context);
}