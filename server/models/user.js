'use strict'

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        }
    });

    // this association will put a forgien key of userId inside the Favorite Table
    User.associate = (models) => {
        models.User.belongsToMany(models.Book, {as : 'Reading', through: 'ReadingList'})
        models.User.hasOne(models.Favorite)
    }
    return User
;}