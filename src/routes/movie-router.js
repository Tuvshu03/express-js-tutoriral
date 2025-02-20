import express from "express";
import {createMovie} from "../resolvers/movie/create-movie.js";
import { uptadeMovie } from "../resolvers/movie/uptade-movie.js";
import { deleteMovie } from "../resolvers/movie/delete-movie.js";

export const movieRouter = express.Router();

movieRouter.get("/", createMovie);
movieRouter.put("/", uptadeMovie);
movieRouter.delete("/", deleteMovie);

