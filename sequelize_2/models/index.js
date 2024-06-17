const sequelize = require('../config/database')
const Category = require('./category');
const Product = require('./product')

// defining the one to many relationship

Category.hasMany(Product,{
    foreignKey:'categoryId',as:'products'
})
Product.belongsTo(Category,{
    foreignKey:'categoryId',as:'category'
})
module.exports = {
    sequelize,Category,Product
}