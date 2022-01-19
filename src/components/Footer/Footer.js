import React from "react"; 
import { Row, Col, Container ,Nav } from "react-bootstrap";
import { ReactSVG } from 'react-svg'


import {scrollToDiv} from "../../utils/utility";

import fb from "../../resources/images/ic_facebook.svg";
import instagram from "../../resources/images/ic_instagram.svg";
import youtube from "../../resources/images/ic_youtube.svg";
import springct from "../../resources/images/springct.png";
import leminon from "../../resources/images/leminon.png";
import inklab from "../../resources/images/inklab.png";
import Lead from "../../resources/images/Lead.png";


import "./Footer.scss"; 

 class Footer extends React.Component { 

  navigateToSection=(event)=>{
    event.preventDefault();
    scrollToDiv(event);
}

   render () { 
     return ( 
        <Container className="contactUs py-4">
            <Row className="text-left" id="contact">
               <Col xs={12} md={6} className="d-flex flex-column">
                  <div className="title">Roar</div>
                  <Row> 
                    <Col className="d-flex flex-column">
                    <Nav.Link onClick={this.navigateToSection} className="sub-content pl-0" href="#about">About Us</Nav.Link>
                    <Nav.Link onClick={this.navigateToSection} className="sub-content pl-0" href="#projects">Ongoing Project</Nav.Link>
                    {/* <Nav.Link onClick={this.navigateToSection} className="sub-content pl-0" href="#projects">Upcoming Project</Nav.Link> */}
                    </Col> 
                    <Col className="d-flex flex-column">
                      <Nav.Link onClick={this.navigateToSection} className="sub-content pl-0" href="#gallery">Gallery</Nav.Link>
                      <Nav.Link onClick={this.navigateToSection} className="sub-content pl-0" href="#joinus">Join Us</Nav.Link>
                    </Col>
                  </Row> 
               </Col>
               {/* <Col xs={6} md={3} className="d-flex flex-column mobile-padding">
                <div className="title">Legal</div>
                <div className="sub-content">Privacy Policy</div>
                <div className="sub-content">Cookie Policy</div>
               </Col> */}
               <Col xs md={3} className="mobile-padding">
                <div className="title">Contact</div>
                <div className="sub-content">+91 8007630379</div>
                <div className="sub-content">info@roarformutha.org</div>
               </Col>
               <Col xs={12} md={3} className="mobile-padding">
                <div className="title">Connect with Us</div>
                <Row className="pt-2 mx-0">
                  <a href="https://www.instagram.com/roar_for_mutha/" target="_blank" rel="noreferrer"><ReactSVG src={instagram} alt="Instagram" /></a>&nbsp;&nbsp;&nbsp;
                  {/* <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><ReactSVG src={fb} alt="Facebook" /></a>&nbsp;&nbsp;&nbsp; */}
                  <a href="https://www.youtube.com/channel/UC9Zp_be48RzuCVmtfetkSLw" target="_blank" rel="noreferrer"><ReactSVG src={youtube} alt="Youtube" /></a>&nbsp;&nbsp;&nbsp;
                </Row>
               </Col>
            </Row>
            <Row className="pb-3 pt-5 flex-column align-items-start mx-0">
              <div className="org-name text-left pb-2">The initiative is supported by</div>
              <Row className="text-left align-items-center mx-0">
              <span>
                 <img src={leminon} alt="org2" className="img-fluid"/>
              </span>
                <span className="plus-sign mx-2">+</span>
                <span className="col px-1">
                     <img src={springct} alt="spring" className="img-fluid"/>
                </span>
              </Row>
              <Row className="mx-0 mt-3">
                <span>
                  <img src={inklab} alt="inklab" className="img-fluid"/>
                </span>
                <span className="pl-4">
                  <img src={Lead} alt="lead" className="img-fluid"/>
                </span>
              </Row>
            </Row>

            {/* <div className="horizontal-line mb-3"></div> */}

            {/* <Row className="px-3 justify-content-between footer">
              <div>©2022 Privacy Policy Terms and Conditions</div>
            </Row> */}
        </Container>
      
    ) 
  } 
} 


export default Footer;  