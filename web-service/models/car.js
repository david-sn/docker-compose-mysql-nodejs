'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define('Cars', {
    brandName: DataTypes.STRING,
    yearMade: DataTypes.INTEGER,
    cost: {
      type: DataTypes.DECIMAL,
      defaultValue: 0.0,
      unique: false,
      allowNull: false
    }
  }, {
    timestamps: false,
    freezTableName: false//sequlize plorilse table name by adding s at end of model name

  });
  Cars.associate = function (models) {
    // associations can be defined here
    models.Cars.belongsTo(models.Customers, {
      onDelete: "CASCADE",
      foreignKey: { allowNull: false }
    });
  };
  return Cars;
};
