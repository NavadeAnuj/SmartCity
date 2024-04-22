import React from 'react'
import '../../../assets/Syles/Asidebar.css'
import { NavLink } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

const AdminSidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-wrapper'>
                <div className='link-list'>
                    <NavLink to='../admin' className='link'>
                     <MdDashboard /> <span>Dashboard</span>
                    </NavLink>
                    <NavLink to='user' className='link'>
                        <span><FaUsers/> </span> <span>User</span>
                    </NavLink>
                    <NavLink to='reports' className='link'>
                        <span>< MdReport/></span> <span>Reports</span>
                    </NavLink>
                </div>
                <div className='link-list' >
                    <NavLink to='settings' className='link'>
                        <span>< CiSettings /></span> <span>Settings</span>
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default AdminSidebar