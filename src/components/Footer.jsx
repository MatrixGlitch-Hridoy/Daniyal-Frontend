"use client";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const Footer = () => {
  const [activeIndices, setActiveIndices] = useState([]);

  const onItemClick = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };
  const footerItems = [
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
    {
      id: 4,
      heading: "Heading",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibuquisquam dignissimos at voluptate animi cumque, dicta ea commodi eius quas",
    },
    {
      id: 5,
      heading: "Heading",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibuquisquam dignissimos at voluptate animi cumque, dicta ea commodi eius quas",
    },
    {
      id: 6,
      heading: "Heading",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibuquisquam dignissimos at voluptate animi cumque, dicta ea commodi eius quas",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-footer text-white mt-10 p-5">
      {footerItems.map((footerItem, index) => {
        return (
          <div key={footerItem.id}>
            <div
              className="flex items-center justify-between"
              onClick={() => onItemClick(index)}
            >
              <h1>{footerItem.heading}</h1>
              <p className="md:hidden">
                {activeIndices.includes(index) ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </p>
            </div>

            <p
              className={`${
                activeIndices.includes(index) ? "block" : "hidden"
              } md:block`}
            >
              {footerItem.des}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
