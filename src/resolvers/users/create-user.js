import fs from "fs";
export const createUser = (req, res) => {
  const { firstName, lastName, userName, password } = req.body;
  const rawUserData = fs.readFileSync("src/db/users.json");
  const user = JSON.parse(rawUserData);
  user.push({ firstName, lastName, userName, password });
  fs.writeFileSync("src/db/users.json", JSON.stringify(user));
  res.send("hello world");
};
