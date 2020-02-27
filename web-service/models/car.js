'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define('Cars', {
    brandName: DataTypes.STRING,
    yearMade: DataTypes.INTEGER,
    cost: DataTypes.DECIMAL
  }, {});
  Cars.associate = function (models) {
    // associations can be defined here
    models.Cars.belongsTo(models.Customers, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
  };
  return Cars;
};
