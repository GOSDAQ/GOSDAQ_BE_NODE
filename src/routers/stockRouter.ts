import express from "express";
import {
  getSearchTicker,
  getInterestStockInfo,
  getMyStockInfo,
} from "../controllers/stockController";

const stockRouter = express.Router();

stockRouter.get("/interest", getInterestStockInfo);
stockRouter.get("/have/:ticker", getMyStockInfo);
stockRouter.get("/search/:ticker", getSearchTicker);

export default stockRouter;
