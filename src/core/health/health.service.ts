import { apiResult } from "@incloodsolutions/toolkit";
import { Request, Response } from "lambda-api";

export async function getHealth(req: Request, res: Response) {
	return apiResult({
		message: 'Lambda API working OKAY!!!',
		data: {
			environment: 'development',
			timestamp: new Date().toISOString()
		}
	});
}