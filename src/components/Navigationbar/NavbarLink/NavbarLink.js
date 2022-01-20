import React, { Component } from 'react';
import { Nav } from "react-bootstrap";

import './NavbarLink.scss';

class NavbarLink extends Component {

    render() {
        return (
            <div className={'navbar-link-wrapper '+ this.props.className}>
                         <Nav.Link onClick={this.props.navigateToSection} href="#home">
                                    Home
                          </Nav.Link>
                          <Nav.Link onClick={this.props.navigateToSection} href="#about">
                                    About Us
                          </Nav.Link>
                          <Nav.Link onClick={this.props.navigateToSection} href="#projects"> 
                                    Projects
                          </Nav.Link>
                          <Nav.Link onClick={this.props.navigateToSection} href="#gallery">
                                    Gallery
                          </Nav.Link>
                         
                          <Nav.Link onClick={this.props.navigateToSection} href="#joinus" className="order-xl-6 join-link">
                                  Join the Cause
                          </Nav.Link>

                          <Nav.Link className='order-xl-5'  onClick={this.props.navigateToSection} href="#contact"> 
                                    Contact Us
                          </Nav.Link>
            </div>
        );
    }
}

export default NavbarLink;