import fs from "fs";

export const getUsers = (req, res) => {
  const user = fs.readFileSync("src/db/users.json");
  res.send(JSON.parse(user));
}


