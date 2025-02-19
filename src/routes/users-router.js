import express from "express";
import { putUsers } from "../resolvers/users/put-users.js";
import { getUsers } from "../resolvers/users/get-users.js";
import { deleteUsers } from "../resolvers/users/delete-users.js";
import { createUser } from "../resolvers/users/create-user.js";
import { loginUsers } from "../resolvers/users/login-user.js";
import {authorizationMiddleWare} from "../middle-wares/authorizationMiddleWare.js"

export const userRouter = express.Router();

userRouter.get("/", authorizationMiddleWare, getUsers);
userRouter.post("/", createUser);
userRouter.put("/", authorizationMiddleWare, putUsers);
userRouter.delete("/", authorizationMiddleWare, deleteUsers);
userRouter.get("/login", loginUsers)
