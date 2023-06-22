import "./Infobar.css";
import CardTipsGraph from "../Graphs/CardTipsGraph";
import CashTipsGraph from "../Graphs/CashTipsGraph";
import TotalGraph from "../Graphs/TotalGraph";
import BalanceGraph from "../Graphs/BalanceGraph";

const Infobar = () => {
  return (
    <div className="infobar-container">
      <TotalGraph />
      <CardTipsGraph />
      <CashTipsGraph />
      <BalanceGraph />
    </div>
  );
};

export default Infobar;
