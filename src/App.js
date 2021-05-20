import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar"
import TableBody from "./components/TableBody";
import TableHeader from "./components/TableHeader";
import employees from "./employees.json";


let sortArrow="bi bi-caret-down";
class App extends Component {
  state = {
    employees,
    sortArrow,
    searchField:"",
    quote:"Engage!"
  };

//Sorts columns alphabetically.
//toggles between ascending and descending. 
//Called with an onClick
  onSort(event, sortKey) {
    let randomBoolean = Math.random() < 0.5;
    let randBool=randomBoolean;
    const employees = this.state.employees;
    //ascending
    if(randBool){
      employees.sort((a,b) => b[sortKey].localeCompare(a[sortKey]))
      sortArrow="bi bi-caret-up";
      //descending
    } else {
      employees.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
      sortArrow="bi bi-caret-down";
    }
    randBool = !randomBoolean
    this.setState({ employees, sortArrow })
  }


  render() {
    const {employees, searchField}=this.state;
  // filters employees array to only include employees that match the searchField value
    const filteredEmployees = employees.filter((item)=>(
      item.name.toLowerCase().includes(searchField.toLowerCase()) || 
      item.occupation.toLowerCase().includes(searchField.toLowerCase()) ||
      item.location.toLowerCase().includes(searchField.toLowerCase()) ||
      item.email.toLowerCase().includes(searchField.toLowerCase())
    ));
    return (
      <Wrapper>
        <Title/>
    
        <NavBar handleChange={(e)=>this.setState({searchField: e.target.value})}/>

        <TableHeader>
          <tr>
            <th scope="col">#</th>
            <th scope="col" >Image</th>
            <th scope="col" onClick={e => this.onSort(e, 'name')}><button className="button btn">Name<i className={this.state.sortArrow}></i></button></th>
            <th scope="col" onClick={e => this.onSort(e, 'occupation')}><button className="button btn">Occupation<i className={this.state.sortArrow}></i></button></th>
            <th scope="col" onClick={e => this.onSort(e, 'location')}><button className="button btn">Location<i className={this.state.sortArrow}></i></button></th>
            <th scope="col" onClick={e => this.onSort(e, 'email')}><button className="button btn">Email<i className={this.state.sortArrow}></i></button></th>
          </tr>

 {/* Renders all employees that match the search input by mapping through filteredEmployees */}
          {filteredEmployees.map((employee) => (
            <TableBody
            key={employee.id}
            id={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}
            email={employee.email}
            />
            ))}
        </TableHeader>
      </Wrapper>
    );
  }
}

export default App;
