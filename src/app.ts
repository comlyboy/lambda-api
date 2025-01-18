import lambdaApi, { NextFunction, Request, Response } from 'lambda-api';

export function initApplication() {
	const application = lambdaApi({ base: 'api' });
	// application.use((req: Request, res: Response, next: NextFunction) => {
	// 	res.cors({});
	// 	next();
	// });

	application.options((req: Request, res: Response, next: NextFunction) => {
		res.status(200).json({});
	});
	return application;
}