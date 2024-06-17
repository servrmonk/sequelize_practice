const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Enrollment = sequelize.define(
  "Enrollment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    studentId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Students",
        key: "id",
      },
      allowNull: false,
    },
    courseId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Courses",
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    tableName: "Enrollments", // Explicitly define table name
  }
);

module.exports = Enrollment;