const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const users = [
  {
    lastName: "",
    firstName: "",
  },
];
const user = {
  lastName: "Shine",
  firstName: "Tuvshin",
};

app.get("/api", (req, res) => {
  res.send(users);
});

app.post("/api", (req, res) => {
  console.log(req.body);
  res.send("dsada");
});

app.put("/api", (req, res) => {
  users[0] = user;
  res.send("success");
});
app.delete("/api", (req, res) => {
  users.pop();
  res.send("DELETE Request Called");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
