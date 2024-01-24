import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from '@mui/material/Button';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import img from "../../assets/Logo.png";
import Button from "../Button/Button"
import styles from "./Navbar.module.css"
function Navbar() {
  return (
    <div className = {styles.navbarClass}>
        <Logo image ={img}  width ="67px" height ="34px"/>
        <Search placeholder="Search a song of your choice"/>
        <Button text = "Give Feedback"/>
        {/* <Button>Give Feedback</Button> */}
        
    </div>
  );
}

export default Navbar;
