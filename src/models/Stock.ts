import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  code: String,
  name: String,
  amount: Number,
  avg: Number,
  user: String,
  input_krw: Number,
});

const Stock = mongoose.model("Stock", stockSchema);

export default Stock;
