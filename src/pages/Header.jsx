import React from 'react'
import '../App.css'

import { Link } from 'react-router-dom';
import ProfileDropdown from '../components/ProfileDropdown';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="text-decoration-none"><h4 className="cursor-pointer">Smart City</h4></Link>
      <ProfileDropdown />
    </div>
  )
}

export default Header
