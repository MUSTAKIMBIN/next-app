import React from "react";
import errorImg from "../assets/error-404.png";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col gap-3.5 items-center">
      <img src={errorImg} className="h-[40vh]" alt="error Image" />
      <p className="text-4xl text-[#073D6D] font-bold">Oops, page not found!</p>
      <p className="text-xs text-gray-300">
        The page you are looking for is not available.
      </p>
      <Link to={-1}>
        <button className="btn bg-[#B587F3] text-white">Go Back</button>
      </Link>
    </div>
  );
};

export default Error;
