import React, { Component } from 'react';

import './App.css';
import $ from 'jquery';
import data from './js/data.json';
import AptList from './AptList';
import AddAppointment from './AddAppoinment';
import SearchAppointment from './SearchAppointment';
window.jQuery = window.$ = $;

class MainInterface extends Component {
  constructor(props){
    super(props)
    this.state = {
      bodyAppointmentVisible: false,
      data: data,
      orderBy: 'petName',
      orderDir: 'asc'
    }
  }

  deleteItem(id){
    let deleteUpdate = this.state.data.filter((item,index) => index !== id);
    this.setState({
      data: deleteUpdate
    })
  }
  toogleApointment(){
    let tempVisible = !this.state.bodyAppointmentVisible;
    this.setState({
      bodyAppointmentVisible: tempVisible
    })
    
  }
  addAppointment(input){
    let tempData = this.state.data;
    tempData.push(input);
    
    this.setState({
      data: tempData,
      bodyAppointmentVisible: false
    })
  }
  handleSort(orderBy,orderDir){
    let tempData = this.state.data;
   

    if(orderDir === 'asc'){
      tempData.sort((a,b) => {
        return a[orderBy] - b[orderBy];
      })
    } else if(orderDir === 'desc'){
      tempData.sort((a,b) => {
        return b[orderBy] - a[orderBy];
      })
    }
    
  }
  render() {   
    let filterApt = this.state.data.map((item, index) =>  <AptList data={item} 
                                                                    key={index} 
                                                                    index={index} 
                                                                    onDelete={this.deleteItem.bind(this)}/>)
    return (
      <div className="interface">
        <div className="item-list media-list">
        
        <AddAppointment bodyAppointment={this.state.bodyAppointmentVisible}
                        onToogleAppointment={this.toogleApointment.bind(this)}
                        addAppointment={this.addAppointment.bind(this)}/>
        <SearchAppointment handleSort={this.handleSort.bind(this)}
                            orderBy={this.state.orderBy}
                            orderDir={this.state.orderDir}/>
          <ul className="item-list media-list">   
          { filterApt }        
          </ul>
        </div>
      </div>
    );
  }
}

export default MainInterface;
