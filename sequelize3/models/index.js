const sequelize = require('../config/database');
const Student = require('./student');
const Course = require('./course');
const Enrollment = require('./enrollment');

// Define the Many-to-Many relationship
Student.belongsToMany(Course, { through: Enrollment, foreignKey: 'studentId', as: 'courses' });
Course.belongsToMany(Student, { through: Enrollment, foreignKey: 'courseId', as: 'students' });

module.exports = {
    sequelize,
    Student,
    Course,
    Enrollment
};
