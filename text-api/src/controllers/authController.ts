import { Request, Response } from "express";
import { loginSchema, registerSchema } from "../validations/authValidations.js";
import { ZodError } from "zod";
import User, { IUser } from "../models/User.js";
import sha256 from "../utils/sha256.js";
import jwt from "jsonwebtoken";
import config from "config";
import { IJwtPayload } from "../utils/interfaces/common.js";

export const register = async (req: Request, res: Response) => {
	try {
		const body = registerSchema.parse(req.body);
		const isExist = await User.exists({ email: body.email }).lean<IUser>();
		if (isExist) {
			return res.status(409).json({ message: "User already exist!." });
		}
		const user = await User.create({
			name: body.name,
			email: body.email,
			password: sha256(body.password),
		});
		if (user) return res.status(201).json({ message: "User successfully created!." });
		return res.status(400).json({ message: "Failed to create user." });
	} catch (error) {
		if (error instanceof ZodError) {
			console.log(error.errors);
			return res.status(400).json({ error: error.errors });
		}
		throw error;
	}
};

export const login = async (req: Request, res: Response) => {
	try {
		const body = loginSchema.parse(req.body);
		const user = await User.findOne({ email: body.email, password: sha256(body.password) });
		if (!user) {
			return res.status(401).json({ message: "Incorrect password!." });
		}
		const payload = {
			name: user.name,
			email: user.email,
			userId: user._id,
		};
		const accessToken = jwt.sign(payload, config.get("secreteKeys.accessToken"));
		const refreshToken = jwt.sign(payload, config.get("secreteKeys.refreshToken"));
		user.refreshToken = refreshToken;
		user.lastLogin = new Date();
		await user.save();
		res.cookie("refreshToken", refreshToken, { path: "auth/refresh" });
		res.status(200).json({
			accessToken,
		});
	} catch (error) {
		if (error instanceof ZodError) {
			console.log(error.errors);
			return res.status(400).json({ error: error.errors });
		}
		throw error;
	}
};

export const refresh = async (req: Request, res: Response) => {
	try {
		const refreshToken = req?.cookies?.refreshToken.split(" ").pop();
		if (!refreshToken) {
			return res.status(403).json({ error: "Refresh token not found!." });
		}
		const decode = jwt.verify(refreshToken, config.get("secreteKeys.refreshToken")) as IJwtPayload;
		if (!decode) {
			return res.status(403).json({ error: "Couldn't refresh the token!." });
		}
		const user = await User.findOne({ email: decode.email, refreshToken: refreshToken });
		if (user) {
			const payload = {
				name: user.name,
				email: user.email,
				userId: user._id,
			};
			const accessToken = jwt.sign(payload, config.get("secreteKeys.accessToken"));
			// const refreshToken = jwt.sign(payload, config.get("secreteKeys.refreshToken"));
			return res.status(200).json({
				accessToken,
			});
		}
		return res.status(403).json({ error: "Couldn't refresh the token!." });
	} catch (error) {
		return res.status(400).json({ error: "Couldn't refresh the token!." });
	}
};

export const logout = (_: Request, res: Response) => {
	return res.status(204);
};
