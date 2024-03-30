"use client";

import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { id: 1, link: "Home", path: "" },
    { id: 2, link: "About Us", path: "about" },
    { id: 3, link: "Contact", path: "contact" },
    { id: 4, link: "Policyholder Portal", path: "portal" },
  ];
  return (
    <>
      <nav className="md:flex items-center justify-between  py-4">
        <div className="flex items-center">
          <div className="flex flex-1 justify-center">
            <Logo />
          </div>
          <div className="md:hidden">
            <button className="text-2xl" onClick={handleToggleMenu}>
              {!isMenuOpen ? <HiOutlineBars3BottomRight /> : <RxCross2 />}
            </button>
          </div>
        </div>

        <div className="md:flex items-center space-x-12 hidden">
          <ul className="md:flex space-x-12 font-medium ">
            {navItems.map((navItem) => {
              return (
                <li key={navItem.id}>
                  <Link href={`/${navItem.path}`} className="text-secondary">
                    {navItem.link}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button className="bg-primary text-grey px-5 py-3 rounded-full">
            Report a Claim
          </Button>
        </div>
      </nav>
      {/* Floting Menu */}
      <div
        className={`bg-primary space-y-4 px-4 py-5 ${
          isMenuOpen ? "absolute top-20 right-0 left-0" : "hidden"
        }`}
      >
        <ul className="space-y-5">
          {navItems.map((navItem) => {
            return (
              <li key={navItem.id}>
                <Link href={`/${navItem.path}`} className="text-grey">
                  {navItem.link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
