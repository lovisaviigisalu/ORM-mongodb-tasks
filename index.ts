import express, { Express, Request, Response } from "express";
import cors from "cors"
import bodyParser from "body-parser";
import stringsController from "./controllers/strings"
import product from "./controllers/products"
import productlist from "./controllers/productlist"
import articleController from "./controllers/articleController";
import commentController from "./controllers/commentController";
import authorController from "./controllers/authorController";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://lviigisalu:gF1bkW5XH2DKg2Hl@tsorm.m0lcexp.mongodb.net/");
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})



const app: Express = express();

app.use(cors({
  origin: ['http://localhost:3006']
}));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});




app.use('/', commentController);
app.use('/', productlist)
app.use('/', product)
app.use('/', stringsController)
app.use('/', articleController)
app.use('/', authorController)
app.listen(3001,() => {
  console.log(`[server]: Server is running at http://localhost:3001`);
});