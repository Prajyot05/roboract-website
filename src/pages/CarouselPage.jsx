// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { Pagination, Navigation } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide><img src="/assets/slides/Slide1.jpg" alt="" /></SwiperSlide>
//         <SwiperSlide><img src="/assets/slides/Slide2.jpg" alt="" /></SwiperSlide>
//         <SwiperSlide><img src="/assets/slides/Slide3.jpg" alt="" /></SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
import React, { useEffect, useRef, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

const Gallery = () => {
    
  const [isNavigationEnabled, setIsNavigationEnabled] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsNavigationEnabled(false);
    } else {
      setIsNavigationEnabled(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
    return (
    <div className='gallery py-20'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        navigation={isNavigationEnabled}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1.5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/assets/slides/Slide1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/slides/Slide2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/slides/Slide3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/slides/Slide1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/slides/Slide2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/slides/Slide3.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
    );
};
  
export default Gallery;  