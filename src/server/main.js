import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import mongoDb from "./config/db.js";
import AuthRoutes from "./routes/authroutes.js";
const app = express();
dotenv.config();

//mongodb
mongoDb();

//authroutes
app.use("/auth", AuthRoutes);

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
