import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
import homeRoute from "./route/home.js";



//*Import functions/routes
import connectDB from "./config/database.js";

app.use(cors());

dotenv.config();

// Database function call
connectDB();

//* Set Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//* ROUTES
app.use("/", homeRoute);


//* Start server
app.listen(PORT, () => console.log(`Server running on port ${process.env.PORT}`));