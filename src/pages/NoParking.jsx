import React from "react";
import Header from "./Header";
import "../App.css";
import AdminSidebar from "./Admin/Layout/AdminSidebar";
import { Outlet } from "react-router-dom";
const NoParking = () => {
  return (
    <div className="admin">
      <Header />
      <div style={{ display: "flex" }}>
        <AdminSidebar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default NoParking;
