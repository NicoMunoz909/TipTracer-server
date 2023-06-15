const express = require("express");
const cors = require("cors");
const { sequelize } = require("./db/models");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//Routes
const { getAll, getById, getByDay } = require("./controllers/mesas");
app.get("/", getAll);
app.get("/:id", getById);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const testDbConnection = (async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected succesfully.");
  } catch (error) {
    console.error(
      "Unable to connect to the database:",
      error.original.sqlMessage
    );
  }
})();
