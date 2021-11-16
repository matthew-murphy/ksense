import React, { Component } from "react";
import "./popup.css"
 
class PopUp extends Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <div>{this.props.title}</div>
            <div>{this.props.body}</div>
          <button onClick={this.props.closePopup}>close me</button>
          </div>
        </div>
      );
    }
  }
export default PopUp;