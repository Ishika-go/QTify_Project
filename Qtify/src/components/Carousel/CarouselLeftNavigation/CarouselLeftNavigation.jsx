import React , {useEffect,useState} from 'react';
import {useSwiper} from 'swiper/react';
import styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from '../../../assets/LeftArrow.svg';

function CarouselLeftNavigation(){
    const swiper = useSwiper();

    const[isBeginning,setIsBeginning] = useState(swiper.isBeginning);

        useEffect(() => {
      const slideChangeHandler = () => {
          setIsBeginning(swiper.isBeginning);
      };

      swiper.on("slideChange", slideChangeHandler);

 
      // return () => {
      //     swiper.off("slideChange", slideChangeHandler);
      // };
  }, [swiper.isBeginning]); 

  return (
    <div className = {styles.leftNavigationArrow}>
        
        
      
        {!isBeginning?<LeftArrow onClick={()=>swiper.slidePrev()}/>:null}
           
        
    </div>
  );
}

export default CarouselLeftNavigation;