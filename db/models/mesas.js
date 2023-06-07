"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mesas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mesas.init(
    {
      id: DataTypes.UUID,
      name: DataTypes.STRING,
      total: DataTypes.FLOAT,
      propina: DataTypes.FLOAT,
      tipoPropinas: DataTypes.ENUM("Tarjeta", "Efectivo"),
      fecha: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Mesas",
    }
  );
  return Mesas;
};
