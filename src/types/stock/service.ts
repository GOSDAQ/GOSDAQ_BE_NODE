import { HistoricalRow } from "yahoo-finance2/dist/esm/src/modules/historical";

export interface IInterestStockInfo {
  isError: boolean;
  ticker: string;
  price: number;
  rate: number;
  history: HistoricalRow[];
  cnt: number;
}

export interface IMyStockInfo {
  isError: boolean;
  price: number;
  rate: number;
}

export interface ISearchResult {
  isError: boolean;
  name: string;
  ticker: string;
}
