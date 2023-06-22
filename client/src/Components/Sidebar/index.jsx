import { RxCross1 } from "react-icons/rx";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <RxCross1></RxCross1>
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
