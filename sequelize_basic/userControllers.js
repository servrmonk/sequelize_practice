const { User } = require("./userModel");

// creating a new User
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log("user created => ",user);
    res.status(201).json(user);
  } catch (err) {
    console.log("Error in create user ", err);
    res.status(500).json({ error: err.message });
  }
};

// getting all users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    console.log("user in getUsers ",users);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//get a single user by id
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    console.log("User in gid ",user);
    user
      ? res.status(200).json(user)
      : res.status(404).json({ message: "User not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//update the user
const updateUser = async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id },
    });
    console.log("Value of the updated ",updated);
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      res.status(200).json(updateUser);
    } else {
      res.status(404).json({ message: "User not found " });
    }
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id },
    });
    console.log("Deleted user ",deleted);
    if (deleted) {
      res.status(204).json({ message: "user Deleted" });
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "error message" });
  }
};

module.exports = {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
};

