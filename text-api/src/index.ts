import express, { NextFunction, Request, Response } from "express";
import config from "config";
import cors from "cors";
import routeIndex from "./routes/indexRoutes.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017");

app.use(routeIndex);

app.get("/", (_: express.Request, res: express.Response) => {
	console.log(process.env);
	console.log(config.get("PORT"));
	res.send("hello");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	// console.error("server error!.", err);
	return res.status(500).json({ message: "Internal server error!" });
});

app.listen(config.get("PORT"), () => {
	console.log("server is up🚀");
});
