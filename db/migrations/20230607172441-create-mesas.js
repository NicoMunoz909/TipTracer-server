"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Mesas", {
      id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      total: {
        type: Sequelize.FLOAT,
      },
      propina: {
        type: Sequelize.FLOAT,
      },
      tipoPropina: {
        type: Sequelize.ENUM("Tarjeta", "Efectivo"),
      },
      fecha: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Mesas");
  },
};
