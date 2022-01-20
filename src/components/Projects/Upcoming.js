import React, { Component } from 'react';
import {Row ,Col} from "react-bootstrap";
import Slider from "react-slick";


import SlideCountBox from "../CustomComponents/SlideCountBox/SlideCountBox";


import carousel_next from "../../resources/images/ic_carousel_next.png";
import carousel_prev from "../../resources/images/ic_carousel_previous.png"


class Upcoming extends Component {

  constructor(props){
    super(props);
    this.state={
      currentSlide:1,
    }
}

next=()=>{
    this.setState({
        currentSlide:this.state.currentSlide + 1
    })
    this.slider.slickNext();
}

previous=()=>{
    this.setState({
        currentSlide:this.state.currentSlide - 1
    })
    this.slider.slickPrev();
}


    render() {
        const innerSlider = {
            dots: true,
            infinite: false,
            arrows:true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow:<img src={carousel_next} alt='next' />,
            prevArrow:<img src={carousel_prev} alt='prev' />,
            responsive: [
                {
                  breakpoint: 600,
                },
                {
                  breakpoint: 480,
                }
              ]
          };

          const outerSlider = {
            dots: false,
            infinite: false,
            arrows:false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 600,
                },
                {
                  breakpoint: 480,
                }
              ]
          };
        return (
            <div>
                <div className='mx-0 count-arrow-box'>
                    <SlideCountBox
                        isMobileView={false} 
                        previous={this.previous}
                        next={this.next}
                        GalleryCount={1}
                        isProjectSlider={true}
                        currentSlide={ this.state.currentSlide} 
                        totalSlides={this.props.totalSlidesCount}/>
                </div>
              <Slider  
              ref={d => (this.slider = d)} 
              {...outerSlider}>
                {this.props.items.map((item)=>{
                    return<Row className='mx-0 d-flex' key={item.id}>
                              <Slider 
                                  className=' col-md-6 col-12 px-0'
                                  initialSlide={0} 
                                  ref={c => (this.slider = c)} 
                                  {...innerSlider}>
                                  {item.images.map((image)=>{
                                      return <div className='image-container d-flex' key={item.id}>
                                                  <img src={image.src} className='project-images img-fluid' alt="gallery1"/>
                                            </div>
                                  })} 
                              </Slider>
                              <Col md={6} sm={12} className='text-container'>
                                <h2 className='title'>{item.title}</h2>
                                <div className='extended-content'>
                                    {item.text}
                                                                   
                                </div>
                                                      
                              </Col>   
                            </Row>
                            
                })} 
              </Slider>

                <div className='mx-0 mt-2 mobile-count-arrow-box'>
                    <SlideCountBox
                            isMobileView={false} 
                            previous={this.previous}
                            next={this.next}
                            GalleryCount={1}
                            isProjectSlider={true}
                            currentSlide={ this.state.currentSlide} 
                            totalSlides={this.props.totalSlidesCount}/>    
                </div>
            </div>
        );
    }
}

export default Upcoming;