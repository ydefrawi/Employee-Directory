import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import NavBar from "./components/NavBar"
import TableBody from "./components/TableBody";
import TableHeader from "./components/TableHeader";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  logState = (state) => {
    return console.log(state)
  }

  randBoolean = () =>{
    let randomBoolean = Math.random() < 0.5;
    return randomBoolean
  }

  onSort(event, sortKey) {
    let randomBoolean = Math.random() < 0.5;
    let randBool=randomBoolean;
    const friends = this.state.friends;
    //ascending
    if(randomBoolean){friends.sort((a,b) => b[sortKey].localeCompare(a[sortKey]))
    } else {friends.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
    }
    randBool = !randomBoolean
    //descending
    this.setState({ friends })
  }


  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar />
        <TableHeader>
          <tr>
            <th scope="col">#</th>
            <th scope="col" onClick={e => this.onSort(e, 'name')}>Name</th>
            <th scope="col" onClick={e => this.onSort(e, 'name')}>Occupation</th>
            <th scope="col">Location</th>
          </tr>
          {this.state.friends.map(friend => (
            <TableBody
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </TableHeader>
        {/* <Title>Friends List</Title> */}
        {/* {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))} */}
      </Wrapper>
    );
  }
}

export default App;
