import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const [token, setToken] = useState(true);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex items-center justify-between text-sm py-4 px-6 border-b border-gray-300">
      {/* <img src={assets.logo} alt="" /> */}
      <span
        className="cursor-pointer animate-pulse hover:text-sky-400 hover:scale-75 transform transition duration-300"
        style={{
          color: "#0000ff", // amber-500
          fontWeight: "bold",
          fontSize: "1.875rem", // text-3xl
          fontStretch: "90%",
          letterSpacing: "0.1em", // tracking-widest
          transition: "all 0.3s ease-in-out",
          display: "inline-block",
        }}
      >
        Hitayu-AI
      </span>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to={"/"}>
          <li className="py-1 cursor-pointer hover:scale-110 transition duration-200">
            HOME
          </li>
          <hr className="border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/doctor"}>
          <li className="py-1 cursor-pointer hover:scale-110 transition duration-200">
            ALL DOCTORS
          </li>
          <hr className="border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/chatMe"}>
          <li className="py-1 cursor-pointer hover:scale-110 transition duration-200">
            CHAT-AI
          </li>
          <hr className="border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/about"}>
          <li className="py-1 cursor-pointer hover:scale-110 transition duration-200">
            ABOUT
          </li>
          <hr className="border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/contact"}>
          <li className="py-1 cursor-pointer hover:scale-110 transition duration-200">
            CONTACT
          </li>
          <hr className="border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 z-20  hidden group-hover:block">
              <div className="m-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer hover:scale-105 transition duration-200 bg-blue-600 text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
