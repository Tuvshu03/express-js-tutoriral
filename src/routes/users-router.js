import express from "express";
import { putUsers } from "../resolvers/users/put-users.js";
import { getUsers } from "../resolvers/users/get-users.js";
import { deleteUsers } from "../resolvers/users/delete-users.js";
import { createUser } from "../resolvers/users/create-user.js";
import { loginUsers } from "../resolvers/users/login-user.js";

export const userRouter = express.Router();

userRouter.get("/users", getUsers);
userRouter.post("/users", createUser);
userRouter.put("/users", putUsers);
userRouter.delete("/users", deleteUsers);
userRouter.get("/login", loginUsers)
