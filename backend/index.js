import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import commitRouter from "./routes/commitRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

app.use(cors());

// routes
app.use("/api", commitRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server on port  ${PORT}`);
});
