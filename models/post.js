'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
      Post.belongsTo(models.Sport, { foreignKey: 'sportId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
      Post.hasMany(models.Comment, { foreignKey: 'postId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })

    }
  }
  Post.init({
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    sportId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'sports',
        key: 'id'
      }
    },
    image: DataTypes.STRING
  },
    {
      sequelize,
      modelName: 'Post',
      tableName: 'posts'
    });
  return Post;
};