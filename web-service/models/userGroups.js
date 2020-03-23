export default (sequelize, DataTypes) => {
    const GroupCustomers = sequelize.define('GroupCustomers', {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Customers',
          key: 'id'
        }
      },
      groupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Groups',
          key: 'id'
        }
      }
    });
    return GroupCustomers;
  };