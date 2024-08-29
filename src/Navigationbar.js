import React from 'react';
import { Navbar, Nav,NavLink } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import TimeInfo from './TimeInfo';
import Login from './Login';

const Navigationbar = () => {

  return (
    <>
        <Navbar className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <Navbar.Brand href="#page-top">
                    <img src="assets/img/navbar-logo.svg" alt="..." />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarResponsive">
                    <Nav className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <Nav.Item><Nav.Link href="/services">Services</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/portfolio">Portfolio</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/team">Team</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>

    </>
  )
}

export default Navigationbar
