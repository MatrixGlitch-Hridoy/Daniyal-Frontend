"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";

const Card = () => {
  const cardItems = [
    {
      id: 1,
      heading: "Heading",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibuquisquam dignissimos at voluptate animi cumque, dicta ea commodi eius quas",
    },
    {
      id: 2,
      heading: "Heading",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibuquisquam dignissimos at voluptate animi cumque, dicta ea commodi eius quas",
    },
    {
      id: 3,
      heading: "Heading",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibuquisquam dignissimos at voluptate animi cumque, dicta ea commodi eius quas",
    },
  ];
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
            <div key={cardItem.id} className="border rounded p-8">
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
          <div key={cardItem.id} className="border rounded p-8">
            <h1>{cardItem.heading}</h1>
            <p>{cardItem.des}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
