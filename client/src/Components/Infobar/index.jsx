import "./Infobar.css";
import { TbMoneybag, TbCreditCard, TbPlusMinus } from "react-icons/tb";
import { BsCash } from "react-icons/bs";

const Infobar = () => {
  return (
    <div className="infobar-container">
      <div className="infobar__total">
        <TbMoneybag></TbMoneybag>
        999
      </div>
      <div className="infobar__card">
        <TbCreditCard></TbCreditCard>
        999
      </div>
      <div className="infobar__cash">
        <BsCash></BsCash>
        999
      </div>
      <div className="infobar__balance">
        <TbPlusMinus></TbPlusMinus>
        999
      </div>
    </div>
  );
};

export default Infobar;
