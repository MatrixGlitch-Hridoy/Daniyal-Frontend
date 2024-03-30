import { IoMdHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import about from "/public/about.png";
import Image from "next/image";
import Card from "@/components/Card";
import Overlay from "@/components/Overlay";
const About = () => {
  return (
    <div className="mt-5 p-3 md:p-0 container mx-auto relative">
      <Overlay classname="md:hidden block" />
      <h1 className="text-3xl text-center font-semibold">About Us</h1>
      <div className="flex items-center justify-center gap-3 mt-3">
        <p>
          <IoMdHome />
        </p>
        <p>Home</p>
        <p>
          <IoIosArrowForward />
        </p>
        <p>About Us</p>
      </div>

      {/* History */}
      <div className="grid md:grid-cols-8 my-10">
        <div className="space-y-5 ">
          <div>
            <p className="hidden md:block">About us</p>
            <h1 className="text-xl font-bold">History</h1>
          </div>
        </div>
        <div className="col-span-7">
          <p>
            In 1962, the Southern Michigan Mutual Insurance Company celebrated
            it’s 100th year in continuous operation and was presented with a
            plaque by the State of Michigan as a Centenary Business.
          </p>
        </div>
      </div>
      {/* Banner */}
      <div className="space-y-10">
        <Image src={about} alt="about" />
        <p>
          In 2013, Southern Michigan Mutual Insurance Company became USA
          Underwriters. The name may have changed, but the dedication to our
          customers, our drive to serve them and their communities hasn’t.
          <span className="hidden md:block">
            USA Underwriters’ mission as a leading Property and Casualty
            Insurance company in Michigan, remains largely unchanged from the
            mission of it’s progenitor: to provide affordable, quality insurance
            solutions to families and individuals.
          </span>
        </p>
        <p className="hidden md:block">
          Insurance has changed a lot in the last century and a half. When
          Southern Michigan Mutual Insurance Company was founded, automobiles
          simply didn’t exist. That all changed — right in the company’s back
          yard — at the turn of the 20th century when Henry Ford’s Model T began
          rolling off the assembly line.
        </p>
        <p className="hidden md:block">
          In an instant of history, the car supplanted the horse and buggy as
          American’s primary mode of transportation. The era of the Automobile
          had begun, and the Southern Michigan Mutual Insurance Company was
          front and center for one of the most dramatic shifts in American
          history. The car accelerated economic growth, and offered a freedom of
          travel that had been nigh-unimaginable for the vast majority of people
          through the whole of human history.
        </p>
      </div>
      {/* Mission */}
      <div className="grid md:grid-cols-2 my-10">
        <div className="space-y-5">
          <div>
            <p>Believe</p>
            <h1 className="text-xl font-bold text-primary">Our Mission</h1>
          </div>
        </div>
        <div>
          <p>
            Our mission has remained largely unchanged over the century and a
            half the company has operated: to quickly provide affordable
            insurance solutions for our customers that support the communities
            and families they represent.
          </p>
        </div>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default About;
