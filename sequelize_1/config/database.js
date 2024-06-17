const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('sequelize_practice','root','sqllegasypassword24',{
    host:'localhost',dialect:'mysql'
});
module.exports = sequelize;