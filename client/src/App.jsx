import "./App.css";
import Header from "./Components/Header";
import Datebar from "./Components/Datebar";
import Infobar from "./Components/Infobar";
import Table from "./Components/Table";
import Sidebar from "./Components/Sidebar";
import { useEffect, useState } from "react";

function App() {
  const [date, setDate] = useState(new Date());
  const [tables, setTables] = useState([]);

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

  useEffect(() => {
    fetch(`http://localhost:4000/?fecha=${formatedDateString}`)
      .then((res) => res.json())
      .then((data) => setTables(data));
  }, [date]);

  const formatedDateString =
    date.toLocaleDateString("es-MX", { year: "numeric" }) +
    "-" +
    date.toLocaleDateString("es-MX", { month: "2-digit" }) +
    "-" +
    date.toLocaleDateString("es-MX", { day: "2-digit" });

  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <Datebar date={date} onChange={setDate}></Datebar>
      <Infobar amounts={amounts}></Infobar>
      {tables.length === 0 && (
        <h2 style={{ textAlign: "center" }}>No hay mesas que pobreza</h2>
      )}
      {tables.map((table) => {
        return <Table key={table.id} item={table} />;
      })}
    </div>
  );
}

export default App;
