import { Request, Response } from "express";
import { getExchangeData } from "yahoo-exchange";
import yahooFinance from "yahoo-finance2";
import { IPriceAndRate, ISearchResult } from "../types/stock/service";

import { getDay } from "../util/date";
import { getCommonResponse } from "../util/responseHandler";

export const getPriceAndRateService = async (ticker: string) => {
  let data: IPriceAndRate = { price: 0, rate: "", isError: false };

  try {
    const { regularMarketPrice, regularMarketChangePercent } =
      await yahooFinance.quote(`${ticker}`);

    data.price = (regularMarketPrice as number);
    data.rate = regularMarketChangePercent?.toFixed(2) + "%";
  } catch (error) {
    console.log(error);
    data.isError = true
  } finally {
    return data;
  }

}

export const getSearchTickerService = async (ticker: string) => {
  let data: ISearchResult = { name: "", ticker: "", isError: false };

  try {
    const { shortName } = await yahooFinance.quote(ticker);
    data.name = (shortName as string);
    data.ticker = ticker.toUpperCase();
  } catch (error) {
    console.log(error);
    data.isError = true
  } finally {
    return data;
  }
};
