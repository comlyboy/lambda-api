import { APIGatewayProxyEvent, APIGatewayProxyEventV2, Context, S3Event, SNSEvent, SQSEvent } from "aws-lambda";

import { initApplication } from "./app";

export async function bootstrap<TEvent extends APIGatewayProxyEvent | APIGatewayProxyEventV2 | SNSEvent | SQSEvent | S3Event = APIGatewayProxyEventV2>(event: TEvent, context: Context) {
	context.callbackWaitsForEmptyEventLoop = false;
	return await initApplication().run(event as any, context);
}
