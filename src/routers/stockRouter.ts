import express from "express";
import { getMyStock } from "../controllers/stockController";

const stockRouter = express.Router();

stockRouter.get("/my", getMyStock);

export default stockRouter;
