import fs from 'fs'
export const deleteMovie = (req, res) => {

  const {id} = req.body;
  const rawDataMovie = fs.readFileSync("src/db/movie.json");
  const movie = JSON.parse(rawDataMovie);

  const filteredDataMovie = movie.filter((cur) => cur.id!==id);
  fs.writeFileSync("src/db/movie.json", JSON.stringify(filteredDataMovie));
  res.json({message:"success"})
  }