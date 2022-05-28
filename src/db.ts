import mongoose from "mongoose";

const URL = process.env.NODE_VAL === "REAL" ? process.env.DB_URL_REAL : process.env.DB_URL_DEV;

mongoose.connect(URL as string);

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = (error: Error) => console.log("DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
