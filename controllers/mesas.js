const { Op } = require("sequelize");
const { Mesas } = require("../db/models");

const getAll = async (req, res) => {
  const body = { ...req.body };
  const filters = { where: {} };
  try {
    for (const key in body) {
      if (Object.hasOwnProperty.call(body, key)) {
        if (key === "fechaDesde" || key === "fechaHasta") {
          filters.where["fecha"] = {
            [Op.between]: [body.fechaDesde, body.fechaHasta],
          };
        } else {
          filters.where[key] = body[key];
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
    res.status(200).send("Mesa creada exitosamente");
  } catch (error) {
    res.status(500).send(error.original.sqlMessage);
  }
};

const updateTable = async (req, res) => {
  try {
    const mesa = await Mesas.update({ ...req.body }, { where: { id: req.params.id } });
    res.status(200).send("Mesa modificada exitosamente");
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
    res.sendStatus(200).send("Mesa borrada exitosamente");
  } catch (error) {
    res.status(500).send(error.original.sqlMessage);
  }
};

module.exports = { getAll, getById, createTable, updateTable, deleteTable };
