import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import firebase from 'firebase';
firebase.initializeApp({
    apiKey: "AIzaSyAGIRaFLne8BmOFxxhKLC1Y0jH5Ksv1v1c",
    authDomain: "pruebas-c2c70.firebaseapp.com",
    databaseURL: "https://pruebas-c2c70.firebaseio.com",
    projectId: "pruebas-c2c70",
    storageBucket: "pruebas-c2c70.appspot.com",
    messagingSenderId: "1072096586333",
    appId: "1:1072096586333:web:38028bed7c95b5ac"
});


ReactDOM.render(
    <Router>
        <App/>
    </Router>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();