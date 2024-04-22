import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import bookRoute from "./route/book.route.js";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;
const DB_URL = process.env.MONGO_URI;

// Connect to mongoDB
try {
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (err) {
  console.log(err);
}

// defining routes
app.use("/book", bookRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});