import { z } from "zod";

export const registerSchema = z
	.object({
		name: z.string(),
		email: z.string(),
		password: z.string(),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Conform password dosent match",
		path: ["confirmPassword"],
	});

export const loginSchema = z.object({
	email: z.string(),
	password: z.string(),
});
