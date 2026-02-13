import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";

import images from "../constents";

export default function FasheCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const BtnVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'ease-in-out',
    },
  },
};

    const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slides = [images.carousel1, images.carousel2, images.carousel3];

  return (
    <div className="relative group w-full h-[500px] md:h-[570px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 4000 }}
        loop
        speed={800}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <img src={img} className="w-full h-full object-cover" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={activeIndex === index ? "visible" : "hidden"}
                className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 md:px-0"
                style={{ perspective: 1000 }}
            >
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl mb-6 drop-shadow-md"
              >
                Women Collection 2018
              </motion.p>

              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-6xl uppercase font-bold mb-4 drop-shadow-lg"
              >
                New Arrivals
              </motion.h2>

              <motion.button
                variants={BtnVariants}
                className="px-11 py-3 text-[17px] uppercase bg-white hover:bg-[#E65540] hover:text-white rounded-full text-black font-light transition"
              >
                Shop Now
              </motion.button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-prev absolute left-10 top-1/2 -translate-y-1/2 z-30
                      opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
                      transition-all duration-300
                      w-10 h-10 flex items-center justify-center
                      rounded-full bg-[#5C5C5E]
                      hover:bg-orange-500 hover:text-white
                      cursor-pointer">
        <AiOutlineLeft className="w-4 h-4" />
      </div>

      <div className="custom-next absolute right-10 top-1/2 -translate-y-1/2 z-30
                      opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
                      transition-all duration-300
                      w-10 h-10 flex items-center justify-center
                      rounded-full bg-[#5C5C5E]
                      hover:bg-orange-500 hover:text-white
                      cursor-pointer">
        <AiOutlineRight className="w-4 h-4" />
      </div>
    </div>
  );
}
