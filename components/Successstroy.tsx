import React from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import julian from "@/public/assets/testimonial/julian.png";
import cia from "@/public/assets/testimonial/cia.png";
import marc from "@/public/assets/testimonial/marc.png";
import breanna from "@/public/assets/testimonial/breanna.png";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const Successstory: React.FC = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Julian De Graaf",
      role: "CEO, Elite Rentals",
      image: julian,
      videoUrl: "https://vimeo.com/1007475654?share=copy",
    },
    {
      id: 2,
      name: "Cia E",
      role: "Trauma Recovery & Relationship Coach",
      image: cia,
      videoUrl: "https://vimeo.com/1007476080?share=copy",
    },
    {
      id: 3,
      name: "Marc Palombo",
      role: "Actor, The Talent Group",
      image: marc,
      videoUrl: "https://vimeo.com/1007476337?share=copy",
    },
    {
      id: 4,
      name: "Breanna Danielle MS",
      role: "Inner Health Coach",
      image: breanna,
      videoUrl: "https://vimeo.com/1015207826?share=copy",
    },
  ];

  return (
    <div className="max-w-[1240px] lg:mt-0 md:mt-20 lg:px-0 mx-auto px-4">
      <div className="flex justify-center flex-col items-center">
        
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#25AAE1] font-poppins font-bold md:text-[56px] md:w-[791px] flex justify-center items-center md:leading-[64px] text-center text-[28px] leading-[32px] lg:w-[511px] w-full
        ">
        OUR SUCCESS STORY
        </h1>
        <p className="ptag mt-[16px] text-[#D9D9D9] ">
          There are numbers of video editing agencies out there but we stand out
          for a reason.
        </p>
      </div>
      <div className="mt-12 h-[900px]">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20, // Adjust space for mobile
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 40, // Adjust space for larger screens
            },
          }}
          className="swipers"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="md:w-[386px] mx-auto md:h-[784px] h-[660px] bg-[#0e141e] ps-[26px] pt-[26px] pe-[26px] pb-[44px] rounded-[24px]">
                <div className="md:w-[334px] w-full  rounded-[12px] md:h-[594px] h-[491px] overflow-hidden">
                  <ReactPlayer
                    url={testimonial.videoUrl}
                    controls
                    width="100%"
                    height="100%"
                    className="rounded-[12px]"
                  />
                </div>
                <div className="flex gap-5 items-center mt-10">
                  <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      className=" w-[100px] h-[80px] rounded-full "
                      alt={testimonial.name}
                    />
                  </div>
                  <div>
                    <h1 className="font-[600] font-poppins md:text-[24px] text-[20px] text-[#D9D9D9]">
                      {testimonial.name}
                    </h1>
                    <p style={{fontWeight:500}} className="ptag  text-[#D9D9D9] ">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Successstory;
