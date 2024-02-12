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
      console.log(isEnd);
      swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
      });
      }, [swiper.isEnd]);
  return (
    <div className={styles.rightNavigationArrow}>
        
        
        
            {!isEnd?<RightArrow onClick={() => swiper.slideNext()}/>:null}
            
        
    </div>
  )
}

export default CarouselRightNavigation