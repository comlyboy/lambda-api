import { apiResult } from "@incloodsolutions/toolkit";
import { ErrorHandlingMiddleware } from "lambda-api"

export const errorHandler: ErrorHandlingMiddleware = (error, req, res, next) => {
	let statusCode = (error as any).status as number || 500;
	if (error.name === 'RouteError') {
		statusCode = 404;
	} else if (error.name === 'FileError') {
		// do something with FileError error
	} else if (error.name === 'MethodError') {
		// do something with MethodError error
	} else if (error.name === 'ConfigurationError') {
		// do something with ConfigurationError error
	} else {
		// } else if (error.name === 'ResponseError') {
		// do something with ResponseError error
		// do something with other error
	}
	res.status(statusCode).json(apiResult({
		message: error.message,
		error: {
			statusCode,
			message: error.message
		}
	}));
	next();
};