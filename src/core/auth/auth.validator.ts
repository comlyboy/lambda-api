import { z as zod } from "zod";
import { Middleware } from "lambda-api";

import { apiResult } from "@incloodsolutions/toolkit";

export const validateLoginDto: Middleware = async (req, res, next) => {
	const validationSchema = zod.object({
		username: zod.string().min(2).trim().toLowerCase(),
		password: zod.string().min(2),
	}).required();

	const { error, data, success } = validationSchema.safeParse(req.body);

	if (!success) {
		const message = error.errors.map(err => `type: ${err.code}, message: ${err.message}`)//.toString();

		res.status(400).json(apiResult({
			message: error.message,
			error: {
				statusCode: 400,
				path: req.path,
				method: req.method,
				message
			}
		}));
	}
	req.body = data;

	// res.status(statusCode).json(apiResult({
	// 	message: error.message,
	// 	error: {
	// 		statusCode,
	// 		path: req.path,
	// 		method: req.method,
	// 		message: error.message
	// 	}
	// }));
	next();
};