// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const connectDB = require("./db/db");
// const errorHandler = require("./middlewares/errorhandler");
// const userRoutes = require("./routes/userRoutes");

// const app = express();
// const port = process.env.PORT || 8000;

// app.use(cors());
// app.use(express.json());

// //connect to the database
// connectDB();

// //routes
// app.use("/api/users", userRoutes);

// app.use("/api/products", (req, res) => {
//   return res.status(200).json({
//     message: "This is new feature change, a new route for products samin",
//   });
// });

// //error handler
// app.use(errorHandler);

// //listen to the server
// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorhandler.js";

dotenv.config();

// Initialize Express App
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});

