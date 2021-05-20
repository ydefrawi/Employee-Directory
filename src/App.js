import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar"
import TableBody from "./components/TableBody";
import TableHeader from "./components/TableHeader";
import employees from "./employees.json";
// import API from "./utils/API";
let sortArrow="bi bi-caret-down";
// let filteredEmployees=[];
class App extends Component {
  state = {
    employees,
    sortArrow,
    searchField:"",
  };


  logState = (state) => {
    return console.log(state)
  }


  // apiCall = () =>{
  //   API.search
  //   .then(res => (res.data))
  //   .catch(err => console.log(err));
  // }
  // randBoolean = () =>{
  //   let randomBoolean = Math.random() < 0.5;
  //   return randomBoolean
  // }

  onSort(event, sortKey) {
    let randomBoolean = Math.random() < 0.5;
    let randBool=randomBoolean;
    const employees = this.state.employees;
    //ascending
    if(randBool){
      employees.sort((a,b) => b[sortKey].localeCompare(a[sortKey]))
      sortArrow="bi bi-caret-up";
    } else {
      employees.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
      sortArrow="bi bi-caret-down";
    }
    randBool = !randomBoolean
    //descending
    this.setState({ employees, sortArrow })
  }

  // searchHandler=(string)=>{
  //   const employees=this.state;
  //   const searchField=this.state;
  //   const filteredEmployees = employees.filter(item=>(
  //     item.name.toLowerCase().includes(searchField.toLowerCase())
  //   ))
  //   console.log(employees)
  //   return filteredEmployees;
  // }

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    const {employees, searchField}=this.state;
    const filteredEmployees = employees.filter((item)=>(
      item.name.toLowerCase().includes(searchField.toLowerCase())
    ));
    return (
      <Wrapper>
        <Title/>
        {/* {this.apiCall()} */}
        <NavBar 
        handleChange={(e)=>this.setState({searchField: e.target.value})} />
        <TableHeader>
          <tr>
            <th scope="col">#</th>
            <th scope="col" >Image</th>
            <th scope="col" onClick={e => this.onSort(e, 'name')}><button className="button btn">Name<i className={this.state.sortArrow}></i></button></th>
            <th scope="col" onClick={e => this.onSort(e, 'occupation')}><button className="button btn">Occupation<i className={this.state.sortArrow}></i></button></th>
            <th scope="col">Location</th>
            <th scope="col">Phone</th>
          </tr>
          {filteredEmployees.map((employee) => (
            <TableBody
              key={employee.id}
              id={employee.id}
              name={employee.name}
              image={employee.image}
              occupation={employee.occupation}
              location={employee.location}
              phone={employee.phone}
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
