import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { RoomList } from './components/RoomList.js';
import { MessageList } from './components/MessageList.js';
import { User } from './components/User.js';

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
  constructor(props){
    super(props);
    this.state={
      activeRoom:"",
      user: null
    };
    this.activeRoom=this.activeRoom.bind(this);
    this.setUser=this.setUser.bind(this);
  }
  setUser(theUser){
    this.setState({user: theUser});
  }
  activeRoom(theRoom){
    this.setState({activeRoom: theRoom})
  }
  render() {
    const current=this.state.activeRoom;
    return (
      <div className="App">
        <User firebase={firebase} setUser={this.setUser} />
        <h1>Chat Rooms</h1>
        <RoomList firebase={firebase} activeRoom={this.activeRoom}/>
        <h2>{this.state.activeRoom.name || "Enter a chat room"}</h2>
        { current ? (<MessageList firebase={firebase} activeRoom={this.state.activeRoom.key}/>)
            :(null)
        }
      </div>
    );
  }
}

export default App;
