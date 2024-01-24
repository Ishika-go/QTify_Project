// import React from "react";
import styles from "./Heroimage.module.css";

import heroimage from "../../assets/vibrating-headphone.png";
import Logo from '../Logo/Logo';
function Heroimage() {
  return (
    <div className={styles.divOfHeroimage}>
      <div className={styles.title}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>and “Over thousands podcast episodes</h1>
      </div>
     
      {/* <img className={styles.heroimage} src={heroimage} /> */}
      <Logo image ={heroimage}  width ="212px" height ="212px"/>
    </div>
  );
}

export default Heroimage;