import { Request, Response, Router } from "express";
import User from "../models/user";

const router: Router = Router();

router.post('/user', async (req: Request, res: Response) => {
  const user = new User(req.body);
  try {
    const savedUser = await user.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// siia voib lisada CRUD'e
export default router;