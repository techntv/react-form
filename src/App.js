import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import data from './js/data.json';
import AptList from './AptList';
window.jQuery = window.$ = $;

class MainInterface extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: data 
    }
  }
  
  render() {    
    return (
      <div className="interface">
        <div className="item-list media-list">
          <ul className="item-list media-list">   
          {
            this.state.data.map((item, index) =>  <AptList data={item} key={index}/>)
          }        
          </ul>
        </div>
      </div>
    );
  }
}

export default MainInterface;
