import React, { Component } from 'react';
import styles from './App.css';
import Navbar from './Tools/Navbar'

class App extends Component {

    render() {
      return(
        <div className= {styles.App}>
          <Navbar></Navbar>

          <div className = {styles.MainContainer}>
            <div className = {styles.SubContainer}>
              <h2 className = {styles.h2}>Custom TTT</h2>
              <p className = {styles.p}>An extension for the garrysmod gamemode TTT, adding additional gameplay elements and custom models</p>
            </div>
            <div className = {styles.SubContainer}>
              <h2 className = {styles.h2}>Nost</h2>
              <p className = {styles.p}>A 3D puzzle game about using physics to move a ball to the end of a maze</p>
            </div>
          </div>
        </div>
      ); 
  }
}

export default App;
