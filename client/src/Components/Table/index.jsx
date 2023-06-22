import "./Table.css";
import TotalGraph from "../Graphs/TotalGraph";
import CardTipsGraph from "../Graphs/CardTipsGraph";
import { TbEdit } from "react-icons/tb";
import { BsTrash } from "react-icons/bs";
import BalanceGraph from "../Graphs/BalanceGraph";

const Table = () => {
  return (
    <div className="table-container">
      <div className="table-info">
        <div className="table-info__row">
          <div className="table-info__name">
            <p>Mesa: 22 </p>
          </div>
          <div className="table-info__date">
            <p>Lun 05/06/23</p>
          </div>
        </div>
        <div className="table-info__row">
          <div className="table-info__total">
            <TotalGraph />
          </div>
          <div className="table-info__tip">
            <CardTipsGraph />
          </div>
          <div className="table-info__balance">
            <BalanceGraph />
          </div>
        </div>
      </div>
      <div className="table-controls">
        <TbEdit></TbEdit>
        <BsTrash></BsTrash>
      </div>
    </div>
  );
};

export default Table;
