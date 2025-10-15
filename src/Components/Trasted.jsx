import React from "react";

const Trasted = () => {
  return (
    <div className="bg-linear-to-r from-[#7941E8] to-[#AB76F4] text-white py-10">
      <p className="text-3xl font-bold text-white text-center pt-4 pb-6">
        Trusted by Millions, Built for You
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-14">
        <div className="text-center space-y-1.5">
          <p className="text-xs">Total Downloads</p>
          <p className="text-5xl font-bold">29.6M</p>
          <p className="text-xs">21% more than last month</p>
        </div>
        <div className="text-center space-y-1.5">
          <p className="text-xs">Total Reviews</p>
          <p className="text-5xl font-bold">906K</p>
          <p className="text-xs">46% more than last month</p>
        </div>
        <div className="text-center space-y-1.5">
          <p className="text-xs">TActive Apps</p>
          <p className="text-5xl font-bold">132+</p>
          <p className="text-xs">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Trasted;
