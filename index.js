import express from "express";
import mongoose from "mongoose";
import { PORT,mongoDBURL } from "./config.js";

const app = express();

app.get('/', (req, res) => {
   return res.status(200).send('<h1>nft-database</h1>') 
});


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