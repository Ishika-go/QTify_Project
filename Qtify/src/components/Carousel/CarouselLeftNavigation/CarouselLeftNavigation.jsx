import React , {useEffect,useState} from 'react';
import {useSwiper} from 'swiper/react';
import styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from '../../../assets/LeftArrow.svg';

const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const[isBeginning,setIsBeginning] = useState(swiper.isBeginning);
    // useEffect(()=>{
    //     swiper.on("slideChange",function(){
    //         setIsBeginning(swiper.isBeginning);
    //     })

    // },[]);
    useEffect(() => {
      const slideChangeHandler = () => {
          setIsBeginning(swiper.isBeginning);
      };

      swiper.on("slideChange", slideChangeHandler);

      // Clean up the event listener when the component unmounts
      return () => {
          swiper.off("slideChange", slideChangeHandler);
      };
  }, [swiper]); 
  return (
    <div className = {styles.leftNavigationArrow}>
        
        
        {
            !isBeginning&&<LeftArrow onClick={()=>swiper.slidePrev()}/>
            }
        
    </div>
  );
}

export default CarouselLeftNavigation