import express from "express";
import { getExchangeRate, getPriceByTicker, getSingleHistory } from "../controllers/stockController";

const stockRouter = express.Router();

stockRouter.get("/interest/:ticker", getPriceByTicker);
stockRouter.get("/exchange", getExchangeRate);
stockRouter.get("/history/:ticker/:period", getSingleHistory);

export default stockRouter;
