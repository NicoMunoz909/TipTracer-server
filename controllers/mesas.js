const { Op } = require("sequelize");
const { Mesas } = require("../db/models");

const getAll = async (req, res) => {
  const query = { ...req.query };
  const filters = { where: {} };
  for (const key in query) {
    if (Object.hasOwnProperty.call(query, key)) {
      if (key === "fechaDesde" || key === "fechaHasta") {
        filters.where["fecha"] = {
          [Op.between]: [query.fechaDesde, query.fechaHasta],
        };
      } else {
        filters.where[key] = query[key];
      }
    }
  }
  const mesas = await Mesas.findAll(filters);
  res.send(mesas);
};

const getById = async (req, res) => {
  const mesa = await Mesas.findByPk(req.params.id);
  res.send(mesa);
};

const createTable = async (req, res) => {
  const nuevaMesa = await Mesas.create({ ...req.body });
  res.send("Mesa creada con exito", nuevaMesa);
};

const updateTable = async (req, res) => {
  const mesa = await Mesas.update(
    { ...req.body },
    { where: { id: req.params.id } }
  );
};

module.exports = { getAll, getById, createTable, updateTable };
