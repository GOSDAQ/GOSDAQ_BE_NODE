import express from "express";
import morgan from "morgan";

import stockRouter from "./routers/stockRouter";
import commonRouter from "./routers/commonRouter";

const app = express();
const logger = morgan("dev");

app.use(logger);
app.use("/common", commonRouter);
app.use("/stocks", stockRouter);

export default app;
