import React, { useEffect, useState } from "react";
import { getAppsFromLs, removeAppsFromLs } from "../Utility/utility";
import { useLoaderData } from "react-router";
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

const Installation = () => {
  const allAppsData = useLoaderData();
  const [lsData, setLsData] = useState([]);
  useEffect(() => {
    const localStorageApps = getAppsFromLs();
    const finalAppsData = allAppsData.filter((apps) =>
      localStorageApps.includes(apps.id)
    );
    setLsData(finalAppsData);
  }, []);

  const handleUnstall = (id) => {
    removeAppsFromLs(id);
    const lastApps = lsData.filter((app) => app.id !== id);
    // console.log(lastApps);
    setLsData(lastApps);
  };
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-4xl text-[#001931] font-bold text-center my-3">
        Your Installed Apps
      </h2>
      <p className="text-xs text-gray-400 text-center my-1.5">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between items-center my-5">
        <p className="text-base font-medium">{lsData.length} Apps Found</p>
        <p>Srot By</p>
      </div>
      {/* Downloaded App Containder */}
      <div>
        {lsData.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between border border-gray-200 rounded-lg py-2 px-2 my-2"
          >
            <div className="flex gap-2.5 md:gap-5">
              <div className="h-[10vh] w-[10vw]">
                <img
                  className="w-full h-full rounded-md"
                  src={app.image}
                  alt="App Image"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{app.title}</h2>
                <div className="flex gap-2 my-2">
                  <p className="text-[#07BBAC] font-medium text-xs flex gap-1">
                    <FaDownload /> {app.reviews}
                  </p>
                  <p className="text-orange-300 font-medium text-xs flex gap-1">
                    <FaStar /> {app.downloads}
                  </p>
                  <p className="text-xs text-gray-400">{app.size} mb</p>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  handleUnstall(app.id), toast(`Unstall ${app.title} `);
                }}
                className="btn text-white bg-[#07BFB0]"
              >
                Unstall
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Installation;
