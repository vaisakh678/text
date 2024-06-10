import { Router } from "express";
import { login, logout, refresh, register } from "../controllers/authController.js";

const authRoutes = Router();

authRoutes.post("/auth/register", register);
authRoutes.post("/auth/login", login);
authRoutes.get("/auth/refresh", refresh);
authRoutes.get("/auth/logout", logout);

export default authRoutes;
