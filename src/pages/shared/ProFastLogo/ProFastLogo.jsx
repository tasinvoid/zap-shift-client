import React from "react";
import logo from "../../../assets/logo.png";

const ProFastLogo = () => {
  return (
    <div className="relative flex">
      <img src={logo} alt="" />
      <p className="absolute top-5 left-7 text-3xl font-extrabold">ProFast</p>
    </div>
  );
};

export default ProFastLogo;
