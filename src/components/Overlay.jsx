"use client";

const Overlay = ({ classname }) => {
  return (
    <div
      class={`absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center ${classname}`}
    >
      <div className="container mx-auto">
        <div class="md:grid md:grid-cols-12 gap-5 h-full ">
          <div class="col-span-1 bg-primary opacity-5"></div>
          <div class="col-span-1 bg-primary opacity-5"></div>
          <div class="col-span-1 bg-primary opacity-5"></div>
          <div class="col-span-1 bg-primary opacity-5"></div>
          <div class="col-span-1 bg-primary opacity-5"></div>
          <div class="col-span-1 bg-primary opacity-5"></div>
          <div class="col-span-1 bg-primary opacity-5"></div>
          <div class="col-span-1 bg-primary opacity-5"></div>
          <div class="col-span-1 bg-primary opacity-5"></div>
          <div class="col-span-1 bg-primary opacity-5"></div>
          <div class="col-span-1 bg-primary opacity-5"></div>
          <div class="col-span-1 bg-primary opacity-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
