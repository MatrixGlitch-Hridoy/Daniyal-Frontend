"use client";

import Image from "next/image";
import logo from "/public/logo.svg";

const Logo = (props) => {
  return <Image priority src={logo} alt="logo" />;
};

export default Logo;
