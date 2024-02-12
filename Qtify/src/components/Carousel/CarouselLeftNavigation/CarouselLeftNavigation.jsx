import React , {useEffect,useState} from 'react';
import {useSwiper} from 'swiper/react';
import styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from '../../../assets/LeftArrow.svg';

function CarouselLeftNavigation(){
    const swiper = useSwiper();

    const[isBeginning,setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
      swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
      });
      }, [swiper.isBeginning,isBeginning]);

  return (
    <div className = {styles.leftNavigationArrow}>
        
        
      
       {!isBeginning?<LeftArrow onClick={()=>swiper.slidePrev()}/>:null}
           
        
    </div>
  );
}

export default CarouselLeftNavigation;