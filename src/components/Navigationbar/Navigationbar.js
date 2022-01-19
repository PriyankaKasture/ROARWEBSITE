import React from "react"; 
import { Navbar,Nav, } from "react-bootstrap";


import MobileViewSidebar from "./MobileViewSidebar/MobileViewSidebar";

import {scrollToDiv} from "../../utils/utility";

import logo from "../../resources/images/logo.png";
import smallLogo from "../../resources/images/small-logo.png";

import 'react-rangeslider/lib/index.css'
import "./Navigationbar.scss"; 

 class Navigationbar extends React.Component {

  constructor() {
    super()
    this.state = {
      value: 0,
    }
  }

  componentDidMount(){
    this.moveSlider(this.state.value);
  }
  
  navigateToSection = (event) => {
    event.preventDefault();
    scrollToDiv(event);
  };

  moveSlider=(value)=>{
      this.setState({
        value:value
      });
  }

   render () { 
     return ( 
        <div className="navigationbar">
          <Navbar className="w-100" collapseOnSelect expand="lg" bg="dark">
          <div id="garbage-image" className="img-fluid" style={{'--clip-percentage':this.state.value + 'vw'}}></div>
          
           {/* <div className="slide-container">
                <Slider
                  min={0}
                  max={100}
                  value={this.state.value}
                  onChange={this.moveSlider}
              />
            </div> */}
            <div className={this.props.colorChange ? 'navbar-container colorChange' : 'navbar-container'}>
                 <MobileViewSidebar/>
                  
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Navbar.Brand className="desktop-logo" href="#home">
                              <img src={this.props.colorChange ? smallLogo : logo} alt="Logo" className="logo img-fluid" />
                      </Navbar.Brand>
                        <Nav className="mt-4">
                            <Nav.Link onClick={this.navigateToSection} href="#home">
                                    Home
                          </Nav.Link>
                          <Nav.Link onClick={this.navigateToSection} href="#about">
                                    About Us
                          </Nav.Link>
                          <Nav.Link onClick={this.navigateToSection} href="#projects"> 
                                    Projects
                          </Nav.Link>
                          <Nav.Link onClick={this.navigateToSection} href="#gallery">
                                    Gallery
                          </Nav.Link>
                          <Nav.Link onClick={this.navigateToSection} href="#contact"> 
                                      Contact Us
                          </Nav.Link>
                          <Nav.Link onClick={this.navigateToSection} href="#joinus" className="join-link">
                                  Join the Cause
                          </Nav.Link>
                           {/* <li>
                              <Dropdown className="language-wrapper">
                                <Dropdown.Toggle variant="white" id="language-selector">
                                      English
                                      <i className="fa fa-angle-down"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <Dropdown.Item>Marathi</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                          </li> */}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <div id="page-wrap">
              <div className="centered container px-0">Rivers are the lifelines for civilization</div>
              <div className="sub-title container px-0">Let's come together to protect the sanctity of our rivers and to save them from pollution</div>
            </div>
      </div>
      
    ) 
  } 
} 


export default Navigationbar  