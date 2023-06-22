import { RxCross1 } from "react-icons/rx";
import "./Sidebar.css";

const Sidebar = () => {
  const hideSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = "0";
  };

  return (
    <div id="sidebar" className="sidebar-container">
      <RxCross1 onClick={hideSidebar}></RxCross1>
      <div className="sidebar-content">
        <a href="/dia">Día</a>
        <a href="/semana">Semana</a>
        <a href="/mes">Mes</a>
        <a href="/custom">Personalizado</a>
      </div>
    </div>
  );
};

export default Sidebar;
