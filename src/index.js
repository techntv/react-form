import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainInterface from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
window.jQuery = window.$ = $;

ReactDOM.render(<MainInterface />, document.getElementById('petAppointments'));
registerServiceWorker();
