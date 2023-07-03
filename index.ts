import express, { Express, Request, Response } from "express";
import cors from "cors"
import bodyParser from "body-parser";
import stringsController from "./controllers/strings"
import product from "./controllers/products"
import productlist from "./controllers/productlist"

const app: Express = express();

app.use(cors({
  origin: ['http://localhost:3006']
}));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});


app.use('/', productlist)
app.use('/', product)
app.use('/', stringsController)
app.listen(3001,() => {
  console.log(`[server]: Server is running at http://localhost:3001`);
});