"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import client from "@/app/utils/utils";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Autoplay]); // Register Swiper modules

const CarouselHero = () => {
  // Data Store
  const [data, setData] = useState([]);

  // Fetch Data
  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "product",
      });
      setData(response.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

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
      src: "/6.jpg",
      type: "image",
    },
    {
      src: "/7.jpg",
      type: "image",
    },
    {
      src: "/8.jpg",
      type: "image",
    },
  ];

  return (
    <div
      id="products"
      className="mb-[100px] slider-container max-w-sm md:max-w-2xl lg:w-[1000px] "
    >
      <p className="text-4xl md:text-5xl font-bold mb-10 text-center text-orange-500">
        Product
      </p>
      <Swiper
        ref={sliderRef}
        spaceBetween={30} // Add spacing between slides
        slidesPerView={1} // Show one slide at a time
        navigation // Enable navigation arrows
        className="w-full"
        autoplay={{ delay: 3000, disableOnInteraction: true }} // Optional: Enable autoplay with 3 seconds delay
      >
        {images.map((item) => (
          <SwiperSlide key={item.src}>
            {/* <Image
            key={item.src}
              alt=""
              src={
                "http:" +
                item?.fields?.slider?.map(
                  (asset) => asset?.fields?.file?.url
                )[0]
              }
              width={500}
              height={500}
              className="w-full"
            /> */}

            <Image
              src={item.src}
              alt=""
              className="w-full object-fill"
              width={500}
              height={500}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselHero;
