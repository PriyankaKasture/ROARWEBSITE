import React from "react"; 
import { Element } from 'react-scroll';

//Components

import Navigationbar from "../Navigationbar/Navigationbar";
import Joinus from "../Joinus/Joinus";
import Footer from "../Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
import Gallery from "../Gallery/Gallery";
import Projects from "../Projects/Projects";


//Styles
import "./Home.scss"; 
import "../../resources/styles/mobileview.scss";

 class Home extends React.Component { 
  constructor(props){
    super(props);

    this.state={
      colorChange:false,
    }
  }

  componentDidMount(){
      window.addEventListener('scroll', this.changeNavbarColor);
  }

  
  changeNavbarColor=()=>{
    if(window.scrollY >= 80){
      this.setState({
        colorChange:true
      });
    }
    else{
      this.setState({
        colorChange:false
      });
    }
  }

   render () { 
     return ( 
        <div className="home-wrapper">
          <Element name="home" id="home">
              <Navigationbar colorChange={this.state.colorChange}/>
          </Element>
          <Element name="about" id="about" className="about-us-container">
            <AboutUs/>
          </Element>
          <Element name="projects" id="projects" className="projects-container">
            <Projects/>
          </Element>
          <Element name="gallery" id="gallery" className="gallery-container">
            <Gallery/>
          </Element>
          <Element name="joinus" id="joinus" className="joinus-container">
             <Joinus/>
          </Element>
          <Element name="contact" id="footer" className="contact-us-container">
            <Footer/>
          </Element>
      </div>
    ) 
  } 
} 


export default Home  