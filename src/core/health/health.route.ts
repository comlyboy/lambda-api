import { API, RegisterOptions } from "lambda-api";
import { getHealth } from "./health.service";
import { validateLoginDto } from "../auth/auth.validator";


export function healthRoutes(api: API, opts: RegisterOptions): void {
	api.get('', validateLoginDto, getHealth);
}