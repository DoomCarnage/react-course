import React, { useState } from 'react';
import { Navbar, Nav,NavLink } from 'react-bootstrap';

const Navigationbar = () => {

    const [formData, setFormData] = useState({
        title: 'Dad Joke Library',
        description: 'I am the lamest Dad ever. I have a collection of dad jokes'
    });
  return (
    <>
        <header className="header text-center">	    
            <h1 className="blog-name pt-lg-4 mb-0"><NavLink className="no-text-decoration" to="/">{formData.title}</NavLink></h1>
            
            <Navbar expand="lg" variant="dark">
            
                <Navbar.Toggle aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="navigation" className="flex-column">
                    <div className="profile-section pt-3 pt-lg-0">
                        <img className="profile-image mb-3 rounded-circle mx-auto" src="assets/images/profile.png" alt="profile" />			
                        
                        <div className="bio mb-3">{formData.description}<br /><NavLink to="/about">Find out more about me</NavLink></div>
                        <ul className="social-list list-inline py-3 mx-auto">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-github-alt fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-stack-overflow fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-codepen fa-fw"></i></a></li>
                        </ul>
                        <hr /> 
                    </div>
                    
                    <Nav className="flex-column text-start">
                        <Nav.Item>
                            <NavLink className="nav-link active" to="/"><i className="fas fa-home fa-fw me-2"></i>Blog Home <span className="sr-only">(current)</span></NavLink>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <NavLink className="nav-link" to="/blog-post"><i className="fas fa-bookmark fa-fw me-2"></i>Blog Post</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className="nav-link" to="/about"><i className="fas fa-user fa-fw me-2"></i>About Me</NavLink>
                        </Nav.Item> */}
                    </Nav>
                    
                    {/* <div className="my-2 my-md-3">
                        <a className="btn btn-primary" href="https://themes.3rdwavemedia.com/" target="_blank" rel="noopener noreferrer">Get in Touch</a>
                    </div> */}
                </Navbar.Collapse>
            </Navbar>
        </header>


    </>
  )
}

export default Navigationbar
