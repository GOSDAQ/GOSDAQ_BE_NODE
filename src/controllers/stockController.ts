import { Request, Response } from "express";
import { getExchangeData } from "yahoo-exchange";

import { getInterestStockInfoService, getMyStockInfoService, getSearchTickerService } from "../services/stockService";
import { getCommonResponse } from "../util/responseHandler";

export const getInterestStockInfo = async (req: Request, res: Response) => {
  const { ticker, period } = req.query;

  try {
    const data = await getInterestStockInfoService(ticker as string, period as string);

    const resData =
      data.isError ? getCommonResponse(500, "Get Interest Stock Info Failed... See Node Log") :
        getCommonResponse(200, "Get Interest Stock Info Success");

    return res.send({ ...resData, data });
  } catch (error) {
    console.log(error);
    const resData = getCommonResponse(
      500,
      "Get Interest Stock Info Failed... Controller - getInterestStockInfo Error"
    );
    return res.send(resData);
  }
};

export const getMyStockInfo = async (req: Request, res: Response) => {
  const { ticker } = req.params;

  try {
    const data = await getMyStockInfoService(ticker as string);

    const resData =
      data.isError ? getCommonResponse(500, "Get Interest Stock Info Failed... See Node Log") :
        getCommonResponse(200, "Get Interest Stock Info Success");

    return res.send({ ...resData, data });
  } catch (error) {
    console.log(error);
    const resData = getCommonResponse(
      500,
      "Get Interest Stock Info Failed... Controller - getInterestStockInfo Error"
    );
    return res.send(resData);
  }
}

export const getSearchTicker = async (req: Request, res: Response) => {
  const { ticker } = req.params;

  try {
    const data = await getSearchTickerService(ticker);

    const resData =
      data.isError ? getCommonResponse(500, "Search Ticker Failed... See Node Log") :
        getCommonResponse(200, "Search Ticker Success");

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

export const getExchangeRate = async (req: Request, res: Response) => {
  try {
    const data = await getExchangeData("KRW");
    return res.send({ data: data[0][0] });
  } catch (error) {
    return res.send(null);
  }
};