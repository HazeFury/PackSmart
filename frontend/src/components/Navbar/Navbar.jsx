import { NavLink } from "react-router-dom";
import "./Navbar.css";

const getActiveLinkStyle = ({ isActive }) => {
  if (isActive) {
    return {
      color: "white",
      backgroundColor: "#1c5d99",
      height: 40,
      borderRadius: 20,
      paddingRight: 15,
      paddingLeft: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
  }
  return null;
};

export default function Navbar() {
  return (
    <div>
      <div>
        <ul className="list-of-items-row">
          <li>
            <NavLink className="link-style" style={getActiveLinkStyle} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link-style"
              style={getActiveLinkStyle}
              to="/packing"
            >
              Let's Pack!
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link-style"
              style={getActiveLinkStyle}
              to="/about"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
