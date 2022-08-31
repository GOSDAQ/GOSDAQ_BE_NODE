import { Request, Response } from "express";

import { getExchangeRateService } from "../services/commonService";
import { getCommonResponse } from "../util/responseHandler";

export const getExchangeRate = async (req: Request, res: Response) => {
  try {
    const data = await getExchangeRateService();

    const resData =
      data.isError ? getCommonResponse(500, "Get Exchage Rate Failed... See Node Log") :
        getCommonResponse(200, "Get Exchage Rate Success");

    return res.send({ ...resData, data });
  } catch (error) {
    console.log(error);
    const resData = getCommonResponse(
      500,
      "Get Exchage Rate Failed... Controller - getExchangeRate Error"
    );
    return res.send(resData);
  }
};