import React from "react";
import reeses from "./reeses.jpg";
import { NavLink } from "react-router-dom";

const Reeses = () => {
  return (
    <>
      <p>Tasty! Savor those Reese's Peanut Butter Cups!</p>
      <img src={reeses} alt="Reese's Peanut Butter Cups" />
      <NavLink exact to="/">
        Go Back
      </NavLink>
    </>
  );
};

export default Reeses;
