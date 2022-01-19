import React from "react"; 
import {Tabs ,Tab,Container} from "react-bootstrap";

import upcoming1 from "../../resources/images/Upcoming_01.jpg";
import upcoming2 from "../../resources/images/Upcoming_02.jpg";
import upcoming3 from "../../resources/images/Upcoming_03.jpg";

import {DATA} from "../../constants/data.js"


import "./Projects.scss"; 
import Upcoming from "./Upcoming";

 class Projects extends React.Component { 
  constructor(props){
    super(props);

    this.state={
      upcomingProjects:[],

      onGoingProjectItems:[
        {
          id:1,
          index:0,
          images:[
           {
            src:upcoming1,
           },
           {
            src:upcoming2,
           },
           {
            src:upcoming3,
           }
          ],
          title:"Khilare Vasti",
          text:DATA.ongoingProject1Text
        },
      ]
    }
  }
  
   render () { 
     return ( 
        <Container className="projects py-4">
          <Tabs
            transition={true}
            id="projects-slider"
            className="mb-3"
            defaultActiveKey="ongoing"
          >
          <Tab eventKey="ongoing" title="Ongoing Project">
            <Upcoming totalSlidesCount={1} items={this.state.onGoingProjectItems} />
          </Tab>
          {/* <Tab eventKey="upcoming" title="Upcoming Project">
            <Upcoming totalSlidesCount={2} items={this.state.projectsRender} />
          </Tab> */}
        </Tabs>
      </Container>
      
    ) 
  } 
} 


export default Projects  