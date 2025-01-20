import lambdaApi from 'lambda-api';

import { errorHandler } from './error';
import { authRoutes, userRoutes } from './core';
import { healthRoutes } from './core/health';

export function initApplication() {
	const application = lambdaApi({ base: 'api' });
	// application.use((req: Request, res: Response, next: NextFunction) => {
	// 	res.cors({});
	// 	next();
	// });

	// application.options((req: Request, res: Response) => {
	// 	res.status(200).json({});
	// });

	application.register(authRoutes, { prefix: 'auth' });
	application.register(userRoutes, { prefix: 'user' });
	application.register(healthRoutes, { prefix: 'health' });
	application.use(errorHandler);
	return application;
}