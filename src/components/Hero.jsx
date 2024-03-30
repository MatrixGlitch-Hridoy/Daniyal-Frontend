"use client";
import Image from "next/image";
import Button from "./Button";
import banner from "/public/banner.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";
import { useEffect, useState } from "react";

const HeroItem = () => {
  return (
    <div className="bg-primary rounded-md mt-5 p-5 md:p-0">
      <div className="flex items-center justify-around">
        <div className="text-white md:w-2/4 space-y-6">
          <h1 className="uppercase text-5xl font-medium">
            Get Affordable, Same-Day Coverage In No Time
          </h1>
          <p>
            With roots over a century deep in the birthplace of the automobile
            industry, USA Underwriters has the knowledge and expertise to help
            tailor a policy to suit your lifestyle, your budget, and your
            priorities.
          </p>
          <div className="flex items-center gap-10 my-10">
            <Button className="bg-white text-secondary px-5 py-3 rounded-full">
              Report a Claim
            </Button>
            <p className="flex justify-between items-center gap-2">
              <span>Learn More</span>
              <span>
                <FaLongArrowAltRight />
              </span>
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <Image src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
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

  if (isMobile) {
    return <HeroItem />;
  }

  var settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <HeroItem />
      <HeroItem />
    </Slider>
  );
};

export default Hero;
