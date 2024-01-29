import React , {useEffect,useState} from 'react'
import {useSwiper} from 'swiper/react';
import styles from "./CarouselRightNavigation.module.css"
import { ReactComponent as RightArrow } from '../../../assets/RightArrow.svg';

const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const[isEnd,setIsEnd] = useState(swiper.isEnd);
    // useEffect(()=>{
    //     swiper.on("slideChange",function(){
    //         setIsEnd(swiper.isEnd);
    //     })
 
    // },[]);
    useEffect(() => {
      const slideChangeHandler = () => {
          setIsEnd(swiper.isEnd);
      };

      swiper.on("slideChange", slideChangeHandler);

      // Clean up the event listener when the component unmounts
      return () => {
          swiper.off("slideChange", slideChangeHandler);
      };
  }, [swiper]);
  return (
    <div className={styles.rightNavigationArrow}>
        
        
        {
            !isEnd&&<RightArrow onClick={() => swiper.slideNext()}/>
            }
        
    </div>
  )
}

export default CarouselRightNavigation