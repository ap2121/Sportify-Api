'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sport extends Model {
    static associate(models) {
      Sport.hasMany(models.Post, { foreignKey: 'sportId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
      Sport.belongsToMany(models.User, { through: models.SportUser, foreignKey: 'sportId', as: 'user_list', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
      
    }
  }
  Sport.init({
    leagueName: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Sport',
    tableName: 'sports'
  });
  return Sport;
};