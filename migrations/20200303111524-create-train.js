"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("trains", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameTrain: {
        type: Sequelize.STRING
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "types",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      dateStart: {
        type: Sequelize.STRING
      },
      stationStart: {
        type: Sequelize.STRING
      },
      timeStart: {
        type: Sequelize.STRING
      },
      destinationStation: {
        type: Sequelize.STRING
      },
      timeArrival: {
        type: Sequelize.STRING
      },
      station1: {
        type: Sequelize.STRING
      },
      station2: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("trains");
  }
};
