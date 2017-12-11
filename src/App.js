import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import data from './js/data.json';
import AptList from './AptList';
import AddAppointment from './AddAppoinment';
window.jQuery = window.$ = $;

class MainInterface extends Component {
  constructor(props){
    super(props)
    this.state = {
      bodyAppointmentVisible: false,
      data: data 
    }
  }

  deleteItem(id){
    let deleteUpdate = this.state.data.filter((item,index) => index !== id);
    this.setState({
      data: deleteUpdate
    })
    console.log('click delete ' + id);
  }
  toogleApointment(){
    // let tempVisible = !this.state.bodyAppointmentVisible;
    // this.setState({
    //   bodyAppointment: tempVisible
    // })
    console.log('toogle')
  }
  render() {    
    return (
      <div className="interface">
        <div className="item-list media-list">
        <AddAppointment bodyAppointment={this.state.bodyAppointmentVisible}/>
          <ul className="item-list media-list">   
          {
            this.state.data.map((item, index) =>  <AptList data={item} 
                                                           key={index} 
                                                           index={index} 
                                                           onDelete={this.deleteItem.bind(this)}
                                                           onToogleAppointment={this.toogleApointment.bind(this)}
                                                  />)
          }        
          </ul>
        </div>
      </div>
    );
  }
}

export default MainInterface;
