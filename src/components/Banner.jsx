"use client";
import React from "react";
import Image from "next/image";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import photo from "../../public/amazon_landing_4.jpg";
import photo2 from "../../public/prime_banner.jpg";
import photo3 from "../../public/prime_landing.jpg";



const Banner = () => {
  return (
    <div className="relative ">
    <div className="absolute w-full h-60 bg-gradient-to-t from-gray-400 to-transparent bottom-0 z-20"/>
      <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={4500}
      >
        <div>
          <Image src={photo}  alt="t34" />
         
        </div>

        <div>
          <Image src={photo2}  alt="t34" />
        </div>

        <div>
          <Image src={photo3} alt="t34" />
        </div>
       
      </Carousel>
    </div>
  );
};

export default Banner;
