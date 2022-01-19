import React, { Component } from 'react';
import {Row ,Button ,Col} from "react-bootstrap";
import Slider from "react-slick";

import carousel_next from "../../resources/images/ic_carousel_next.png";
import carousel_prev from "../../resources/images/ic_carousel_previous.png"
import next from "../../resources/images/next.svg";
import back from "../../resources/images/back.svg";


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
                    <div className='slide-count px-3'>
                        {this.state.currentSlide + '/' + this.props.totalSlidesCount}
                    </div>
                    <div className='d-flex'>
                        <Button  disabled={this.state.currentSlide === 1} className="back-next-button" onClick={this.previous}>
                            <img src={back} alt="back"/>
                        </Button>
                        <Button disabled={this.state.currentSlide === this.props.totalSlidesCount} className="back-next-button" onClick={this.next}>
                            <img src={next} alt="next"/>
                        </Button>
                    </div>
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
                    <div className='slide-count px-3'>
                        {this.state.currentSlide + '/' + this.props.totalSlidesCount}
                    </div>
                    <div className='d-flex'>
                        <Button  disabled={this.state.currentSlide === 1} className="back-next-button" onClick={this.previous}>
                            <img src={back} alt="back"/>
                        </Button>
                        <Button disabled={this.state.currentSlide === this.props.totalSlidesCount} className="back-next-button" onClick={this.next}>
                            <img src={next} alt="next"/>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Upcoming;