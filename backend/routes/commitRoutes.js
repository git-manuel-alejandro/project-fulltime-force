import express from "express";
import { commitController } from "../controllers/commitController.js";
const router = express.Router();

router.get("/commits", commitController);

export default router;
