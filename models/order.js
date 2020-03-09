"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      ticket_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      qtybaby: DataTypes.INTEGER,
      adultprice: DataTypes.STRING,
      babyprice: DataTypes.STRING,
      totalprice: DataTypes.INTEGER,
      status: DataTypes.ENUM("Pending", "Approved", "Cancel"),
      attachment: DataTypes.STRING
    },
    {}
  );
  order.associate = function(models) {
    order.belongsTo(models.train, {
      foreignKey: "ticket_id"
    });
    order.belongsTo(models.user, {
      foreignKey: "user_id"
    });
  };
  return order;
};
