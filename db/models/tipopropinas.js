"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TipoPropinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Mesas);
    }
  }
  TipoPropinas.init(
    {
      id: DataTypes.UUID,
      tipo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TipoPropinas",
    }
  );
  return TipoPropinas;
};
