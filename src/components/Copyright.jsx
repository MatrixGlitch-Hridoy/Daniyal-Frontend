import React from "react";
import Overlay from "./Overlay";

const Copyright = () => {
  return (
    <div className="container mx-auto relative">
      <Overlay />
      <div className="p-4 md:p-4 flex items-center justify-center md:justify-between md:bg-white bg-footer text-white md:text-black flex-wrap gap-4 text-center text-xs md:text-base">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <p>Copyright 2022 USA Underwriters</p>
          <p>Privacy Policy | Terms of Use</p>
        </div>
        <p>( Built by Neutrix - Powered by Neutrix Systems )</p>
      </div>
    </div>
  );
};

export default Copyright;
