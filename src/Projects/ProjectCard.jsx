import React, { useRef } from "react";
import "./Projects.css";
import SpaceThemedButton from "../spaceThemedButton/SpaceThemedButton";



const ProjectCard = ({ description, name, github, deployment, image, className }) => {


  const ref = useRef();
  return (
    <div ref={ref} className={`${className} mt-8 cursor-pointer mainContainer aspect-video w-11/12 min-h-[300px] max-w-[550px]`}>
      <div className={` flipper relative h-full w-full rounded-lg`}>
        {/* The front most div element that contains the details button */}
        <div className="frontButtonContainer opacity-0 duration-200 h-full w-full absolute top-0 left-0 flex justify-center items-center z-20">
          <SpaceThemedButton
            onClick={(e) =>
              (e.target.parentNode.parentNode.style.transform =
                "rotateY(180deg)")
            }
            value={"details"}
          />
        </div>
        {/* The front div that contains the project image */}
        <div
          className=" bg-[#000021] front flex justify-center items-center overflow-hidden h-full w-full absolute rounded-lg"
        >
          <span style={{"WebkitTextStroke":"1px #00000050", fontFamily: "gill sans nova inline"}} className="absolute text-3xl text-[#00000000] font-bold">{name}</span>
          <img
            className=" object-contain justify-center items-center h-full w-full"
            src={image}
          />
        </div>
        {/* Rear div, that contains the project details */}
        
        <div className="rear shadow-xl h-full w-full absolute rounded-lg flex flex-col justify-center items-center overflow-hidden py-6">
          <span style={{right:`${Math.round(Math.random()*1000%Math.min(500, window.innerWidth*90/100-100))}px`, top:`${Math.round(Math.random()*1000%250)}px`, animationDelay:`${Math.random()*10%4}s`}} className={`shootingStar`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%Math.min(500, window.innerWidth*90/100-100))}px`, top:`${Math.round(Math.random()*1000%250)}px`, animationDelay:`${Math.random()*10%4}s`}} className={`shootingStar`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%Math.min(500, window.innerWidth*90/100-100))}px`, top:`${Math.round(Math.random()*1000%250)}px`, animationDelay:`${Math.random()*10%4}s`}} className={`shootingStar`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%Math.min(500, window.innerWidth*90/100-100))}px`, top:`${Math.round(Math.random()*1000%250)}px`, animationDelay:`${Math.random()*10%4}s`}} className={`shootingStar`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%Math.min(500, window.innerWidth*90/100-100))}px`, top:`${Math.round(Math.random()*1000%250)}px`, animationDelay:`${Math.random()*10%4}s`}} className={`shootingStar`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%Math.min(500, window.innerWidth*90/100-100))}px`, top:`${Math.round(Math.random()*1000%250)}px`, animationDelay:`${Math.random()*10%4}s`}} className={`shootingStar`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%Math.min(500, window.innerWidth*90/100-100))}px`, top:`${Math.round(Math.random()*1000%250)}px`, animationDelay:`${Math.random()*10%4}s`}} className={`shootingStar`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%Math.min(500, window.innerWidth*90/100-100))}px`, top:`${Math.round(Math.random()*1000%250)}px`, animationDelay:`${Math.random()*10%4}s`}} className={`shootingStar`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%Math.min(500, window.innerWidth*90/100-100))}px`, top:`${Math.round(Math.random()*1000%250)}px`, animationDelay:`${Math.random()*10%4}s`}} className={`shootingStar`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%Math.min(500, window.innerWidth*90/100-100))}px`, top:`${Math.round(Math.random()*1000%250)}px`, animationDelay:`${Math.random()*10%4}s`}} className={`shootingStar`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%Math.min(500, window.innerWidth*90/100-100))}px`, top:`${Math.round(Math.random()*1000%250)}px`, animationDelay:`${Math.random()*10%4}s`}} className={`shootingStar`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%Math.min(500, window.innerWidth*90/100-100))}px`, top:`${Math.round(Math.random()*1000%250)}px`, animationDelay:`${Math.random()*10%4}s`}} className={`shootingStar`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%Math.min(500, window.innerWidth*90/100-100))}px`, top:`${Math.round(Math.random()*1000%250)}px`, animationDelay:`${Math.random()*10%4}s`}} className={`shootingStar`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%Math.min(500, window.innerWidth*90/100-100))}px`, top:`${Math.round(Math.random()*1000%250)}px`, animationDelay:`${Math.random()*10%4}s`}} className={`shootingStar`}></span>

          {/*project navigation bar */}
          <div className="text-white absolute top-0 w-full flex flex-row items-center justify-between px-4 py-3">
            <span style={{fontFamily:"gill sans nova shadowed"}} className="inline-block text-xl font-bold">{name}</span>

            <span className="flex gap-2">
              <a target="_blank" href={github}>
                <span className="hover:text-black hover:bg-white aspect-square rounded-full w-7 flex justify-center items-center text-xl transition-all duration-300">
                  <i className="fa-brands fa-github pointer-events-none h-min w-min"></i>
                </span>
              </a>
              <a target="_blank" href={deployment}>
                <span className="hover:text-white hover:bg-blue-500 aspect-square rounded-full w-7 flex justify-center items-center text-md transition-all duration-300">
                  <i className="fa-solid fa-link pointer-events-none h-min w-min"></i>
                </span>
              </a>
            </span>
          </div>

          {/* Project description */}
          <div className="description text-white w-11/12 text-justify overflow-x-hidden overflow-y-auto font-semibold mb-6 mt-4">
            {description}
          </div>
          {/* Back button */}
          <button
            onClick={(e) =>
              (e.target.parentNode.parentNode.style.transform = "rotateY(0deg)")
            }
          >
            <i className="fa-solid fa-arrow-left pointer-events-none"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
