import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";
import { Nav } from "react-bootstrap";

import {scrollToDiv} from "../../../utils/utility";
import mobileLogo from "../../../resources/images/mobileLogo.jpg";

// import ic_menu from "../../../resources/images/ic_menu.svg";
import ic_menu_close from "../../../resources/images/ic_menu_close.svg";

class MobileViewSidebar extends Component {
    constructor(props){
        super(props);

        this.state={
          isOpen:false,
        }
      }

      handleOnOpen=()=>{
          this.setState({
              isOpen:true
          });
      }

      handleClose=(event)=>{
          this.setState({
              isOpen:false
          });

          if(event){
            event.preventDefault();
            scrollToDiv(event);
          }
      }

    render() {
        return (
            <div className='sidebar-container'>
                    <Menu
                        pageWrapId={"page-wrap"}
                        outerContainerId={"home"}
                        isOpen={this.state.isOpen} 
                        onOpen={ this.handleOnOpen}
                        onClose={this.handleClose}
                        // customBurgerIcon={ <img src={ic_menu}  alt='open'/> }
                        customCrossIcon={ <img src={ic_menu_close} alt='close' /> }>
                        <div className='nav-link-wrapper'>
                            <Nav.Link onClick={this.handleClose} href="#home">
                                    Home
                            </Nav.Link>
                        </div>
                        <div className='nav-link-wrapper'>
                          <Nav.Link onClick={this.handleClose} href="#about">
                                About Us
                          </Nav.Link>
                        </div>
                        <div className='nav-link-wrapper'>
                          <Nav.Link onClick={this.handleClose} href="#projects">
                                Projects
                          </Nav.Link>
                        </div>
                        <div className='nav-link-wrapper'>
                          <Nav.Link onClick={this.handleClose} href="#gallery">
                                Gallery
                          </Nav.Link>
                        </div>
                        <div className='nav-link-wrapper'>
                          <Nav.Link onClick={this.handleClose} href="#joinus" className="join-link">
                                Join the Cause
                          </Nav.Link>
                        </div>
                        
                        <div className='nav-link-wrapper'>
                          <Nav.Link onClick={this.handleClose} href="#contact">
                                Contact Us
                          </Nav.Link>
                        </div>
                    </Menu>
                    <div className='pt-2'>
                         <img src={mobileLogo} alt="Logo" className="d-lg-none mobile-logo img-fluid" />
                    </div>
                    {/* <Dropdown className="language-wrapper mt-2">
                                <Dropdown.Toggle variant="white" id="language-selector">
                                      English
                                      <i className="fa fa-angle-down"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <Dropdown.Item>Marathi</Dropdown.Item>
                                </Dropdown.Menu>
                    </Dropdown> */}
            </div>
        );
    }
}

export default MobileViewSidebar;