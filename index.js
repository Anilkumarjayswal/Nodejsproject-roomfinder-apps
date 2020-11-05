import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'materialize-css/dist/css/materialize.min.css'
import 'jquery/src/jquery'; 
// import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {RoomProvider} from './context'

ReactDOM.render(
    <RoomProvider>
    <App />
    </RoomProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
