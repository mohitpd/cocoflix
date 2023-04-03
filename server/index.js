import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", routes);

const port = process.env.PORT || 3001;

const server = http.createServer(app);

mongoose.connect(process.env.MONGODBURL).then(() => {
  console.log("MONGODB COnnected");
  server
    .listen(port, () => {
      console.log(`Server is listening to port ${port}`);
    })
    
}).catch((err) => {
  console.log({ err });
  process.exit();
});
