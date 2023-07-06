const express = require("express");
const cors = require("cors");
const { sequelize } = require("./db/models");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "dist")));

//Routes
const {
  getAll,
  getById,
  createTable,
  updateTable,
  deleteTable,
} = require("./controllers/mesas");
app.get("/api", getAll);
app.get("/api/:id", getById);
app.post("/api", createTable);
app.patch("/api/:id", updateTable);
app.delete("/api/:id", deleteTable);

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

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
