import React from 'react'
import Header from '../../Header'
import AdminSidebar from './AdminSidebar'
// import MainContent from './MainContent'
import { Outlet } from 'react-router-dom'

const Admin = () => {
    return (
        <div className='admin'>
            <Header />
            <div style={{ display: "flex", }}>
                <AdminSidebar />
                <div className='main-content'>
                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default Admin