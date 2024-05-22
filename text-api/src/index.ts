import express from "express";
import config from "config";

const app = express();

app.get("/", (_, res) => {
	console.log(process.env);
	console.log(config.get("PORT"));
	res.send("hello");
});

app.listen(config.get("PORT"), () => {
	console.log("server is up🚀");
});
