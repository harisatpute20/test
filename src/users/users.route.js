import { Router } from "express";
import { createUser, deleteUser, getUser, updateUser, userByName } from "./users.controler.js";


export const userRouter = Router();

userRouter.get('/',getUser);
userRouter.get('/:userName',userByName);
userRouter.post('/',createUser);
userRouter.put('/:userName',updateUser);
userRouter.delete('/:userName',deleteUser)