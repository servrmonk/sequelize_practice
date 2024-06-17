const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("seq1", "root", "sqllegasypassword24", {
  host: "localhost",
  dialect: "mysql",
});
const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
  },
});
// sequelize.sync() don't use directly
sequelize
  .sync()
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((error) => {
    console.error("Error creating database & tables:", error);
  });

module.exports = { sequelize, User };
