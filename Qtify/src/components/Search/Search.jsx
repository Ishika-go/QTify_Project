
import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/searchicon.svg";

export default function Search({placeholder}){

    const handleSubmit=(event)=>{
        event.preventDefault();
    } 
    return (

    <form onSubmit={(handleSubmit)}  className={styles.wrapper}>
        
        <input
        required
        placeholder={placeholder}
        type = "text"
        className={styles.searchbar}/>

        <button className = {styles.buttonsetup}>
            <SearchIcon />
        {/* <img src = {searchIcon} alt="no image" /> */}
        </button>

    </form>)

}