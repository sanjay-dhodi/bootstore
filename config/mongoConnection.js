import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => console.log(err.toString()));
