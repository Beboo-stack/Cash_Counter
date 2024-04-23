"use client";
import React from "react";
import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Autoplay]); // Register Swiper modules

const CarouselHero = () => {
  const sliderRef = useRef(null);

  const images = [
    {
      src: "/1.jpg",
      type: "image",
    },
    {
      src: "/2.jpg",
      type: "image",
    },
    {
      src: "/3.jpg",
      type: "image",
    },
    {
      src: "/4.jpg",
      type: "image",
    },
    {
      src: "/5.jpg",
      type: "image",
    },
    {
      src: "/video.mp4",
    },
  ];

  return (
    <div id="products" className="p slider-container max-w-xs md:max-w-lg  ">
<p className="text-5xl font-bold mb-10 text-center text-orange-500">Product</p>
      <Swiper
        ref={sliderRef}
        spaceBetween={30} // Add spacing between slides
        slidesPerView={1} // Show one slide at a time
        navigation // Enable navigation arrows
        autoplay={{ delay: 3000 }} // Optional: Enable autoplay with 3 seconds delay
      >
        {images.map((item) => (
          <SwiperSlide key={item.src}>
            {item.type === "image" ? (
              <Image src={item.src} alt="" width={500} height={500} />
            ) : (
              <video className="w-full h-full self-center" controls>
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselHero;
