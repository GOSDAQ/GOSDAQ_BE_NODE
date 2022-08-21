import { Request, Response } from "express";
import { getExchangeData } from "yahoo-exchange";
import yahooFinance from "yahoo-finance2";
import { getSearchTickerResult } from "../services/stockService";

import { getDay } from "../util/date";
import { getCommonResponse } from "../util/responseHandler";

export const getPriceByTicker = async (req: Request, res: Response) => {
  const { ticker } = req.params;

  try {
    const { regularMarketPrice, regularMarketChangePercent } =
      await yahooFinance.quote(`${ticker}`);

    return res.send({
      price: regularMarketPrice,
      rate: regularMarketChangePercent?.toFixed(2),
    });
  } catch (error) {
    return res.send(null);
  }
};

export const getExchangeRate = async (req: Request, res: Response) => {
  try {
    const data = await getExchangeData("KRW");
    return res.send({ data: data[0][0] });
  } catch (error) {
    return res.send(null);
  }
};

export const getSingleHistory = async (req: Request, res: Response) => {
  const { ticker, period } = req.params;
  const queryOptions = {
    period1: getDay(-parseInt(period)),
    period2: getDay(0),
  };

  try {
    const data = await yahooFinance.historical(`${ticker}`, queryOptions);

    return res.send({ data, cnt: data.length });
  } catch (error) {
    return res.send(null);
  }
};

export const getSearchTicker = async (req: Request, res: Response) => {
  const { ticker } = req.params;

  try {
    const data = await getSearchTickerResult(ticker);

    const resData =
      data.isError ? getCommonResponse(500, "Search Ticker Failed... See Node Log") : getCommonResponse(200, "Search Ticker Success")

    return res.send({ ...resData, data });
  } catch (error) {
    console.log(error);
    const resData = getCommonResponse(
      500,
      "Search Ticker Failed... Controller - getSearchTicker Error"
    );
    return res.send(resData);
  }
};
