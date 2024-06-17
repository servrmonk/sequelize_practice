const express = require("express");
const {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
  getUserById,
} = require("./userControllers");
const app = express();
app.use(express.json());

app.post("/users", createUser);
app.get("/users", getUsers);
app.get("/users/:id", getUserById);
app.put("/users/:id", updateUser);
app.delete("/user/:id", deleteUser);

const PORT = process.env.port || 3000;
app.listen(PORT,()=>{console.log("Server is running at ", PORT)});
