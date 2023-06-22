import "./App.css";
import Header from "./Components/Header";
import Datebar from "./Components/Datebar";
import Infobar from "./Components/Infobar";
import Table from "./Components/Table";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <Datebar></Datebar>
      <Infobar></Infobar>
      <Table></Table>
      <Table></Table>
      <Table></Table>
      <Table></Table>
    </div>
  );
}

export default App;
