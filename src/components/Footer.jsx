import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
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
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Hitayu-AI is built to streamline the journey from symptoms to
            solutions - minimizing delays , reducing cost and ensuring precise
            diagnosis . More than just identifying health concerns , the system
            connects patients with the right specialist and nearby clinics .
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>Hitayu-AI@gmail.com</li>
            Developed by Avinyaak(Tech & Consultancy)
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @ Hitayu-AI.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
