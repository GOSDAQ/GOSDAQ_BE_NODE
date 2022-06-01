import { Request, Response } from "express";
import { getExchangeData } from "yahoo-exchange";
import yahooFinance from "yahoo-finance2";

import { getDay } from "../util/date";

export const getPriceByTicker = async (req: Request, res: Response) => {
  const { ticker } = req.params;
  const { regularMarketPrice, regularMarketChangePercent } = await yahooFinance.quote(`${ticker}`);

  return res.send({
    data: {
      price: regularMarketPrice,
      rate: regularMarketChangePercent?.toFixed(2)
    }
  });
}

export const getExchangeRate = async (req: Request, res: Response) => {
  const data = await getExchangeData("KRW");

  return res.send({ data: data[0][0] });
};

export const getSingleHistory = async (req: Request, res: Response) => {
  const { ticker, period } = req.params;

  const queryOptions = { period1: getDay(parseInt(period)), period2: getDay(0) };
  const result = await yahooFinance.historical(`${ticker}`, queryOptions);

  return res.send({ data: { result, cnt: result.length } });
};