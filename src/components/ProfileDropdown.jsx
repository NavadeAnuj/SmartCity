import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
const ProfileDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle style={{ display: 'flex', alignItems: 'center', background:"none", border:"none", borderRadius:"2px", padding:"0px 1rem" }} className="profile-toggle p-0 ">
        <FaRegUserCircle className="profile-icon"/>
      </Dropdown.Toggle>

      <Dropdown.Menu align="right" className="bg-light">
        <Dropdown.Item href="#/action-1">User Name</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/login">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
