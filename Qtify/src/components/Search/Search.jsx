
import React from "react";
import styles from "./Search.module.css";
import searchIcon from "../../assets/searchIcon.png";

export default function Search({typingText}){

    const handleSubmit=(event)=>{
        event.preventDefault();
    }
    return (

    <form onSubmit={(handleSubmit)}  className={styles.flexClass}>
        <input
        required
        placeholder={typingText}
        type = "text"
        className={styles.searchbar}/>

        <button className = {styles.buttonsetup}>
            
        <img src = {searchIcon} alt="no image" />
        </button>

    </form>)

}