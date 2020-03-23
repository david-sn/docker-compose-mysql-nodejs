'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define('Customers', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Customers.associate = function (models) {
    // associations can be defined here
    models.Customers.hasMany(models.Cars)
    //many to many
    models.Customers.belongsToMany(models.Groups, {
      through: 'GroupCustomers',
      as: 'groups',
      foreignKey: 'customerId'
    });
  };
  return Customers;
};