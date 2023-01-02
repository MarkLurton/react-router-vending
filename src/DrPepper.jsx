import React from "react";
import drpepper from "./drpepper.jpg";
import { NavLink } from "react-router-dom";

const DrPepper = () => {
  return (
    <>
      <p>Refreshing! Drink up that Dr. Pepper!</p>
      <img src={drpepper} alt="Dr. Pepper" />
      <NavLink exact to="/">
        Go Back
      </NavLink>
    </>
  );
};

export default DrPepper;
