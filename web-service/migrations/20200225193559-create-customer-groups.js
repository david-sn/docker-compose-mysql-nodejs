'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GroupCustomers', {
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Customers',
          key: 'id'
        }
      },
      groupId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Groups',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GroupCustomers');
  }
};
