import { Router } from "express";
import authRoutes from "./authRoutes.js";

const routeIndex = Router();

routeIndex.use(authRoutes);

export default routeIndex;
