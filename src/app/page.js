import Button from "@/components/Button";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Overlay from "@/components/Overlay";
import Image from "next/image";
import bottomBanner from "/public/Rectangle.png";

export default function Home() {
  return (
    <main className="p-3 md:p-0 container mx-auto relative">
      <Overlay />

      {/* Header */}
      <Hero />

      {/* Feature Section */}
      <div className="grid md:grid-cols-2 gap-4 mt-10 md:mt-20">
        <div className="space-y-5 ">
          <div>
            <p className="text-center md:text-left">Our Features</p>
            <h1 className="text-xl font-bold text-center md:text-left">
              MCCA REFUND INFORMATION
            </h1>
          </div>
          <div className="flex justify-center items-center md:justify-start">
            <Button className="bg-primary text-grey px-5 py-3 rounded-full w-full md:w-fit">
              MCCA Refund FAQ
            </Button>
          </div>
        </div>
        <div>
          <p>
            The Michigan Catastrophic Claims Association approved refunds for
            certain Michigan Policyholders due a surplus of funds being held by
            the MCCA. The approved refund will be $400 per eligible vehicle
            insured with USA Underwriters on October 31st, 2021 at 11:59 PM, or
            $80 if the vehicle is an insured historical vehicle.
          </p>
        </div>
      </div>

      {/* Card List */}
      <div className="my-10">
        <Card />
      </div>

      {/* Bottom Banner */}
      <div className="relative">
        <Image
          src={bottomBanner}
          alt="bottom-banner"
          className="object-cover hidden md:block"
        />

        {/* Card div */}
        <div className="block md:absolute left-20 right-5 bottom-20  bg-primary rounded p-5 space-y-8 text-white md:w-2/5">
          <h1 className="text-xl font-bold">
            Obtain cost-effective same-day insurance coverage quickly.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ut nisi risus ipsum urna
            leo. Etiam enim varius dictum amet hac imperdiet facilisis
            malesuada.
          </p>
          <div className="flex justify-center items-center md:justify-start">
            <Button className="bg-secondary text-grey px-5 py-3 rounded-full w-full md:w-fit">
              Report a Claim
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
