'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SportUser extends Model {
    static associate(models) {
    }
  }
  SportUser.init({
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    sportId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'sports',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'SportUser',
    tableName: 'sportusers'
  });
  return SportUser;
};