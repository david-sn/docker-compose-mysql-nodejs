'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define('Cars', {
    brandName: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 5],
          msg: "min is 3 char"
        },
        startwithUpper: function (bodyVal) {
          //immplement custom validate for upper case 
          console.log('startwithUpper Function ', bodyVal);
          // 
          // throw new Error('Custom Error');
        }
      }
    },
    yearMade: DataTypes.INTEGER,
    cost: {
      type: DataTypes.DECIMAL,
      defaultValue: 0.0,
      unique: false,
      allowNull: false,
      validate: {
        len: {
          args: [3, 5],
          msg: "min is 3 char"
        }
      }
    }
  }, {
    // timestamps: false,
    freezTableName: false,//sequlize plorilse table name by adding s at end of model name
    hooks: {
      beforeValidate: function () { console.log('beforeValidate'); },
      afterValidate: function () { console.log('afterValidate');/* can here bcrypt password for user*/ },
      beforeCreate: function (data) { console.log('beforeCreate------- ',data); },
      afterCreate: function (data) { console.log('afterCreate**** '); }
    }
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
