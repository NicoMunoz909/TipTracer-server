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
        <a href="">Día</a>
        <a href="">Semana</a>
        <a href="">Mes</a>
        <a href="">Personalizado</a>
      </div>
    </div>
  );
};

export default Sidebar;
