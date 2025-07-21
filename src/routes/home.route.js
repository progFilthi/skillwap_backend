import { Router } from "express";
import homeController from "../controllers/home.controller.js";

const router = Router();

//simple home page route
router.get("/", homeController);

export default router;
