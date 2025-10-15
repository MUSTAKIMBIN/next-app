import React from "react";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navber = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/apps"}>Apps</NavLink>
      </li>
      <li>
        <NavLink to={"/instalation"}>Installation</NavLink>
      </li>
    </>
  );
  return (
    <div className="w-[90%] mx-auto">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link to={"/"}>
            <div className="flex items-center r gap-2.5">
              <img className="w-[25%] md:w-[10%]" src={logo} alt="logo" />
              <a className="font-bold text-xl text-[#7941E8]">NextApp</a>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to={`https://github.com/MUSTAKIMBIN`}>
            <a className="btn bg-linear-to-r from-[#7941E8] to-[#AB76F4] text-white">
              <FaGithub /> Contribute
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
