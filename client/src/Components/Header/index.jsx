import React from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../Assets/logo.png";

function Header() {
  return (
    <div className="header-container">
      <div className="header__menu">
        <GiHamburgerMenu />
      </div>
      <div className="header__icon">
        <button>
          <img src={logo} alt="" />
        </button>
      </div>
      <div className="header__date">
        <p>Lun 05/06</p>
        <p>18:26</p>
      </div>
    </div>
  );
}

export default Header;
