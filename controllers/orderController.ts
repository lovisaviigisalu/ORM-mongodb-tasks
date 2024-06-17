import { Request, Response, Router } from "express";
import Order from "../models/order";

const router: Router = Router();

router.post('/order', async (req: Request, res: Response) => {
  const order = new Order(req.body);
  try {
    const savedOrder = await order.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// siia voib lisada CRUD'e

export default router;