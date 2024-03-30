"use client";

import Button from "./Button";

const Feature = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 my-10">
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
  );
};

export default Feature;
