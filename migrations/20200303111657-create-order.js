"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ticket_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "trains",
          key: "id"
        }
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
      },
      qty: {
        type: Sequelize.INTEGER
      },
      qtybaby: {
        type: Sequelize.INTEGER
      },
      adultprice: {
        type: Sequelize.STRING
      },
      babyprice: {
        type: Sequelize.STRING
      },
      totalprice: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM("Pending", "Approved", "Cancel")
      },
      attachment: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable("orders");
  }
};
