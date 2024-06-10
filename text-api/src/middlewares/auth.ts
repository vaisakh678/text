import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "config";
import { IJwtPayload } from "../utils/interfaces/common";

const auth = (req: Request, res: Response, next: NextFunction) => {
	try {
		const token = (req.headers?.accessToken as string).split(" ").pop();
		const decode = jwt.verify(token as string, config.get("secreteKeys.accessToken")) as IJwtPayload;
		if (decode) {
			req.user = decode as IJwtPayload;
			next();
		}
		return res.status(401).json({ error: "Authorization failed!." });
	} catch (error) {
		return res.status(401).json({ error: "Authorization failed!." });
	}
};

export default auth;
