import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";


import NavbarLink from "../NavbarLink/NavbarLink";


import {scrollToDiv} from "../../../utils/utility";
import mobileLogo from "../../../resources/images/mobileLogo.jpg";

// import ic_menu from "../../../resources/images/ic_menu.svg";
import ic_menu_close from "../../../resources/images/ic_menu_close.svg";

import './MobileViewSidebar.scss';

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
                        
                        <NavbarLink navigateToSection={this.handleClose} />
                    </Menu>
                    <div className='pt-2'>
                         <img src={mobileLogo} alt="Logo" className="d-lg-none mobile-logo img-fluid" />
                    </div>
            </div>
        );
    }
}

export default MobileViewSidebar;