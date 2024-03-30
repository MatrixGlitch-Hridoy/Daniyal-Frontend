"use client";

import Image from "next/image";
import bottomBanner from "/public/Rectangle.png";
import Button from "./Button";

const BottomBanner = () => {
  return (
    <div className="relative">
      <Image
        src={bottomBanner}
        alt="bottom-banner"
        className="object-cover hidden md:block"
      />

      {/* Card div */}
      <div className="block md:absolute left-20 right-5 bottom-20  bg-primary rounded-lg p-5 space-y-8 text-white md:w-2/5">
        <h1 className="text-xl font-bold">
          Obtain cost-effective same-day insurance coverage quickly.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ut nisi risus ipsum urna leo.
          Etiam enim varius dictum amet hac imperdiet facilisis malesuada.
        </p>
        <Button className="bg-secondary text-grey px-5 py-3 rounded-full">
          Report a Claim
        </Button>
      </div>
    </div>
  );
};

export default BottomBanner;
