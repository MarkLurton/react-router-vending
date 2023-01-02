import React from "react";
import cheezits from "./cheezits.jpg";
import { NavLink } from "react-router-dom";

const CheezIts = () => {
  return (
    <>
      <p>Yum! Enjoy your Cheez-Its</p>
      <img src={cheezits} alt="Cheez-Its" />
      <NavLink exact to="/">
        Go Back
      </NavLink>
    </>
  );
};

export default CheezIts;
