import fs from "fs";

export const getUsers = (req, res) => {
  const user = fs.readFileSync("src/db/users.json")

  console.log("sad",JSON.parse(user))
  res.send(JSON.parse(user));
}


