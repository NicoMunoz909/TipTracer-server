import React from "react";
import Daily from "./Daily";
import Weekly from "./Weekly";
import "./Datebar.css";

const Datebar = ({ onChange, date }) => {
  return (
    <div className="datebar-container">
      <Daily onChange={onChange} date={date} />
    </div>
  );
};

export default Datebar;
