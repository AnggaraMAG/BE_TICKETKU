"use strict";
module.exports = (sequelize, DataTypes) => {
  const train = sequelize.define(
    "train",
    {
      nameTrain: DataTypes.STRING,
      type_id: DataTypes.INTEGER,
      dateStart: DataTypes.STRING,
      stationStart: DataTypes.STRING,
      timeStart: DataTypes.STRING,
      destinationStation: DataTypes.STRING,
      timeArrival: DataTypes.STRING,
      price: DataTypes.INTEGER,
      qty: DataTypes.INTEGER
    },
    {}
  );
  train.associate = function(models) {
    train.belongsTo(models.type, {
      foreignKey: "type_id"
    });
  };
  return train;
};
