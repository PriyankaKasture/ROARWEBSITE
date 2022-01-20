import React from "react"; 
import { Container } from "reactstrap";
import {isMobile} from 'react-device-detect';
import Slider from "react-slick";


import { GALLERY } from "../../constants/appConstants";


import SlideCountBox from "../CustomComponents/SlideCountBox/SlideCountBox";


//Styles
import "./Gallery.scss"; 

import gallery1 from "../../resources/images/01.jpg";
import gallery2 from "../../resources/images/02.jpg";
import gallery3 from "../../resources/images/03.jpg";
import gallery4 from "../../resources/images/04.jpg";
import gallery5 from "../../resources/images/05.jpg";
import gallery6 from "../../resources/images/06.jpg";
import gallery7 from "../../resources/images/07.jpg";
import gallery8 from "../../resources/images/08.jpg";

class Gallery extends React.Component { 
  constructor() {
    super();
    this.state = {
      totalSlides:8,
      index:0,

      galleryItems:[
        {
          index:0,
          src:gallery1,
        },
        {
          index:1,
          src:gallery2,
        },
        {
          index:2,
          src:gallery3,
        },
        {
          index:3,
          src:gallery4,
        },
        {
          index:4,
          src:gallery5,
        },
        {
          index:5,
          src:gallery6,
        },
        {
          index:6,
          src:gallery7,
        },
        {
          index:7,
          src:gallery8,
        },
      ]
    };
  }


  componentDidMount(){
    this.checkIfMobile();
  }
  
  checkIfMobile=()=>{
    if(isMobile){
      this.setState({
        currentSlide:GALLERY.MOBILE
      })
    }else{
      this.setState({
        currentSlide:GALLERY.DESKTOP
      });
    }
  }
  
  next=()=> {
      this.slider.slickNext();
  }
  previous=()=> {
      this.slider.slickPrev();
  }

   render () { 
    const settings = {
      dots: true,
      infinite: false,
      arrows:false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      afterChange: previous =>{
        if(isMobile){
          this.setState({ currentSlide: previous + 2 })
        }else{
          this.setState({ currentSlide: previous + 4 })
        }
      },
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots:false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots:false,
          }
        }
      ]
    };

     return ( 
        <Container className="gallery pt-3 pb-5">
           <div className="title-wrapper">
             <div className="title py-2">Gallery</div>
             <div className="count-box">
                <SlideCountBox
                      isMobileView={false} 
                      previous={this.previous}
                      next={this.next}
                      currentSlide={ this.state.currentSlide} 
                      GalleryCount={GALLERY.DESKTOP}
                      totalSlides={this.state.totalSlides}/>
             </div>
          </div>
        <Slider 
            initialSlide={0} 
            ref={c => (this.slider = c)} {...settings}>
            {this.state.galleryItems.map((item)=>{
                   return <div key={item.index}>
                      <img src={item.src} className="img-fluid" alt="gallery1"/>
                    </div>
            })}
          
        </Slider>

        <div className="mobile-count-box">
              <SlideCountBox 
              isMobileView={true}
              previous={this.previous}
              next={this.next}
              GalleryCount={GALLERY.MOBILE}
              currentSlide={ this.state.currentSlide} 
              totalSlides={this.state.totalSlides}
               />    
        </div>
    </Container> 
    ) 
  } 
} 


export default Gallery; 