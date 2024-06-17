const sequelize = require('../config/database')
const User = require('./user')
const Profile = require('./profile')

User.hasOne(Profile,{
    // foreignKey:'userId',
    as:'profile'
})

Profile.belongsTo(User,{
    foreignKey:'userId',
    // as:'user' //this as for access the data
})
module.exports = {
    sequelize,User,Profile
}
// foreignKey
// The foreignKey option specifies the name of the column that will act as the foreign key in the target model. A foreign key is a column that creates a relationship between two tables by referencing the primary key of another table.
// User.hasOne(Profile, { foreignKey: 'userId' }): This tells Sequelize that the Profile model should have a foreign key column named userId that references the primary key of the User model.
// Profile.belongsTo(User, { foreignKey: 'userId' }): This tells Sequelize that the Profile model belongs to the User model and uses the userId column to establish this relationship.