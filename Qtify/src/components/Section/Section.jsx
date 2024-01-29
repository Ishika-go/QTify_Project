import React from 'react';
import { useState } from 'react';
import styles from "./Section.module.css";
import { CircularProgress } from '@mui/material';
import Card from "../Card/Card";
import Carousel from '../Carousel/Carousel';

const Section = ({data,title,type}) => {
    const[carouselToggle,setCarouselToggle] = useState(true);
    
    const handleToggle=()=>{
        setCarouselToggle((carouselToggle)=>{
            return !carouselToggle;
        });
    }
     console.log(data);
      
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle}>
                {carouselToggle?"Show All":"Collapse"}
            </h4>
        </div>
                {(data.length===0) ?(<CircularProgress />):(
                    <div className = {styles.cardWrapper}>{!carouselToggle?(<div className ={styles.wrapper}>
                        {data.map((topAlbum)=>(
  <Card data ={topAlbum} type={type} key={topAlbum.id} />
))}
                    </div>):(
                       
                    <Carousel data = {data} renderComponent={(data)=><Card data = {data} type = {type} key={data.id}/>} /> )}</div>
                )}

    </div>
    
  );
};

export default Section;

