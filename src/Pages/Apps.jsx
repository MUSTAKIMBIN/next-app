import React from "react";
import { CiSearch } from "react-icons/ci";
import { useLoaderData } from "react-router";
import AppsCard from "../Components/AppsCard";

const Apps = () => {
  const allAppsData = useLoaderData();
  return (
    <div className="w-[90%] mx-auto">
      <div className="text-center my-5">
        <h3 className="text-3xl font-bold text-[#001931]">
          Our All Applications
        </h3>
        <p className="text-xs text-gray-400 my-2.5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div
        className="flex
      items-center justify-between my-5"
      >
        <p className="text-base font-medium ">
          ({allAppsData.length}) Apps Found
        </p>

        <label className="flex items-center justify-center gap-1.5 border border-gray-200 py-1.5 px-1 rounded-sm">
          <CiSearch />
          <input type="text" placeholder="Search here" />
        </label>
      </div>
      <div className="grid grid-cols- md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {allAppsData.map((app) => (
          <AppsCard key={app.id} app={app}></AppsCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
