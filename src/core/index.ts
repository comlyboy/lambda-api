import { API, RegisterOptions } from "lambda-api";

import { registerUser } from "./auth/auth.service";

export function registerRoutes(api: API, opts: RegisterOptions): void {
	api.get('', registerUser);
}