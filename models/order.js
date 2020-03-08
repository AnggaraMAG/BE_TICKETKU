"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      ticket_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      totalprice: DataTypes.INTEGER,
      status: DataTypes.STRING,
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
