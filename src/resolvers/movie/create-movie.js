import axios from "axios";
import fs from "fs";
const url =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=81ea651f54754aefbed10e4e57266046";
const options = { method: "GET", headers: { accept: "application.json" } };

export const createMovie = async (req, res) => {
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      fs.writeFileSync(
        "src/db/movie.json",
        JSON.stringify(json.results.slice(0, 5))
      );
      res.send("success");
    })
    .catch((err) => console.log(err));
};
