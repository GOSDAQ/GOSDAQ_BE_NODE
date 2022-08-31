import yahooFinance from "yahoo-finance2";
import { IInterestStockInfo, IMyStockInfo, ISearchResult } from "../types/stock/service";

import { getDay } from "../util/date";

export const getInterestStockInfoService = async (ticker: string, period: string) => {
  let result: IInterestStockInfo = { ticker, price: 0, rate: 0, history: [], cnt: 0, isError: false };

  const queryOptions = {
    period1: getDay(-parseInt(period)),
    period2: getDay(0),
  };

  try {
    const { regularMarketPrice, regularMarketChangePercent } =
      await yahooFinance.quote(`${ticker}`);

    result.price = (regularMarketPrice as number);
    result.rate = parseFloat((regularMarketChangePercent as number).toFixed(2));

    const historyData = await yahooFinance.historical(`${ticker}`, queryOptions);

    result.history = historyData;
    result.cnt = historyData.length;
  } catch (error) {
    console.log(error);
    result.isError = true
  } finally {
    return result;
  }
}

export const getMyStockInfoService = async (ticker: string) => {
  let result: IMyStockInfo = { price: 0.0, rate: 0.0, isError: false };

  try {
    const { regularMarketPrice, regularMarketChangePercent } =
      await yahooFinance.quote(`${ticker}`);

    result.price = (regularMarketPrice as number);
    result.rate = parseFloat((regularMarketChangePercent as number).toFixed(2));
  } catch (error) {
    console.log(error);
    result.isError = true
  } finally {
    return result;
  }
}

export const getSearchTickerService = async (ticker: string) => {
  let result: ISearchResult = { name: "", ticker: "", isError: false };

  try {
    const { shortName } = await yahooFinance.quote(ticker);
    result.name = (shortName as string);
    result.ticker = ticker.toUpperCase();
  } catch (error) {
    console.log(error);
    result.isError = true
  } finally {
    return result;
  }
};
