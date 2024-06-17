import { Request, Response, Router } from "express";
import CartProduct from "../models/cartProduct";

const router: Router = Router();

router.post('/cartProduct', async (req: Request, res: Response) => {
  const cartProduct = new CartProduct(req.body);
  try {
    const savedCartProduct = await cartProduct.save();
    res.status(200).json(savedCartProduct);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// siia voib lisada CRUD'e

export default router;