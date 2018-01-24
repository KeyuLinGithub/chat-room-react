import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import { RoomList } from './components/RoomList.js';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDy31wNXmAlpi_GosZurkeu2qTUKkXik2Q",
    authDomain: "chat-room-react-a47d0.firebaseapp.com",
    databaseURL: "https://chat-room-react-a47d0.firebaseio.com",
    projectId: "chat-room-react-a47d0",
    storageBucket: "chat-room-react-a47d0.appspot.com",
    messagingSenderId: "538845481925"
  };
  firebase.initializeApp(config);

class App extends Component {

  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase}/>
      </div>
    );
  }
}

export default App;
