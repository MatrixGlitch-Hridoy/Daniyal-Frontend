"use client";

import Image from "next/image";
import logo from "/public/logo.svg";
import Link from "next/link";

const Logo = (props) => {
  return (
    <Link href={"/"}>
      <Image priority src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
