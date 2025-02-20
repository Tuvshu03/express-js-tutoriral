import fs from "fs";
export const createUser = (req, res) => {
  const { firstname, lastname, username, password } = req.body;
  const rawUserData = fs.readFileSync("src/db/users.json");
  const user = JSON.parse(rawUserData);
  user.push({ firstname, lastname, username, password });
  fs.writeFileSync("src/db/users.json", JSON.stringify(user));
  res.send("hello world");
  console.log(user)
};
