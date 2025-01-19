import lambdaApi from 'lambda-api';
import { errorHandler } from './error';

import { authRoutes } from './core/auth/auth.route';
import { userRoutes } from './core/user/user.route';

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
	application.use(errorHandler);
	return application;
}