import { Request, Response, Router } from "express";
import Product from "../models/product";

const router: Router = Router();

router.post('/product', async (req: Request, res: Response) => {
  const product = new Product(req.body);
  try {
    const savedProduct = await product.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// siia voib lisada CRUD'e

export default router;