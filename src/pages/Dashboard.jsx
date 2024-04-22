import React, { useState } from 'react';
import '../App.css'
import Card from '../components/Card';
import Header from './Header';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
  

  return (
    <div className="dashboard-main">
      <Header />
      <div className="dashboard">
        <Card /> 
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;