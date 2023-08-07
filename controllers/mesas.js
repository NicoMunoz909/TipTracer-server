const { Op } = require("sequelize");
const { Mesas } = require("../db/models");

const getAll = async (req, res) => {
  const query = { ...req.query };
  const filters = { where: {} };
  try {
    for (const key in query) {
      if (Object.hasOwnProperty.call(query, key)) {
        if (key === "desde" || key === "hasta") {
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
  } catch (error) {
    res.status(500).send(error.original.sqlMessage);
  }
};

const getById = async (req, res) => {
  try {
    const mesa = await Mesas.findByPk(req.params.id);
    res.send(mesa);
  } catch (error) {
    res.status(500).send(error.original.sqlMessage);
  }
};

const createTable = async (req, res) => {
  try {
    const nuevaMesa = await Mesas.create({ ...req.body });
    res.status(200).send({ mesa: nuevaMesa, msg: "Mesa creada exitosamente" });
  } catch (error) {
    res.status(500).send(error.original.sqlMessage);
  }
};

const updateTable = async (req, res) => {
  try {
    const mesa = await Mesas.update({ ...req.body }, { where: { id: req.params.id } });
    res.status(200).send({ id: req.params.id, msg: "Mesa modificada exitosamente" });
  } catch (error) {
    res.status(500).send(error.original.sqlMessage);
  }
};

const deleteTable = async (req, res) => {
  try {
    const mesaBorrada = await Mesas.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({ id: req.params.id, msg: "Mesa borrada exitosamente" });
  } catch (error) {
    res.status(500).send(error.original.sqlMessage);
  }
};

module.exports = { getAll, getById, createTable, updateTable, deleteTable };
