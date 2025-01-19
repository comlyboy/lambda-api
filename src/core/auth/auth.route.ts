import { API, RegisterOptions } from "lambda-api";

import { registerUser } from "./auth.service";

export function authRoutes(api: API, opts: RegisterOptions): void {
	api.post('/', registerUser);
}