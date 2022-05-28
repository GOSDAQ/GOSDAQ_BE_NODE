import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  stock: [
    {
      ticker: String,
      name: String,
      avg: Number,
      amount: Number,
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
