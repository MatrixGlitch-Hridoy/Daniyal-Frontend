"use client";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Scroll = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="absolute bottom-2 right-3 md:bottom-10 md:right-10 cursor-pointer">
      <div
        className="bg-primary p-3 text-white rounded-md "
        onClick={scrollToTop}
      >
        <MdOutlineKeyboardDoubleArrowUp className="text-xl" />
      </div>
    </div>
  );
};

export default Scroll;
