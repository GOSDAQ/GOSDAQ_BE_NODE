import { Request, Response } from "express";
import User from "../models/User";

export const getMyStock = async (req: Request, res: Response) => {
  const { stock } = await User.findOne({ username: "gangslee" });
  res.header("Access-Control-Allow-Origin", "*");
  return res.send({ stock });
};
