import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <NavLink exact to="/">
        Vending Machine
      </NavLink>
      <NavLink exact to="/cheezits">
        Cheez-Its
      </NavLink>
      <NavLink exact to="/reeses">
        Reese's Peanut Butter Cups
      </NavLink>
      <NavLink exact to="/drpepper">
        Dr. Pepper
      </NavLink>
    </nav>
  );
};

export default Navbar;
