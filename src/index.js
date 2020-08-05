import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const firebase = require("firebase");
require("firebase/firestore");

const app = firebase.initializeApp({
  apiKey: "AIzaSyDgyIL9Tyu6_I2VlSgNFg5VXjLIQd4916w",
  authDomain: "chat-app-a3eb0.firebaseapp.com",
  databaseURL: "https://chat-app-a3eb0.firebaseio.com",
  projectId: "chat-app-a3eb0",
  storageBucket: "chat-app-a3eb0.appspot.com",
  messagingSenderId: "171623050926",
  appId: "1:171623050926:web:3c23b2ef7878f283b5073f",
  measurementId: "G-ZZWC1E6EKF"
});

ReactDOM.render(
  <React.StrictMode>
  <div>Hello, world!</div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
