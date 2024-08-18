import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/assets/slides/Slide1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/slides/Slide2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/slides/Slide3.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}