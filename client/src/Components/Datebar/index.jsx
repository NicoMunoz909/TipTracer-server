import "./Datebar.css";
import { TiArrowSync } from "react-icons/ti";

const Datebar = () => {
  return (
    <div className="datebar-container">
      <div className="datebar__date">
        <p>Lunes</p>
        <div>
          <p>05 Junio 2023</p>
          <TiArrowSync />
        </div>
      </div>
    </div>
  );
};

export default Datebar;
