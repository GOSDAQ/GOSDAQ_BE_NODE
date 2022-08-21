import { Request, Response } from "express";
import { getExchangeData } from "yahoo-exchange";
import yahooFinance from "yahoo-finance2";
import { ISearchResult } from "../types/response";

import { getDay } from "../util/date";
import { getCommonResponse } from "../util/responseHandler";

export const getSearchTickerResult = async (ticker: string) => {
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
