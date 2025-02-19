import { raw } from "express";
import fs, { readFileSync } from "fs";
import jwt from "jsonwebtoken";

export const loginUsers = (req, res) => {
  const {} = req.body;
  const rawDataUsers = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawDataUsers);

  const user = users.find((cur) => cur.username === username);

  if (!user) return res.json({ message: "Username or Password did not match" });
  if (user.password !== password)
    return res.json({ message: "Username or Password did not match" });
  var token = jwt.sign(user, "mash-nuuts");
  res.json({ token: token });
};
