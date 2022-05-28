import express from "express";
import cors from "cors";
import morgan from "morgan";
import stockRouter from "./routers/stockRouter";

const app = express();
const logger = morgan("dev");
const corsOptions = {
  origin: "https://counting-stocks-front-end.vercel.app/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(logger);
app.use("/stocks", stockRouter);

export default app;
