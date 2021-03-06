import React, { Component } from 'react';

export class RoomList extends Component {
  constructor(props) {
    super(props);

     this.state = {
       title: "",
       rooms: []
     };

     this.roomsRef = this.props.firebase.database().ref('rooms');
     this.handleChange=this.handleChange.bind(this);
     this.createRoom=this.createRoom.bind(this);
  }
  handleChange(e){
    this.setState({title: e.target.value})
  }
  createRoom(e){
    e.preventDefault();

    this.roomsRef.push({ name: this.state.title });

    this.setState({ title: "" });
  }
  selectRoom(room,e){
    this.props.activeRoom(room);
  }
 componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) })
     });
 }
 render() {
   const roomForm = (
       <form onSubmit={this.createRoom}>
         <input type="text" value={this.state.title} placeholder="Enter a new room name" onChange={this.handleChange}/>
         <input type="submit" value="Create Room" />
       </form>
     );
   const roomList = this.state.rooms.map((room) =>
       <li key={room.key} onClick={(e) => this.selectRoom(room,e)}>{room.name}</li>
     );
   return(
     <div>
         <div>{roomForm}</div>
         <ul>{roomList}</ul>
    </div>
   );
 }
}
