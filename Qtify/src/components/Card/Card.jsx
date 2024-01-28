import React from 'react'
import styles from "./Card.module.css";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
const Card = ({data,type}) => {
    const getCard = ()=>{
        switch(type){
            case "songs":{
                const{image,follows,title,slug,songs,likes}=data;
                return ( 
                
                   
                         <div className ={styles.wrapper}>
    
                            <div className = {styles.card}>
                                <img src = {image} alt ="album"/>
                                <div className={styles.banner}>
                                    <div className ={styles.pill}>
                                        <p>{likes} likes</p>
                                    </div>
                                </div>
    
                            </div>
                            <div className={styles.titleWrapper}>
                                <p>{title}</p>
                            </div>
    
                         </div>
                      
        );
               
      }
     case "album":{
                const{image,follows,title,slug,songs}=data;
                return ( 
                
                    <Tooltip title = {`${songs.length}`} placement = 'top' arrow >
                         <div className ={styles.wrapper}>
    
                            <div className = {styles.card}>
                                <img src = {image} alt ="album"/>
                                <div className={styles.banner}>
                                    <Chip label ={`${follows} Follows`}
                                    size = "small"
                                    className = {styles.chip}    />
                                </div>
    
                            </div>
                            <div className={styles.titleWrapper}>
                                <p>{title}</p>
                            </div>
    
                         </div>
    
    
                    </Tooltip>
        )
               
      
            }
        default: {
                <></>
            }
        }

    }
   
  
return getCard(type);

}

export default Card