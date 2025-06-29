import React from 'react';
import { NavLink } from 'react-router';
import { FaDownload } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#0f3460]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <NavLink><li><a>About Me</a></li></NavLink>
            <NavLink><li><a>Projects</a></li></NavLink>
            <NavLink><li><a>Contact</a></li></NavLink>
        
        
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Tareq Aziz</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <NavLink><li><a>About Me</a></li></NavLink>
        <NavLink><li><a>Projects</a></li></NavLink>
        <NavLink><li><a>Contact</a></li></NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a
  href="/public/CV Resume.pdf"
  download
  className="bg-gray-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition flex gap-2 items-center"
>
 <FaDownload />Resume
</a>
  </div>
</div>
    );
};

export default Navbar;