import React, { Component } from 'react';
import { Button, Modal } from 'reactstrap';
import ImageLoader from 'react-load-image';

import next from "../../../resources/images/next.svg";
import back from "../../../resources/images/back.svg";
import close from "../../../resources/images/ic_close.svg"

import "./LightBox.scss";

class LightBox extends Component {


  renderLoader=()=>{
    return <div className="spinner-border text-primary"></div> 
  }

    renderImage=()=>{
      return (
        <div className='carousel-wrapper'>
            <Button color="link" disabled={this.props.currentIndex == 1}  className="carousel-button prev" onClick={this.props.onClickPrev}>
                  <img src={back} className="img-fluid" alt="back"/>
            </Button>

            <ImageLoader src={this.props.currentImage} >
              <img  className='img-fluid modal-image' alt=''/>
              <div>Error!</div>
              {this.renderLoader()}
            </ImageLoader>
            <Button color="link" disabled={this.props.currentIndex == this.props.totalCount} className="carousel-button next" onClick={this.props.onClickNext}>
                  <img src={next} className="img-fluid" alt="next"/>
            </Button>
        </div>
      )
    }


    render() {
        return (
            <div className='light-box'>
                <Modal 
                  size='lg'
                  isOpen={this.props.isOpen} toggle={this.toggle} 
                  modalClassName={"gallery-modal"} 
                  external={
                    <button className="close" style={{ position: 'absolute', top: '15px', right: '21px' }} 
                        onClick={this.props.onClose}   >
                            <img src={close} alt='' />
                      </button>
                }>
                    {this.renderImage()}
          
              </Modal>
            </div>
        );
    }
}

export default LightBox;