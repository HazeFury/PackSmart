import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import OpenMenu from "../../assets/menu.svg";
import Close from "../../assets/close.svg";
import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/PackSmart.png";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const handleToggle = () => {
    setMenu(!menu);
  };

  return (
    <div className="header-section">
      <div className="header-container">
        <img className="logo-img" src={Logo} alt="" />
        <Navbar />
        <button
          type="button"
          className="menu-burger-btn"
          onClick={handleToggle}
        >
          <img
            className="logo-menu-svg"
            src={menu ? Close : OpenMenu}
            alt="open-menu"
          />
        </button>
      </div>
      {menu && (
        <div className="open-menu-container">
          <ul className="list-of-items-column">
            <li>
              <Link className="link-style-mini" onClick={handleToggle} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="link-style-mini"
                onClick={handleToggle}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="link-style-mini"
                onClick={handleToggle}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
