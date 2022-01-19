import React from "react"; 
import { Container ,Row ,Nav} from "react-bootstrap";
import {scrollToDiv} from "../../utils/utility";

import "./AboutUs.scss"; 

 class AboutUs extends React.Component { 


  navigateToSection=(event)=>{
    event.preventDefault();
    scrollToDiv(event);
  }

   render () { 
     return ( 
        <div className="about-wrapper-image py-4">
          <Container>
            <div className="title">About R.O.A.R</div>
            <div className="content pt-2">
                  <p>Rivers have been the lifelines for civilizations across the globe. 
                    Most of the cities in India have also developed on the banks of rivers. Unfortunately, as urban development besieges the natural resources, considerable amount of garbage and industrial waste is getting dumped into the rivers flowing through the cities. Mutha river flowing through the heart of Pune is no exception.</p>
                  <p>
                  While Governments discharge their duties towards protecting the natural resources through regulations and development projects, we believe that the sanctity of our rivers can be really protected only through community awareness and everyone's participation in movements aimed at preventing the rivers from getting polluted.
                  </p>
                  <p>
                    R.O.A.R for Mutha campaign is initiated for this purpose by citizens of Pune who care for Mutha river. Coming from diverse professional and social backgrounds, they bring diverse skills and resources that strengthen the campaign. We are looking for more and more participation from the citizens of Pune with the objective of developing this campaign into a mass movement, as only such participation will ensure the success!
                  </p>
            </div>
            <Row className="mx-0">
              <div className="my-4 join-button">
                    <Nav.Link onClick={this.navigateToSection} className="w-100 text-center" href="#joinus">Join the Cause</Nav.Link>
              </div>
            </Row>
          </Container>
        </div>
      
    ) 
  } 
} 


export default AboutUs  