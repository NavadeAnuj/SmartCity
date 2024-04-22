import React from 'react'
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap"
import { Outlet } from 'react-router-dom'
const MainContent = () => {
    return (
        <div className='mainContent'>
            <Outlet/>
        </div>
    )
}

export default MainContent