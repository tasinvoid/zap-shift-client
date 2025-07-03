import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router";

const ProFastLogo = () => {
  return (
    <Link to={"/"}>
      <div className="relative flex">
        <img src={logo} alt="" />
        <p className="absolute top-5 left-7 text-2xl font-extrabold">ProFast</p>
      </div>
    </Link>
  );
};

export default ProFastLogo;
