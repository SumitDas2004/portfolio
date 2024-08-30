import React from "react";
import "./Skills.css";
import "../animation.css";
import { useEffect, useRef } from "react";

const Skills = ({setSelected}) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((elm) => {
      if (elm[0].isIntersecting) {
        setSelected(3);
      }
    },{
      threshold:0.5
    });
    observer.observe(ref.current)
    return () => observer.disconnect();
  }, []);
  return (
    <section id="skills" ref={ref} className="relative h-screen w-full bgYellowBlackAnimation flex justify-center  items-center flex-col">
      
      <div className=" mt-20  popUpAnimation w-full flex justify-center items-center">
        {/* heading */}
      <span  style={{top:'calc(50% - 30px)', "WebkitTextStroke":"1.5px rgba(190 190 190)", "fontFamily":"gill sans nova inline"}}  className="text-gold text-[6rem] sm:text-[8rem] absolute after:content-['Skills'] after:absolute after:left-0 after:z-10 after:text-transparent ">Skills</span>
        <div className="slider z-10" style={{ "--quantity": skills.length }}>
          {skills.map((logo, ind) => (
            <img key={ind} src={logo} style={{ "--index": ind }} />
          ))}
        </div>
        <div className="text-white text-4xl font-bold">
          <iframe
            id="monk"
            className=" h-[500px] aspect-square drop-shadow-none"
            src="https://lottie.host/embed/4803fe1f-2b32-40ee-9781-9a7381c0dfa2/BshbQ3g2Dm.json"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Skills;

const skills = [
  "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=A3Ulk2RcONKs&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=lhwQTv6iwznO&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=3VGtaw5gCc8T&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF",
];
