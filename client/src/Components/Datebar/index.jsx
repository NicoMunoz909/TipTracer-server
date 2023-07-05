import { useState } from "react";
import "./Datebar.css";
import { TiArrowSync } from "react-icons/ti";

const Datebar = ({ date, onChange }) => {
  return (
    <div className="datebar-container">
      <div className="datebar__date">
        <p style={{ textTransform: "capitalize" }}>
          {date.toLocaleString("es-MX", { weekday: "long" })}
        </p>
        <div>
          <p>
            {date.toLocaleString("es-MX", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
          <form action="">
            <input
              type="date"
              defaultValue=""
              id="fecha"
              name="fecha"
              onChange={(e) => onChange(new Date(e.target.value + "T00:00:00"))}
            ></input>
            <TiArrowSync />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Datebar;
