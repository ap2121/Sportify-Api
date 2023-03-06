'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sport.hasMany(models.Post, { foreignKey: 'sportId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
      Sport.belongsTo(models.User, {foreignKey: 'sportId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    }
  }
  Sport.init({
    leagueName: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    }
    
  }, {
    sequelize,
    modelName: 'Sport',
    tableName: 'sports'
  });
  return Sport;
};