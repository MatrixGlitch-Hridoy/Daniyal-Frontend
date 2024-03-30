"use client";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { footerItems } from "@/data/data";

const Footer = () => {
  const [activeIndices, setActiveIndices] = useState([]);

  const onItemClick = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10  text-white mt-10 py-10">
        {footerItems.map((footerItem, index) => {
          return (
            <div key={footerItem.id} className="space-y-3">
              <div
                className="flex items-center justify-between"
                onClick={() => onItemClick(index)}
              >
                <h1 className="text-lg">{footerItem.heading}</h1>
                <p className="md:hidden">
                  {activeIndices.includes(index) ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </p>
              </div>

              <div
                className={`${
                  activeIndices.includes(index) ? "block" : "hidden"
                } md:block`}
              >
                {footerItem.des.map((data, i) => {
                  return (
                    <div key={i} className="text-xs">
                      {data.place && (
                        <div>
                          <p>{data?.place}</p>
                        </div>
                      )}
                      {data.postOffice && (
                        <div>
                          <p>{data.postOffice}</p>
                        </div>
                      )}
                      {data.city && (
                        <div>
                          <p>{data?.city}</p>
                        </div>
                      )}
                      {data.time && (
                        <div className="flex items-center gap-2">
                          <p>
                            <IoTime />
                          </p>
                          <p>{data?.time}</p>
                        </div>
                      )}
                      {data.phone && (
                        <div className="flex items-center gap-2">
                          <p>
                            <BsTelephoneFill />
                          </p>
                          <p>{data?.phone}</p>
                        </div>
                      )}
                      {data.email && (
                        <div className="flex items-center gap-2">
                          <p>
                            <MdEmail />
                          </p>
                          <p>{data?.email}</p>
                        </div>
                      )}
                      {data.location && (
                        <div className="flex items-center gap-2">
                          <p>
                            <FaLocationDot />
                          </p>
                          <p>{data?.location}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
