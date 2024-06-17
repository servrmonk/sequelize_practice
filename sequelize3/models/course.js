const {DataTypes} = require('sequelize')
const sequelize = require('../config/database')

const Course = sequelize.define("Course",{
    id:{
        type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,
    },title:{
        type:DataTypes.STRING,allowNull:false
    },
},{
    tableName:'Courses' 
})
module.exports = Course;