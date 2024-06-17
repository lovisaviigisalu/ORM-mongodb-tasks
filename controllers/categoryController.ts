import { Request, Response, Router } from "express";
import Category from "../models/category";

const router: Router = Router();

router.post('/category', async (req: Request, res: Response) => {
  const category = new Category(req.body);
  try {
    const savedCategory = await category.save();
    res.status(200).json(savedCategory);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// siia voib lisada CRUD'e
export default router;