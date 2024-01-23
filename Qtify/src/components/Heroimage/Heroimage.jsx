// import React from "react";
import styles from "./Heroimage.module.css";

import heroimage from "../../assets/heroimage.png";

function Heroimage() {
  return (
    <div className={styles.divOfHeroimage}>
     
      <img className={styles.heroimage} src={heroimage} />
    </div>
  );
}

export default Heroimage;