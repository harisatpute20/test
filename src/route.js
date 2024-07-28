import { Router } from "express";
import { userRouter } from "./users/users.route.js";

export const router = Router();

router.use('/users',userRouter)