import React, { Component } from 'react';
import axios  from 'axios';
import {Row } from "react-bootstrap";

import Masonry , {ResponsiveMasonry} from "react-responsive-masonry";


import LightBox from '../LightBox/LightBox';
import logo from "../../../resources/images/logo.png";


import "./LightBox.scss";



class LightBoxContainer extends Component {

    constructor(props){             
        super(props);                 
        this.state = { 
            currentImage: "" ,
            lightboxIsOpen:false,
            images:[],
            currentIndex:0,
            showSpinner:false,
        }; 
    }

    componentDidMount(){
        let folderId='"1ELJbcUmtywEiT1VWm0nAbp8F43n77-ra"';
        let q = folderId + ' in parents ';
        let self=this;

        this.setState({
            showSpinner:true,
        })
  
          axios.get('https://www.googleapis.com/drive/v3/files?' ,
            { 
                params: { 
                q:q,
                key:'AIzaSyCmlI4T5d6bLXimDyAZT59I-tMPdqUHfjg',
                fields: "files(id, kind, name, mimeType, thumbnailLink,webContentLink)",
            } 
        })
            .then(function (response) {
                // console.log(response.data.files);
                self.fetchImages(response.data.files)
            })
            .catch(function (error) {
              console.log(error);
            })
            .then(function () {
              // always executed
            });  
      }

      fetchImages=(response)=>{
        this.setState({
            showSpinner:false,
        })

        let sortedData = response.sort((a, b) => {
            return parseInt(a.name) - parseInt(b.name);
        });

        let orginalImages=[];
        let ImageUrl='https://drive.google.com/uc?export=view&id=';
           for(var i =0 ; i < sortedData.length; i++)
           {
            let currentIndex=i+1;
            orginalImages.push({
                index:currentIndex++,
                id:response[i].id,
                kind:response[i].kind ,
                name:response[i].name,
                mimeType:response[i].mimeType ,
                webContentLink:ImageUrl + response[i].id,
            })
           }
            console.log("images",orginalImages);

            this.setState({
                images:orginalImages,
            });

      }

      fetchThumbnailImage=(item)=>{
        let imageId=item.id;
        let src='https://drive.google.com/thumbnail?id='+ imageId
        return src;
      }

      openLightBox=(event ,enlargeImageUrl)=>{
        console.log("event",enlargeImageUrl);
        this.setState({
            currentImage:enlargeImageUrl,
            currentIndex:event.target.name,
            lightboxIsOpen:true,
        });
      }

      closeLightbox=()=>{
          this.setState({
              lightboxIsOpen:false
          });
      }

      gotoPrevious=()=> {
            this.setState({
                    currentIndex: parseInt(this.state.currentIndex) - 1,
                },()=>{
                    console.log("previous",this.state.currentIndex);
                    let previousImageData = this.state.images.filter(el => {
                        return el.index == this.state.currentIndex;
                    });
                    this.setState({
                        currentImage:previousImageData[0]?.webContentLink,
                    });
                });
      }

      gotoNext=() =>{
        this.setState({
            currentIndex: parseInt(this.state.currentIndex) + 1,
        },()=>{
            console.log("nextIndex",this.state.currentIndex);
            let nextImageData = this.state.images.filter(el => {
                return el.index == this.state.currentIndex;
            });
            this.setState({
                currentImage:nextImageData[0]?.webContentLink,
            });
        });
    };

    render() {
        return (
            <div className='light-box-container'>
                  <Row className='justify-content-center logo-wrapper mb-3 mx-0'>
                      <img src={logo} className='img-fluid' alt=''/ >
                  </Row>

                  <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 2, 768: 4, 900: 6 }}>
                        <Masonry columnsCount={6} gutter="6px" className="gallery pb-2">
                            {this.state.images.map((item ,index)=>{
                                            return (
                                                    <img key={index} alt='' referrerPolicy="no-referrer" src={this.fetchThumbnailImage(item)} name={item.index} id={item.id} onClick={(event ,url)=>this.openLightBox(event,item.webContentLink)} className='thumbnail-image'/>
                                            )
                                        })}
                        </Masonry>
                </ResponsiveMasonry>
                
                {this.state.showSpinner &&
                    <div style={{height:'100vh'}}>
                        <div className="spinner-border text-primary"></div>
                    </div>
                }
                           
                <LightBox
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                    currentIndex={this.state.currentIndex}
                    showSpinner={this.state.showSpinner}
                    totalCount={this.state.images.length}
                />
            </div>
        );
    }
}

export default LightBoxContainer;