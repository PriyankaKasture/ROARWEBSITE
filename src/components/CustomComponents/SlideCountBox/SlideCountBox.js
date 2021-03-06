import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { Button } from "reactstrap";


import { ROUTES } from "../../../constants/routes";


import next from "../../../resources/images/next.svg";
import back from "../../../resources/images/back.svg";

//Styles
import "./SlideCountBox.scss"; 

class SlideCountBox extends Component {
    render() {
        return (
            <div className='slide-count-box d-flex justify-content-between w-100'>
                <div>
                    {(!this.props.isMobileView && !this.props.isProjectSlider) ? <span>
                                <Link to={ROUTES.GALLERY} className="view-more" target={"_blank"}>View More</Link>
                        </span> :''
                    }
                    <span className='slide-count px-3'>
                            {this.props.currentSlide + '/' + this.props.totalSlides}
                    </span>
                    {this.props.isMobileView &&<span>
                                <Link to={ROUTES.GALLERY} className="view-more" target={"_blank"}>View More</Link>
                        </span>
                    }
                </div>
                <div>
                  <Button color="link" disabled={this.props.currentSlide === this.props.GalleryCount} className="next-prev" onClick={this.props.previous}>
                        <img src={back} className="img-fluid" alt="back"/>
                  </Button>
                  <Button color="link" disabled={this.props.currentSlide === this.props.totalSlides} className="next-prev" onClick={this.props.next}>
                        <img src={next} className="img-fluid" alt="next"/>
                  </Button>
                </div>  
            </div>
        );
    }
}

export default SlideCountBox;