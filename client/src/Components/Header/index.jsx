import React from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../Assets/logo.png";

function Header() {
  const showSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = "100vw";
  };

  return (
    <div className="header-container">
      <div className="header__menu">
        <GiHamburgerMenu onClick={showSidebar} />
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
