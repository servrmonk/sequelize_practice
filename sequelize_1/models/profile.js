const {DataTypes} = require('sequelize')

const sequelize = require('../config/database')

const Profile = sequelize.define('Profile',{
    bio:{
        type:DataTypes.TEXT,
        allowNull:true
    }
})
module.exports = Profile;