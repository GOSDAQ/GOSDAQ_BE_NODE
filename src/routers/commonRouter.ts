import express from "express";
import { getExchangeRate } from "../controllers/commonController";

const commonRouter = express.Router();

commonRouter.route("/exchange").get(getExchangeRate).post(getExchangeRate);

export default commonRouter;
