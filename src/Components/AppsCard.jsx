import React from "react";
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
const AppsCard = ({ app }) => {
  const { image, downloads, ratingAvg, title } = app;
  return (
    <div className="p-2 rounded-sm border border-gray-100 shadow-sm">
      <div className="h-[30vh]">
        <img
          className="w-full h-full bg-gray-500 rounded-xl"
          src={image}
          alt="appPic"
        />
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
      <div className="flex items-center justify-between">
        <div className="px-3 py-2 bg-gray-100 rounded-sm text-[#2DD9A1] flex items-center gap-1 text-sm">
          <FaDownload /> <p className="font-semibold">{downloads}</p>
        </div>
        <div className="px-3 py-2 bg-[#FFF0E1] rounded-sm text-[#FFC386] flex items-center gap-1">
          <FaStar /> <p className="font-semibold">{ratingAvg}</p>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
