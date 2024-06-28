import React, { useEffect, useRef } from "react";

const About = () => {
  const heading = useRef()
  const para = useRef()

  const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        entry.target.classList.toggle('scale-50', !entry.isIntersecting)
        entry.target.classList.toggle('text-transparent', !entry.isIntersecting)

      })
  })
  useEffect(()=>{
    observer.observe(heading.current)
    observer.observe(para.current)
  }, [])

  return (
    <section id="about" className=" relative z-10 min-h-screen pb-20 overflow-hidden w-full flex flex-col items-center snap-center">
      <span ref={heading} className=" sctext-transparent duration-500 transition-all text-5xl font-bold mt-20">About</span>
      <p ref={para} className="text-justify text-transparent duration-500 transition-all w-11/12 max-w-[725px] mt-10 text-sm">
        I am a passionate Computer Application undergraduate student at Narula
        Institute of Technology, currently advancing towards graduation in 2025.
        Throughout my academic journey, I have diligently cultivated expertise
        in a range of technologie. My
        proficiency spans <strong>JavaScript, ReactJS, Java, and SpringBoot</strong>, enabling me
        to architect robust and efficient applications across diverse platforms.<br/>
        Beyond technical skills, I pride myself on a strong foundation in data
        structures and algorithms. I'm rated <strong>Knight on LeetCode, Specialist on CodeForces, and a 4-star rating on
        Codechef</strong>.<br/>
        In recognition of my academic
        excellence and potential, I was honored with the prestigious <strong>Reliance
        Foundation Scholarship in 2023</strong>. As I embark on the next phase of my career, I
        am particularly drawn to full-stack development roles where I can
        leverage my comprehensive skill set to contribute meaningfully to
        innovative projects. I am eager to collaborate with like-minded
        professionals and contribute to creating impactful solutions that push
        the boundaries of technology.
      </p>
    </section>
  );
};

export default About;
