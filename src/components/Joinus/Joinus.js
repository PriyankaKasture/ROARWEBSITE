import React from "react"; 
import { Row, Col ,Form ,Button ,Container ,OverlayTrigger,Popover } from "react-bootstrap";
import $ from "jquery";
import { ReactSVG } from 'react-svg'
import { ToastContainer, toast } from 'react-toastify';



import cleaningRiver from "../../resources/images/ic_cleaning_river.svg";
import art from "../../resources/images/ic_art.svg"
import treeplant from "../../resources/images/ic_tree_plantation.svg"
import fund from "../../resources/images/ic_fundraising.svg";
import photography from "../../resources/images/ic_photography.svg";
import socialmedia from "../../resources/images/ic_sma.svg";
import phone from "../../resources/images/ic_phone_support.svg";
import newsletter from "../../resources/images/ic_nwa.svg";
import watering from "../../resources/images/ic_watering_plants.svg";
import videography from "../../resources/images/ic_videography.svg";
import info from "../../resources/images/ic_info.svg";

import 'react-toastify/dist/ReactToastify.css';

//Styles
import "./Joinus.scss"; 


 class Joinus extends React.Component { 
  constructor() {
    super();

    this.state = {
      items: [
        {
          id:0,
          src:cleaningRiver,
          label:"Cleaning river",
          toolTip:"Participate in a river clean-up activity",
        },
        {
          id:1,
          src:treeplant,
          label:"Tree plantation",
          toolTip:"Plant a tree on actual site after cleaning the area",
        },
        {
          id:2,
          src:watering,
          label:"Watering to plants",
          toolTip:"Give water to plants as per your convenient time",
        },
        {
          id:3,
          src:art,
          label:"Art (wall paint)",
          toolTip:"Participate in street wall arts/paintings",
        },
        {
          id:4,
          src:phone,
          label:"Phone support",
          toolTip:"Guide people about ROAR organization on phone by giving your phone number",
        },
        {
          id:5,
          src:fund,
          label:"Fundraising",
          toolTip:"Help to raise funds for ROAR",
        },
        {
          id:6,
          src:socialmedia,
          label:"Social media awareness",
          toolTip:"Share information and updates related to ROAR on social media",
        },
        {
          id:7,
          src:newsletter,
          label:"Newsletter or writing article",
          toolTip:"Write news/ articles for upcoming/ ongoing/ completed ROAR activities",
        },
        {
          id:8,
          src:photography,
          label:'Photography',
          toolTip:"Participate in Photography of actual sites",
        },
        {
          id:9,
          src:videography,
          label:'Videography',
          toolTip:"Participate in Videography of actual sites",
        },
      ],
      isShiftDown: false,
      selectedItems: [],
      lastSelectedItem: null,
      firstName:"",
      lastName:"",
      email:"",
      phone:"",
      feedback:"",
      showSpinner:false,
    };
  }

  handleSelectItem=(e)=> {
    const { value } = e.target;
    const nextValue = this.getNextValue(value);

    this.setState(prevState=>({ 
      selectedItems: nextValue, 
      lastSelectedItem: value ,
      items:prevState.items.map((item,index)=>{
          return {
            ...item,
            toolTipclicked: false
          };
      })
    }));
  }

  getNextValue=(value)=> {
    const { isShiftDown, selectedItems } = this.state;
    const hasBeenSelected = !selectedItems.includes(value);

    if (isShiftDown) {
      const newSelectedItems = this.getNewSelectedItems(value);
      // de-dupe the array using a Set
      const selections = [...new Set([...selectedItems, ...newSelectedItems])];

      if (!hasBeenSelected) {
        return selections.filter(item => !newSelectedItems.includes(item));
      }

      return selections;
    }
    return selectedItems.includes(value)
    ? selectedItems.filter(item => item !== value)
    : [...selectedItems, value];
  }

  getNewSelectedItems=(value)=> {
    const { lastSelectedItem, items } = this.state;
    const currentSelectedIndex = items.findIndex(item => item.id === value);
    const lastSelectedIndex = items.findIndex(
      item => item.id === lastSelectedItem
    );

    return items
      .slice(
        Math.min(lastSelectedIndex, currentSelectedIndex),
        Math.max(lastSelectedIndex, currentSelectedIndex) + 1
      )
      .map(item => item.id);
  }


  handleInputChange=(event)=> {
    event.preventDefault();

    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
  }


  validateForm=()=>{
    if(this.state.firstName && this.state.lastName && this.state.email && this.state.phone){
        return true
    }else{
      return false;
    }
  }

  handleSubmit = (event) => {

if(this.validateForm()){

  this.setState({
      isValid:"",
      showSpinner:true
    });
    event.preventDefault();

  
    let lengthofCategories=this.state.selectedItems.length;
    let categories=this.state.selectedItems.join(", ");
    console.log("joined",categories ,);

      var form = $('#joinForm');

      var data = form.serializeArray();

      data.push({
        name:"categories",
        value:categories
      })

      //Reset form
      this.setState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        feedback:""
      },()=>{
          var dots = document.querySelectorAll(".select-button");
          for (var n = 0; n < dots.length; ++n) {
              dots[n].classList.remove("active");
          }
      })

      console.log("data" ,data);

      $.ajax({
        // url: "https://172.24.8.22/php/mail.php",
        url: "https://roarformutha.org/php/mail.php",
        type: 'POST',
        data: data,
        success: (data)=> {
            this.setState({
              showSpinner:false
            });
            
            if(lengthofCategories == 0){
              toast.success("Thank you for contacting us. We will get back to you shortly.");
            }else{
              toast.success("Thank you for your interest in contributing to ROAR. We will get back to you shortly.");
            }
        },
        error: (data)=> {
          this.setState({
            showSpinner:false
          });
        },
        complete:() => {
        }
    });

  } else{
      this.setState({
        isValid:"Please fill out all the mandatory fields"
      })
  }
}

handleMobileTooltip=(event ,id)=>{
  event.preventDefault();

   this.setState(prevState => ({
    items: prevState.items.map((item, index) => {
      if (item.id === id) {
        return {
          ...item,
          toolTipclicked: !item.toolTipclicked
        };
      } else {
        return {
          ...item,
          toolTipclicked: false
        };
      }
    })
  }),()=>{
    console.log("items",this.state.items);
  });
}

  renderItems=()=> {
    const { items } = this.state;
    return items.map(item => {
      const { id, label ,src } = item;
      return (
        <React.Fragment>
        <Col lg={4} md={6} sm={12} key={id} className="select-container">
          <label className={"w-100 d-flex align-items-center"}>
            { 
            <OverlayTrigger
            // key={placement}
            placement="bottom"
            trigger={["hover","focus"]}
            overlay={
              <Popover id="custom-popover">
                <div className="tooltip-arrow"></div>
                <Popover.Body>
                  {item.toolTip}
                </Popover.Body>
              </Popover>
            }
          >
            <div className="select-button w-100">
                <input 
                  type="checkbox"  
                  onChange={this.handleSelectItem}
                  value={label}
                  id={`item-${id}`} />
                  <div className="w-100 selected-button"> 
                    <div className="d-flex align-items-center text-left">
                      <span><ReactSVG src={src} alt="img"/></span>
                      <span className="select-text col-10 pl-1">{label}</span>
                    </div>
                  </div>
            </div>
            </OverlayTrigger>
            }
             <ReactSVG src={info} alt="info" onClick={(event)=>this.handleMobileTooltip(event,id)} className="info-icon d-xl-none"/>
          </label>
          <Col sm={12} className="d-xl-none tooltip-text">
            {(item.toolTipclicked)  && item.toolTip}
          </Col>
        </Col>
      
        </React.Fragment>
      );
    });
  }

   render () { 
     return ( 
        <Form 
          method="post" 
          noValidate id="joinForm"
          className="joinus-wrapper">
          <Container>
          <div className="join-us-selector py-2">
            <div className="title text-left px-3">I would like to contribute</div>
            <Row className="pt-3 mx-0">{this.renderItems()}</Row>
          </div>
            <div className="form p-3 px-3">
              <Row className="mx-0 text-danger">{<div>{this.state.isValid}</div>}</Row>
              <Row>
                <Col md={6} className="py-2">
                  <Form.Control required name="firstName" value={this.state.firstName} onChange={this.handleInputChange} type="text" placeholder="First Name *" />
                </Col>
                <Col md={6} className="py-2">
                  <Form.Control required name="lastName" value={this.state.lastName} onChange={this.handleInputChange} type="text" placeholder="Last Name *" />
                </Col>
                <Col md={6} className="py-2">
                  <Form.Control required  name="email" value={this.state.email} onChange={this.handleInputChange} type="email" placeholder="Email *" />
                </Col>
                <Col md={6} className="py-2">
                  <Form.Control name="phone" value={this.state.phone} onChange={this.handleInputChange} type="number" placeholder="Phone number *" />
                </Col>
                <Col md={6} className="py-2">
                  <Form.Control name="feedback" value={this.state.feedback} onChange={this.handleInputChange} as="textarea" className="textarea" rows={3} placeholder="Send a message/ query/ suggestion/ comment/ feedback to us…" />
                </Col>
                <Col lg={3} md={4} className="py-2 d-flex align-items-end">
                  <Button className="w-100 join-button" onClick={this.handleSubmit}>Join the Cause</Button>
                </Col>
              </Row>
              {this.state.showSpinner &&<div className="spinner-border"></div> }
              
            </div>
            <ToastContainer 
              position="bottom-center"
              autoClose={2000}
              hideProgressBar={true}
            />
            </Container>
        </Form>
      
    ) 
  } 
} 


export default Joinus  