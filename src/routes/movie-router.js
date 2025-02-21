import express from "express";
import { getMovie } from "../resolvers/movie/get-movie.js";
import { uptadeMovie } from "../resolvers/movie/uptade-movie.js";
import { deleteMovie } from "../resolvers/movie/delete-movie.js";
import { createMovie } from "../resolvers/movie/create-movie.js";

export const movieRouter = express.Router();

movieRouter.get("/", getMovie);
movieRouter.put("/", uptadeMovie);
movieRouter.delete("/", deleteMovie);
movieRouter.post("/", createMovie)
