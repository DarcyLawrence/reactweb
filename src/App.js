import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Navbar from './Tools/Navbar'

class App extends Component {

  state = {
    persons: [
      { name: "Darcy", age: 27 },
      { name: "Sergio", age: 25 },
      { name: "Marcus", age: 26 }
    ]
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <h1>Darcy's React App</h1>
        <p>Its a test paragraph!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Being Insane</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
