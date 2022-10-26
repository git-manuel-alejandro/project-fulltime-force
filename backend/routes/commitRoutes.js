import express from "express";
const router = express.Router();

router.get("/commits", commitController);

export default router;
