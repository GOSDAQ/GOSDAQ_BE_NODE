import { getExchangeData } from "yahoo-exchange";
import { IExchangeRate } from "../types/common/service";

export const getExchangeRateService = async () => {
  let result: IExchangeRate = { exchange: [], isError: false };

  try {
    const data = await getExchangeData("KRW");
    result.exchange = data[0][0];
  } catch (error) {
    console.log(error);
    result.isError = true
  } finally {
    return result;
  }
};
