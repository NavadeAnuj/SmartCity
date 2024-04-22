import React from "react";
import { NavLink } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
const ParkingSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="link-list">
          {/* <NavLink to="../parking" className="link">
            <MdDashboard /> <span>Dashboard</span>
          </NavLink> */}
          <NavLink to="page1" className="link">
            <span>
              <FaUsers />{" "}
            </span>{" "}
            <span>Collect Penalty</span>
          </NavLink>
          
          <NavLink to="page3" className="link">
            <span>
            <FaUsers />{" "}
            </span>{" "}
            <span>Today entered vehicles</span>
          </NavLink>

          <NavLink to="page2" className="link">
            <span>
            <FaUsers />{" "}
            </span>{" "}
            <span>All vehicles</span>
          </NavLink>
          
        </div>

      </div>
    </div>
  );
};

export default ParkingSidebar;
