import "./Datebar.css";
import { TiArrowSync } from "react-icons/ti";

const Datebar = () => {
  const route = window.location.pathname;

  return (
    <div className="datebar-container">
      {route === "/dia" && (
        <div className="datebar__date">
          <p>Lunes</p>
          <div>
            <p>05 Junio 2023</p>
            <TiArrowSync />
          </div>
        </div>
      )}
      {route === "/semana" && (
        <div className="datebar__date">
          <p>Semana</p>
          <div>
            <p>Lun. 05/06 - Dom. 11/06</p>
            <TiArrowSync />
          </div>
        </div>
      )}
      {route === "/mes" && (
        <div className="datebar__date">
          <p>Mes</p>
          <div>
            <p>Junio 2023</p>
            <TiArrowSync />
          </div>
        </div>
      )}
      {route === "/custom" && (
        <div className="datebar__date">
          <div>
            <p>Desde: </p>
            <p>05/06/23</p>
            <TiArrowSync />
          </div>
          <div>
            <p>Hasta: </p>
            <p>14/06/23</p>
            <TiArrowSync />
          </div>
        </div>
      )}
    </div>
  );
};

export default Datebar;
