import fs from "fs";
export const putUsers = (req, res) => {
  const { username, firstname } = req.body;
  const rawDataUsers = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawDataUsers);

  const newDataUsers = users.map((cur) => {
    if (cur.username === username) return { ...cur, firstname};
    return cur;
  });
  fs.writeFileSync("src/db/users.json", JSON.stringify(newDataUsers));
};
