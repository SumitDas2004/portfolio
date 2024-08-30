import React from "react";
import "../animation.css";
import { useEffect, useRef } from "react";

const About = ({setSelected}) => {
  const ref = useRef(3);

  useEffect(() => {
    const observer = new IntersectionObserver((elm) => {
      if (elm[0].isIntersecting) {
        setSelected(2);
      }
    },{
      threshold:0.5
    });
    observer.observe(ref.current)
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={ref} id="about" className=" h-screen w-full bgBlackYellowBlackAnimation flex justify-center  items-center flex-col">
      <span style={{fontFamily:"gill sans nova shadowed"}} className="popUpAnimation font-bold text-white text-5xl mb-10">
        About me
      </span>
      <div className=" rounded-lg popUpAnimation relative w-11/12 max-w-[700px] overflow-hidden">
        <span className=" -right-[10%] absolute inline-block h-72 w-72 bg-[#000000ab] shadow-xl shadow-white -z-10 rounded-full -top-[10%]"></span>
        <p className=" overflow-y-auto max-h-[85vh] overflow-x-hidden relative font-semibold w-full text-justify text-white sm:text-lg py-4 px-6 rounded-xl bg-[#0000001d] ">
          I am a passionate Computer Application undergraduate student at <strong> Narula
          Institute of Technology</strong>, currently advancing towards graduation in
          2025. Throughout my academic journey, I have diligently cultivated
          expertise in a range of technologies. My proficiency spans{" "}
          <strong>JavaScript, ReactJS, Java, and SpringBoot</strong>, enabling
          me to architect robust and efficient applications across diverse
          platforms.
          <br />
          Beyond technical skills, I pride myself on a strong foundation in data
          structures and algorithms. I'm rated{" "}
          <strong>
            Knight on LeetCode, Specialist on CodeForces, and a 4-star rating on
            Codechef
          </strong>
          .<br />
          In recognition of my academic excellence and potential, I was honored
          with the prestigious{" "}
          <strong>Reliance Foundation Scholarship in 2023</strong>. As I embark
          on the next phase of my career, I am particularly drawn to full-stack
          development roles where I can leverage my comprehensive skill set to
          contribute meaningfully to innovative projects. I am eager to
          collaborate with like-minded professionals and contribute to creating
          impactful solutions that push the boundaries of technology.
        </p>
        <span className="inline-block h-72 w-72 absolute bg-[#00000060] shadow-2xl shadow-white -z-10 rounded-full -left-[10%] -bottom-[10%]"></span>
      </div>
    </section>
  );
};

export default About;
