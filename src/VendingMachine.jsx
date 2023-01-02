import React from "react";
import vendingMachine from "./vendingmachine.jpg";
import { NavLink } from "react-router-dom";

const VendingMachine = () => {
  return (
    <>
      <p>Hello I am a Vending Machine. What would you like?</p>
      <img src={vendingMachine} alt="Vending Machine" />
      <NavLink exact to="/cheezits">
        Cheez-Its
      </NavLink>
      <NavLink exact to="/reeses">
        Reese's Peanut Butter Cups
      </NavLink>
      <NavLink exact to="/drpepper">
        Dr. Pepper
      </NavLink>
    </>
  );
};

export default VendingMachine;
