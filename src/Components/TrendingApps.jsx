import React from "react";
import AppsCard from "./AppsCard";
import { Link } from "react-router";

const TrendingApps = ({ allData }) => {
  // console.log(allData);
  return (
    <div className="w-[90%] mx-auto my-10">
      <h3 className="text-3xl font-semibold text-center">Trending Apps</h3>
      <p className="text-sm text-gray-400 text-center my-4">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {allData.map((app) => (
          <AppsCard key={app.id} app={app}></AppsCard>
        ))}
      </div>
      <div className="grid place-items-center my-5">
        <Link to={`/apps`}>
          {/* write the correct link  */}
          <p className="btn bg-linear-to-r from-[#7941E8] to-[#AB76F4]  text-white">
            Show All
          </p>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
