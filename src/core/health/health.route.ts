import { API, RegisterOptions } from "lambda-api";

import { getHealth } from "./health.service";

export function healthRoutes(api: API, opts: RegisterOptions): void {
	api.get('/',  getHealth);
}