import { users } from "../../index.js";
export const deleteUsers = (req, res) => {
    users.pop();
    res.send("DELETE Request Called");
  }