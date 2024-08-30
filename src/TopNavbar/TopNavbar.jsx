import React, { useState } from "react";
import "./TopNavbar.css";
import SpaceThemedButton from "../spaceThemedButton/SpaceThemedButton";

const TopNavbar = ({ selected }) => {
  return (
    <nav className="z-40 bg-[rgba(0,0,0,0.2)] topNavbar flex items-center px-8 fixed top-0 left-0 w-full h-16 ">
      <span className="text-3xl font-bold heading">Sumit Das</span>
      {/* navigation buttons */}
      <div className=" absolute right-8 w-max flex items-center">
        <div className=" mr-4 lg:flex hidden container h-full w-11/12 max-w-[300px] rounded-full justify-evenly items-center gap-4">
          <a href="#home" title="home">
            <button
              className={`${
                selected === 1 && "bottomNavbarButtonsActive"
              } bottomNavbarButtons text-white h-12 w-12 hover:bg-[rgb(149, 51, 254)] cursor-pointer transition-all duration-200 rounded-full text-2xl flex justify-center items-center p-2`}
            >
              <img src="https://img.icons8.com/?size=100&id=73&format=png&color=FFFFFF" />
            </button>
          </a>
          <a href="#about" title="about">
            <button
              className={`${
                selected === 2 && "bottomNavbarButtonsActive"
              }  bottomNavbarButtons text-white h-12 w-12 hover:bg-[rgb(149, 51, 254)] cursor-pointer transition-all duration-200 rounded-full text-2xl flex justify-center items-center p-2`}
            >
              <img src="https://img.icons8.com/?size=100&id=85139&format=png&color=FFFFFF" />
            </button>
          </a>
          <a href="#skills" title="skills">
            <button
              className={`${
                selected === 3 && "bottomNavbarButtonsActive"
              }  bottomNavbarButtons text-white h-12 w-12 hover:bg-[rgb(149, 51, 254)] cursor-pointer transition-all duration-200 rounded-full text-2xl flex justify-center items-center p-2`}
            >
              <img src="https://img.icons8.com/?size=100&id=K7UWQpIZgEo1&format=png&color=FFFFFF" />
            </button>
          </a>
          <a href="#project" title="project">
            <button
              className={`${
                selected === 4 && "bottomNavbarButtonsActive"
              }  bottomNavbarButtons text-white h-12 w-12 hover:bg-[rgb(149, 51, 254)] cursor-pointer transition-all duration-200 rounded-full text-2xl flex justify-center items-center p-2`}
            >
              <img src="https://img.icons8.com/?size=100&id=25391&format=png&color=FFFFFF" />
            </button>
          </a>
          <a href="#contact" title="contact">
            <button
              className={`${
                selected === 5 && "bottomNavbarButtonsActive"
              }  bottomNavbarButtons text-white h-12 w-12 hover:bg-[rgb(149, 51, 254)] cursor-pointer transition-all duration-200 rounded-full text-2xl flex justify-center items-center p-2`}
            >
              <img src="https://img.icons8.com/?size=100&id=42357&format=png&color=FFFFFF" />
            </button>
          </a>
        </div>
        <a href="/src/assets/SumitDasResume.pdf" download>
          <SpaceThemedButton value="Resume" />
        </a>
      </div>
    </nav>
  );
};

export default TopNavbar;
