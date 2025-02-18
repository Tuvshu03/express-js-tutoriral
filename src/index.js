import express from "express";
import { userRouter } from "./routes/users-router.js";
const app = express();
const port = 3000;

app.use(express.json());

export const users = [{
  name: "Tuvshuu",
  password: "Tuvshuu123"
}];
app.use("/", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
