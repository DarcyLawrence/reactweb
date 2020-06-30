import React from 'react';
import styles from  './navBar.module.css';

const navbar = props => {
    return (
        <div className = {styles.Navbar}>
            <h1>Darcy Lawrence</h1>

            <button className = {styles.navbutton}> Programming </button> 
            <button className = {styles.navbutton}> 3D Modeling </button> 
            <a href = 'https://github.com/DarcyLawrence' target="_blank">
                <button className = {styles.navbutton}> 
                GitHub &nbsp;
                <img className = {styles.img} src = {require('../Assets/icons8-github-50.png')} alt = ""/></button>
            </a>
        </div>
    );
};

export default navbar;
