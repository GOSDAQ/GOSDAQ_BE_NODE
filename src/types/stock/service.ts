export interface ISearchResult {
  isError: boolean;
  name: string;
  ticker: string;
}

export interface IPriceAndRate {
  isError: boolean;
  price: number;
  rate: string;
}