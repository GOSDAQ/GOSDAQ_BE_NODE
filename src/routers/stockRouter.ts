import express from "express";
import {
  getExchangeRate,
  getPriceAndRate,
  getSingleHistory,
  getSearchTicker,
} from "../controllers/stockController";

const stockRouter = express.Router();

stockRouter.get("/interest/:ticker", getPriceAndRate);
stockRouter.route("/exchange").get(getExchangeRate).post(getExchangeRate);
stockRouter.get("/history/:ticker/:period", getSingleHistory);
stockRouter.get("/search/:ticker", getSearchTicker);

export default stockRouter;
