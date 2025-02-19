import fs from 'fs'
export const deleteUsers = (req, res) => {
  const {username, firstname } = req.body;
  const rawDataUsers = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawDataUsers);

  const filteredDataUsers = users.filter((cur) => cur.username!==username);
  fs.writeFileSync("src/db/users.json", JSON.stringify(filteredDataUsers));
  
  }