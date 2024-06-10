import mongoose, { Schema } from "mongoose";

export interface IUser {
	userId: mongoose.Types.ObjectId;
	name: string;
	email: string;
	password: string;
	lastLogin: Date;
	refreshToken: string;
	isActive: boolean;
}

const userSchema = new Schema(
	{
		name: String,
		email: String,
		password: String,
		lastLogin: String,
		refreshToken: String,
		isActive: { type: Boolean, default: true },
	},
	{ timestamps: true }
);

export default mongoose.model<IUser>("user", userSchema);
