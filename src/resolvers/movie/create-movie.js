import fs from "fs";
export const createMovie = (req, res) => {
  const { firstname, lastname, username, password } = req.body;
  const rawUserData = fs.readFileSync("src/db/movie.json");
  const user = JSON.parse(rawUserData);
  user.push({ firstname, lastname, username, password });
  fs.writeFileSync("src/db/movie.json", JSON.stringify(user));
  res.send("hello world");
  console.log(user);
};
