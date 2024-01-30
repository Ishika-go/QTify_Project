import React from 'react';
import { useState } from 'react';
import styles from "./Section.module.css";
import { CircularProgress } from '@mui/material';
import Card from "../Card/Card";
import Carousel from '../Carousel/Carousel';
import BasicTabs from "../Tabs/Tabs";
import Box from '@mui/material/Box';
const Section = ({data,title,type,filteredDataValues=[],toggle=false,handleToggle=null,value=0,handleChange=null}) => {
    //    const[carouselToggle,setCarouselToggle] = useState(true);
    
    // const handleToggle=()=>{
    //     setCarouselToggle((carouselToggle)=>{
    //         return !carouselToggle;
    //     });
    // }
    //  console.log(data);
      
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle}>
                {!toggle?"Show All":"Collapse"}
            </h4>
        </div>
        {type==="song"?<BasicTabs value = {value} handleChange={handleChange}/>:null}

                {(data.length===0) ?(
                    <Box sx={{display:'flex',justifyContent:"center",alignItems:"center"}}> <CircularProgress /></Box>
               ):(
                    <div className = {styles.cardWrapper}>{toggle?(<div className ={styles.wrapper}>
                        {filteredDataValues.map((album)=>(
  <Card data ={album} type={type} key={album.id} />
))}
                    </div>):(
                       
                    <Carousel data = {filteredDataValues} renderComponent={(data)=><Card data = {data} type = {type} key={data.id}/>} /> )}</div>
                )}

    </div>
    
  );
};

export default Section;

