import express from "express";
import { userRouter } from "./routes/users-router.js";
import { movieRouter } from "./routes/movie-router.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", userRouter);
app.use("/movie", movieRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
