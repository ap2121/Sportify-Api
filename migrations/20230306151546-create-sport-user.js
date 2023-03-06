'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sportusers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        onUpdate: 'CASCADE',
        refernces: {
          model: 'users',
          key: 'id'
        }
        
      },
      sportId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        onUpdate: 'CASCADE',
        refernces: {
          model: 'sports',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sportusers');
  }
};