import React from "react";
import { Outlet } from "react-router";
import Navbar from "../src/pages/shared/Navbar/Navbar";
import Footer from "../src/pages/shared/Footer/Footer";

const RootLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayouts;
