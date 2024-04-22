import React from "react";
import Header from "../../Header";
import ParkingSidebar from "./ParkingSidebar";
import { Outlet } from "react-router-dom";
const Noparking = () => {
  return (
    <div className="noparking">
      <Header />
      <div style={{ display: "flex" }}>
        <ParkingSidebar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Noparking;
