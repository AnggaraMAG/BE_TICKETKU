"use strict";
module.exports = (sequelize, DataTypes) => {
  const type = sequelize.define(
    "type",
    {
      name: DataTypes.STRING
    },
    {}
  );
  type.associate = function(models) {
  };
  return type;
};
