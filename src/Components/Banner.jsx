import React from "react";
import appStor from "../assets/appStore.png";
import googleStor from "../assets/googleStore.png";
import heorImg from "../assets/hero.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="w-[90%] mx-auto flex-col items-center text-center mt-10 ">
      <h2 className="text-5xl font-extrabold text-[#192F45]">
        We Build <br />
        <span className="text-[#8755EA]">Productive</span> Apps
      </h2>
      <p className="text-sm text-gray-400 my-5">
        At NextApp, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="space-x-1.5 mb-5">
        <Link to={`https://play.google.com/store/apps?hl=en`}>
          <button className="btn">
            <img src={googleStor} alt="googleStroe" /> Google Play
          </button>
        </Link>
        <Link to={`https://www.apple.com/app-store/`}>
          <button className="btn">
            <img src={appStor} alt="appStore" />
            App Store
          </button>
        </Link>
      </div>
      <img className="w-[80%] md:w-[70%] mx-auto" src={heorImg} alt="heroImg" />
    </div>
  );
};

export default Banner;
