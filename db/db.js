// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
// require("dotenv").config();

// const uri = process.env.MONGO_DB_URL;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(uri);
//     console.log("MongoDB connection established");
//   } catch (error) {
//     console.error("MongoDB connection failed", error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log(" MongoDB connection established");
  } catch (error) {
    console.error(" MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;

