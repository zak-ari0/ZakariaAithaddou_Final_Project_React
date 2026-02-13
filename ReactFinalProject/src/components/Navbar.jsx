import React from "react";
import images from "../constents";
import { SlUser } from "react-icons/sl";
import { GrShop } from "react-icons/gr";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-20 flex items-center justify-between px-13">
      <div>
        <img src={images.logo} alt="Logo" />
      </div>
      <div>
        <ul className="flex gap-9 text-[17px] font-stretch-50% font-[350]">
          <li className="cursor-pointer border-b border-transparent transition-all duration-300 ease-in hover:border-black">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "text-[#E65540]" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer border-b border-transparent transition-all duration-300 ease-in hover:border-black">
            <NavLink
              to="/shop"
              className={({ isActive }) => (isActive ? "text-[#E65540]" : "")}
            >
              Shop
            </NavLink>
          </li>
          <li className="cursor-pointer border-b border-transparent transition-all duration-300 ease-in hover:border-black">
            <NavLink
              to="/sale"
              className={({ isActive }) => (isActive ? "text-[#E65540]" : "")}
            >
              Sale
            </NavLink>
          </li>
          <li className="cursor-pointer border-b border-transparent transition-all duration-300 ease-in hover:border-black">
            <NavLink
              to="/features"
              className={({ isActive }) => (isActive ? "text-[#E65540]" : "")}
            >
              Features
            </NavLink>
          </li>
          <li className="cursor-pointer border-b border-transparent transition-all duration-300 ease-in hover:border-black">
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-[#E65540]" : "")}
            >
              Blog
            </NavLink>
          </li>
          <li className="cursor-pointer border-b border-transparent transition-all duration-300 ease-in hover:border-black">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-[#E65540]" : "")}
            >
              About
            </NavLink>
          </li>
          <li className="cursor-pointer border-b border-transparent transition-all duration-300 ease-in hover:border-black">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-[#E65540]" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-10 text-[#C7C7C7]">
        <NavLink
          to="/account"
          className={({ isActive }) =>
            `text-[25px] cursor-pointer ${isActive ? "text-[#E65540]" : ""}`
          }
        >
          <SlUser />
        </NavLink>
        <GrShop className="text-[28px] cursor-pointer font-light" />
      </div>
    </div>
  );
}

export default Navbar;
