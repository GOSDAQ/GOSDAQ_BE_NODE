import { Request, Response } from "express";
import { getExchangeData } from "yahoo-exchange";
import yahooFinance from "yahoo-finance2";
import { ISearchResult } from "../types/response";

import { getDay } from "../util/date";
import { getCommonResponse } from "../util/responseHandler";

export const getSearchTickerResult = async (ticker: string) => {
  const data: ISearchResult[] = [];
  let errMsg = "";

  try {
    const { shortName } = await yahooFinance.quote(ticker);
    data.push({ name: shortName as string });
  } catch (error) {
    errMsg = `${error}`;
  } finally {
    return { data, errMsg };
  }
};
