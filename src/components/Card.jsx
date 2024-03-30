"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import frame from "/public/Frame.png";
import Image from "next/image";
import { cardItems } from "@/data/data";

const Card = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (isMobile) {
    return (
      <Slider {...settings}>
        {cardItems.map((cardItem, index) => {
          return (
            <div key={cardItem.id} className="border rounded-xl p-8 space-y-3">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200">
                <Image src={frame} alt="i" />
              </div>
              <h1>{cardItem.heading}</h1>
              <p>{cardItem.des}</p>
            </div>
          );
        })}
      </Slider>
    );
  }
  return (
    <div className="my-5 grid md:grid-cols-3 gap-4">
      {cardItems.map((cardItem, index) => {
        return (
          <div key={cardItem.id} className="border rounded-xl p-8 space-y-5">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200">
              <Image src={frame} alt="i" />
            </div>
            <h1 className="font-bold text-xl">{cardItem.heading}</h1>
            <p>{cardItem.des}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
