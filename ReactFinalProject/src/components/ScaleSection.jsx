import React from "react";
import images from "../constents";

function ScaleSection() {
  return (
    <div className="bg-[#F2F2F2] py-20 flex justify-center">
      <div className="w-[85%] flex gap-[30px]">

        <div className="relative w-1/2 h-[500px] overflow-hidden group">
          <img
            src={images.banner_08}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h2 className="text-4xl font-semibold tracking-wider">
              The Beauty
            </h2>
            <h1 className="text-6xl font-bold tracking-widest mt-2">
              LOOKBOOK
            </h1>
            <p className="mt-4 text-sm tracking-[3px]">
              VIEW COLLECTION
            </p>
          </div>
        </div>

<div className="relative w-1/2 h-[500px] bg-white overflow-hidden group">

  <img
    src={images.shopItem8}
    className="w-full h-full object-contain transition duration-500 group-hover:scale-110"
  />

  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
    <h3 className="text-lg font-medium text-gray-700">
      Boxy2 T-Shirt with Roll Sleeve
    </h3>
    <p className="mt-2 text-lg text-gray-600">$20.00</p>

    <div className="flex gap-4 mt-6 justify-center">
      {["-260 days", "-3 hrs", "-37 mins", "-49 secs"].map((item, i) => (
        <div
          key={i}
          className="border border-gray-300 px-5 py-4 text-center text-gray-600 bg-white"
        >
          {item}
        </div>
      ))}
    </div>
  </div>

</div>
      </div>
    </div>
  );
}

export default ScaleSection;
