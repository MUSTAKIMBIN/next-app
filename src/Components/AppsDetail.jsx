import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import download from "../assets/icon-downloads.png";
import { ToastContainer, toast } from "react-toastify";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppsDetail = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const appsData = useLoaderData();
  const sellectedApp = appsData.find((app) => app.id === appId);
  const [appDownload, setAppDownload] = useState(false);
  // console.log(sellectedApp);
  const handleDownload = (id) => {
    console.log(`app download ${id}`);
    setAppDownload(true);
    toast(`${sellectedApp.title} downloaded`);
  };
  const {
    ratings,
    title,
    size,
    reviews,
    ratingAvg,
    image,
    downloads,
    description,
    companyName,
  } = sellectedApp;
  return (
    <div className="w-[90%] mx-auto my-10">
      {/* app info div */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* app img div */}
        <div>
          <img src={image} alt="app Image" />
        </div>

        <div className="w-full">
          <h2 className="text-xl font-bold text-[#0F273D]">{title}</h2>
          <p className="text-sm text-gray-400 my-2">
            Developed by :{" "}
            <span className="text-[#773FE8] font-medium">{companyName}</span>
          </p>
          <div className="divider"></div>
          <div className="flex items-center gap-3 md:gap-14 my-2.5">
            <div className="flex flex-col text-center justify-center">
              <div className="w-[20px]">
                <img className="" src={download} alt="download" />
              </div>
              <p className="text-sm my-1.5 text-gray-400">Downloads</p>
              <p className="text-4xl font-black text-[#0F273D]">{downloads}</p>
            </div>
            <div className="flex flex-col text-center justify-center">
              <div className="w-[20px]">
                <img className="" src={rating} alt="download" />
              </div>
              <p className="text-sm my-1.5 text-gray-400">Average Ratings</p>
              <p className="text-4xl font-black text-[#0F273D]">{ratingAvg}</p>
            </div>
            <div className="flex flex-col text-center justify-center">
              <div className="w-[20px]">
                <img className="" src={review} alt="download" />
              </div>
              <p className="text-sm my-1.5 text-gray-400">Total Reviews</p>
              <p className="text-4xl font-black text-[#0F273D]">{reviews}</p>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleDownload(appId)}
              disabled={appDownload}
              className={`btn ${
                appDownload
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : " bg-[#07BFB0] text-white "
              }`}
            >
              {appDownload ? `Installed` : ` Install Now (${size}) mb`}
            </button>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      {/* app chart div */}
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={ratings}
            layout="vertical"
            margin={{ top: 10, right: 10, left: 60, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Bar
              dataKey="count"
              fill="#FFA500"
              barSize={30}
              radius={[0, 10, 10, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="divider"></div>
      {/* app description div */}
      <p className="text-sm text-gray-400">{description}</p>
      <ToastContainer />
    </div>
  );
};

export default AppsDetail;
