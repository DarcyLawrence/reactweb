import React, { Component } from 'react';
import styles from  './Navbar.module.css';

export class NavBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        }
      }

    onHover = () => {
        return{
            borderBottom: '4px solid #adadad',
        }
    }
    onLeave = () => {
        return{
            borderBottom: '1px solid #adadad',
        }
    }

    getStyle = () => {
        return{
            marginTop: '8px',
            marginBottom: '16px',
            marginLeft: '64px',
            marginRight: '64px',
            padding: '8px',
            fontSize: '150%',
        }
    }

    render() {

        return (
            <div style= {styles.body}>
                <h1>Darcy Lawrence</h1>

                <button className = {styles.navbutton}> Programming </button> 

            </div>
        );
    }
}

export default NavBar;
