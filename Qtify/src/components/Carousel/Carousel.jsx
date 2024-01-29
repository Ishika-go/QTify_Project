import React,{ useEffect } from 'react';
import styles from './Carousel.module.css';
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

import "swiper/css";


const Controls = ({ data }) => {
    const swiper = useSwiper();
  
    useEffect(() => {
      const slideToCallback = () => {
        swiper.slideTo(0);
      };
  
      swiper.on("slideChange", slideToCallback);
  
      // Clean up the event listener when the component unmounts
      return () => {
        swiper.off("slideChange", slideToCallback);
      };
    }, [data, swiper]);
  
    return <></>;
  };

// const Controls =({data})=>{
//     const swiper = useSwiper();
//     useEffect(()=>{
//       swiper.slideTo(0);
//     },[data]);
//     return <></>;
  
//   }
const Carousel = ({data,renderComponent}) => {
  return (
    <div className = {styles.wraper}>
        <Swiper 
        style={{padding: "0px 20px"}}
        initialSlide = {0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
        >
            <Controls data={data}/>
            <CarouselLeftNavigation />
            <CarouselRightNavigation />
           {data&&data.map((element)=>{
                return (<SwiperSlide>{renderComponent(element)}</SwiperSlide>)
           })} 
        </Swiper>
        </div>
  );
}

export default Carousel;