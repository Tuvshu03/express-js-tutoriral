import fs from "fs";

export const loginUsers = (req, res) => {
  const myFile = fs.readFileSync('src/db/users.json');
  const myLogin =JSON.parse(myFile)
  
    if (
      req.body.userName ===myLogin[0].userName &&
      req.body.password === myLogin[0].password
    ) {
      res.send("login is successful");
    } else if (req.body.userName !== myLogin[0].userName) {
      res.send("wrong user name");
    } else {
      res.send("wrong password");
    }
  }
  


