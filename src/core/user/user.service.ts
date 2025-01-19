import { apiResult } from "@incloodsolutions/toolkit";
import { Request, Response } from "lambda-api";

export async function getProfile(req: Request, res: Response) {
	return apiResult({
		data: {
			user: {
				firstName: 'Cornelius',
				surName: 'Okeke',
				phoneNumber: '+2347066779863',
			}
		}
	});
}
export async function updateProfile(req: Request, res: Response) { }