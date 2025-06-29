import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#0f3460]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <NavLink to={"/about"}><li><a>About Me</a></li></NavLink>
            <NavLink to={"/projects"}><li><a>Projects</a></li></NavLink>
            <NavLink to={"/contact"}><li><a>Contact</a></li></NavLink>
          </ul>
        </div>
        <NavLink to={"/"}><a className="btn btn-ghost text-xl">Tareq Aziz</a></NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to={"/about"}><li><a>About Me</a></li></NavLink>
          <NavLink to={"/projects"}><li><a>Projects</a></li></NavLink>
          <NavLink to={"/contact"}><li><a>Contact</a></li></NavLink>
        </ul>
      </div>

      <div className="navbar-end">
        <motion.a
          href="/CV Resume.pdf"
          download
          className="relative px-5 py-2 rounded-full font-medium text-white bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-[length:200%_auto] bg-right hover:bg-left transition-all duration-500 shadow-lg animate-gradient-x flex items-center gap-2"
          animate={{ y: [0, -30, 30, -30, 30, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        >
          <FaDownload />
          Resume
        </motion.a>
      </div>
    </div>
  );
};

export default Navbar;
