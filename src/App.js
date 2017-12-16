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
      orderDir: 'asc',
      queryText: ''
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

  handleSort(orderBy, orderDir){
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    })}

    onSearchTitle(query){
      
        this.setState({
          queryText: query
        })
    }
  render() {   
    let tempData = [];
    let orderBy = this.state.orderBy;
    let orderDir = this.state.orderDir;
    let myApt = this.state.data;
    let queryText = this.state.queryText;

    myApt.forEach(item => {
      if (
        (item.petName.toLowerCase().indexOf(queryText) !==-1) ||
        (item.ownerName.toLowerCase().indexOf(queryText) !==-1 )||
        (item.aptNotes.toLowerCase().indexOf(queryText) !==-1 )
      ){
        tempData.push(item);
        
      }
    })

    

    if(orderDir === 'asc'){
      tempData.sort((a,b) =>{
        return  a[orderBy].toLowerCase() > b[orderBy].toLowerCase();
      })
    } else if(orderDir === 'desc'){
      tempData.sort((a,b) => {
        return b[orderBy].toLowerCase() > a[orderBy].toLowerCase();
      })
    }
    
     let filterApt = tempData.map((item, index) =>  <AptList data={item} 
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
                            orderDir={this.state.orderDir}
                            onSearch = {this.onSearchTitle.bind(this)}/>
          <ul className="item-list media-list">   
          { filterApt }        
          </ul>
        </div>
      </div>
    );
  }
}

export default MainInterface;
