import "./Datebar.css";
import { TiArrowSync } from "react-icons/ti";

const Datebar = () => {
  const dateObejct = new Date(window.location.search.slice(-10) + "T00:00:00");
  const dateString = window.location.search.slice(-10);
  const daysArray = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const monthArrays = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <div className="datebar-container">
      <div className="datebar__date">
        <p>{daysArray[dateObejct.getDay()]}</p>
        <div>
          <p>
            {dateObejct.getDate() + " "}
            {monthArrays[dateObejct.getMonth()] + " "}
            {dateObejct.getFullYear()}
          </p>
          <form action="">
            <input
              type="date"
              defaultValue={dateString}
              id="fecha"
              name="fecha"
              onChange={(e) => e.target.form.submit()}
            ></input>
            <TiArrowSync />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Datebar;
