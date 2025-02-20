import fs from "fs";
export const uptadeMovie = (req, res) => {
  const { id} = req.body;
  const rawDataMovie = fs.readFileSync("src/db/movie.json");
  const movie = JSON.parse(rawDataMovie);

  const changeMovieAverage = movie.map((cur) => {
    if (cur.id === id) {
       const vote_average = Math.round(cur.vote_average);
        return {...cur, vote_average}
    }
    return cur

  });
  fs.writeFileSync("src/db/movie.json", JSON.stringify(changeMovieAverage));
  res.json({ message: "Success!" })
};
