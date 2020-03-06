"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      username:DataTypes.STRING,
      name: DataTypes.STRING,
      roles: DataTypes.ENUM("admin", "user"),
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.ENUM("male", "female"),
      phone: DataTypes.STRING,
      address: DataTypes.STRING
    },
    {}
  );
  user.associate = function(models) {
    user.belongsToMany(models.train, {
      through: models.order,
      foreignKey: "user_id"
    });
  };
  return user;
};
