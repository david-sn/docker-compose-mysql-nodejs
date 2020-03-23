export default (sequelize, DataTypes) => {
    const Groups = sequelize.define('Groups', {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      desc: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'no description'
      },
      admin: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true
        }
      }
    });
    Groups.associate = (models) => {
      Groups.belongsToMany(models.Customers, {
        through: 'GroupCustomers',
        as: 'Customers',
        foreignKey: 'groupId'
      });
    };
    return Groups;
  };