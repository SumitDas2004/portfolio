import React, { useEffect, useState } from "react";
import "../animation.css";
import "./Home.css"

const Home = () => {
  const [i, setI] = new useState(0);
  const [j, setJ] = new useState(0);
  const [role, setRole] = new useState("");
  const roles = [
    "an undergraduate student.",
    "a fullstack web developer.",
    "a competitive programmer.",
  ];

  useEffect(() => {
    setRole(roles[i].substring(0, j));
    const timeout = setTimeout(async () => {
      let newj = j + 1;
      if (newj > roles[i].length) {
        //Waiting before switching to next role
        await new Promise((res, rej) => {
          setTimeout(() => res(), 3000);
        });
        //Deleting all the characters before going to next role
        await new Promise((res, rej) => {
          let curj = j;
          // This interval is used for the character delete animation
          const interval = setInterval(() => {
            if (curj < 0) {
              clearInterval(interval);
              //resolving the promise when all characters have been removed
              res();
              return;
            }
            setJ((j) => j - 1);
            curj--;
          }, 20);
        });

        newj = 0;
        setI((i + 1) % roles.length);
      }
      setJ(newj);
    }, 100);

    return () => clearTimeout(timeout);
  }, [j]);
  return (
    <div id="home" className="h-screen w-full flex lg:flex-row flex-col items-center justify-center bg-black bgYellowBlackYellowAnimation">
      <iframe
        className=" scale-[0.8] sm:scale-100 h-[60vh] w-[60vh] order-2 lg:order-none"
        src="https://lottie.host/embed/3a1538fe-3558-4250-b5f6-f5193277f1b8/KngzO7IQvY.json"
      ></iframe>
      <span className="-mb-20 lg:mb-0 flex flex-col  w-[28rem] scale-[0.75] sm:scale-100">
        <span className=" mb-2 text-xl w-fit text-white bg-[rgba(255,255,255,0.15)] px-2 py-1 rounded-md font-semibold">
          <span className="wavingHandAnimation inline-block">👋</span> Hi, I am
          Sumit Das
        </span>
        <span className="text-white text-3xl relative">
          I am
          <span className="text-gold font-bold break-all h-32"> {role}</span>
          <span className="cursorPuleAnimation inline-block h-10 -mt-1 w-[2px] bg-white absolute"></span>
        </span>
      </span>
    </div>
  );
};

export default Home;
