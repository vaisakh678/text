// express.d.ts
import { Request } from "express";
import { IJwtPayload } from "../utils/interfaces/common";

declare module "express-serve-static-core" {
	interface Request {
		user?: IJwtPayload;
	}
}
