import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Datebar from "./Components/Datebar";
import Infobar from "./Components/Infobar";
import Table from "./Components/Table";
import Sidebar from "./Components/Sidebar";
import FormModal from "./Components/FormModal";

function App() {
  const [date, setDate] = useState(new Date());
  const [tables, setTables] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(undefined);
  const [formFlag, setFormFlag] = useState(undefined);

  useEffect(() => {
    fetch(`http://localhost:4000/?fecha=${formatDate(date)}`)
      .then((res) => res.json())
      .then((data) => setTables(data));
  }, [date, isFormOpen]);

  const amounts = tables.reduce(
    (totals, table) => {
      totals.total += table.total;
      if (table.tipoPropina === "Tarjeta") {
        totals.cardTips += table.propina;
      } else {
        totals.cashTips += table.propina;
      }
      return totals;
    },
    { total: 0, cardTips: 0, cashTips: 0 }
  );

  const formatDate = (date) => {
    return (
      date.toLocaleDateString("es-MX", { year: "numeric" }) +
      "-" +
      date.toLocaleDateString("es-MX", { month: "2-digit" }) +
      "-" +
      date.toLocaleDateString("es-MX", { day: "2-digit" })
    );
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const formBody = {
      nombre: e.target[0].value,
      total: e.target[1].value,
      propina: e.target[2].value,
      tipoPropina: e.target[3].value,
      fecha: e.target[4].value,
    };
    fetch(`http://localhost:4000/`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formBody),
    });
    setIsFormOpen(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const formBody = {
      nombre: e.target[0].value,
      total: e.target[1].value,
      propina: e.target[2].value,
      tipoPropina: e.target[3].value,
      fecha: e.target[4].value,
    };
    fetch(`http://localhost:4000/${selectedTable.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(formBody),
    });
    setIsFormOpen(false);
  };

  const handleDelete = () => {
    fetch(`http://localhost:4000/${selectedTable.id}`, {
      method: "DELETE",
    });
    setIsFormOpen(false);
  };

  const createTable = () => {
    setFormFlag("Create");
    setIsFormOpen(true);
  };

  const editTable = (table) => {
    setFormFlag("Edit");
    setSelectedTable(table);
    setIsFormOpen(true);
  };

  const deleteTable = (table) => {
    setFormFlag("Delete");
    setSelectedTable(table);
    setIsFormOpen(true);
  };

  return (
    <div>
      <Sidebar></Sidebar>
      {isFormOpen && (
        <FormModal
          formatDate={formatDate}
          onCreate={handleCreate}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onCancel={() => setIsFormOpen(false)}
          tableInfo={selectedTable}
          formFlag={formFlag}
        />
      )}
      <Header openForm={createTable}></Header>
      <Datebar date={date} onChange={setDate}></Datebar>
      <Infobar amounts={amounts}></Infobar>
      {tables.length === 0 && (
        <h2 style={{ textAlign: "center" }}>No hay mesas que pobreza</h2>
      )}
      {tables.map((table) => {
        return (
          <Table
            key={table.id}
            item={table}
            onEdit={() => editTable(table)}
            onDelete={() => deleteTable(table)}
          />
        );
      })}
    </div>
  );
}

export default App;
