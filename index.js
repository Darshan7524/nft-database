import express from "express";
import mongoose from "mongoose";
import { PORT,mongoDBURL } from "./config.js";
import nftRoute from "./routes/nftRoute.js";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
   return res.status(200).send('<h1>nft-database</h1>') 
});

app.use('/nft', nftRoute);

mongoose
 .connect(mongoDBURL)
 .then(() => {
  console.log('App connected to database');
  app.listen(PORT, () => {
    console.log(`App is listening to port : ${PORT}`);
});
 })
 .catch((error) => {
  console.log(error);
 });  