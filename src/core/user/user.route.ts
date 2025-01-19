import { API, RegisterOptions } from "lambda-api";

import { getProfile } from "./user.service";

export function userRoutes(api: API, opts: RegisterOptions): void {
	api.get('profile', getProfile);
}