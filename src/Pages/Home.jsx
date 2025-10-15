import React from "react";
import Banner from "../Components/Banner";
import Trasted from "../Components/Trasted";
import TrendingApps from "../Components/TrendingApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const allData = useLoaderData();
  //   console.log(allData);
  return (
    <div>
      <Banner></Banner>
      <Trasted></Trasted>
      <TrendingApps allData={allData}></TrendingApps>
    </div>
  );
};

export default Home;
