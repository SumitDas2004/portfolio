import React, { useEffect, useRef, useState } from "react";
import profile from "../assets/profile.jpg";
import { Random } from "react-animated-text";

const Home = () => {
  const image = useRef();
  const [isVisible, setIsVisible] = useState(true);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("blur-md", !entry.isIntersecting);
      setIsVisible(entry.isIntersecting);
    });
  });
  useEffect(() => {
    observer.observe(image.current);
  }, []);

  return (
    <section id="home" className=" snap-start h-full w-full flex justify-center items-center flex-col">
      <div className=" px-20 flex flex-wrap w-full justify-center items-center">
        <span
          style={{
            animation: "profilePictureAnimation",
            animationDuration: "10s",
            animationIterationCount: "infinite",
          }}
          className=" h-56 w-56 object-cover overflow-hidden"
        >
          <img
            ref={image}
            src={profile}
            alt=""
            srcSet=""
            className=" duration-1000 transition-all"
          />
        </span>
        <div className="mt-10 flex flex-col mx-10">
          <span className="flex ">
            <span className="text-lg font-semibold">Hi!</span>{" "}
            <span className="text-base ml-2">I'm</span>{" "}
            <span className=" text-3xl font-bold ml-3">
              {isVisible ? (
                <Random
                  text={`Sumit Das`}
                  iterations={1}
                  effect="verticalFadeIn"
                  effectChange={2}
                  effectDirection="up"
                  effectDelay={0.8}
                />
              ) : (
                "Sumit Das"
              )}
            </span>
          </span>
          <span className=" text-sm text-[#000000b7]">A Fullstack web developer and Competitive Programming enthusiast</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
