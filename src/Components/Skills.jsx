import React,{useEffect, useRef} from "react";

const Skills = () => {

  const container = useRef()

  const observer = new IntersectionObserver(entries=>{
    entries.forEach((entry, index)=>{
      entry.target.classList.toggle('scale-50', !entry.isIntersecting)
        entry.target.classList.toggle('text-transparent', !entry.isIntersecting)

    })
  })

  useEffect(() => {
    container.current.childNodes.forEach(node=>{
      observer.observe(node)
    })
  }, [])
  

  return (
    <section id="skills" ref = {container} className=" relative z-10 pb-16 w-full snap-start flex flex-col items-center">
      <span className=" duration-500 transition-all text-5xl font-bold mt-20 mb-10">
        Skills
      </span>
      <div className="transition-all duration-500 w-full flex flex-wrap justify-center items-start">
        <div className=" self-start ml-8 w-4/6 max-w-80 mt-5">
          <span className=" pl-1 inline-block border-b-2 text-lg font-semibold border-blue-800 w-full">
            Frontend
          </span>
          <ul className="  list-disc left-4 relative">
            <li className=" relative mt-1 cursor-pointer  after:h-0 after:w-0 after:top-1 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-11 after:bg-white after:block after:bg-html after:bg-cover after:shadow-md after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10 content">
              HTML
            </li>
            <li className=" relative mt-1 cursor-pointer  after:h-0 after:w-0 after:top-1 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-10 after:bg-white after:block after:bg-css after:bg-cover after:shadow-md after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10 content">
              CSS
            </li>
            <li className=" relative mt-1 cursor-pointer  after:h-0 after:w-0 after:top-1 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-24 after:bg-white after:block after:bg-javascript after:bg-cover after:shadow-md after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10">
              JavaScript
            </li>
            <li className=" relative mt-1 cursor-pointer  after:h-0 after:w-0 after:top-1 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-24 after:bg-white after:block after:bg-tailwind after:bg-cover after:shadow-md after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10">
              TailwindCSS
            </li>
            <li className=" relative mt-1 cursor-pointer  after:h-0 after:w-0 after:top-1 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-16 after:bg-white after:block after:bg-react after:bg-cover after:shadow-md after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10">
              ReactJS
            </li>
          </ul>
        </div>
        <div className=" mt-5 self-start ml-8 w-4/6 max-w-80">
          <span className="pl-1 inline-block border-b-2 text-lg font-semibold border-blue-800 w-full">
            Backend
          </span>
          <ul className=" list-disc left-4 relative ">
            <li className=" relative mt-1 cursor-pointer  after:h-0 after:w-0 after:top-1 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-12 after:bg-white after:block  after:shadow-md after:bg-java after:bg-cover after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10">
              JAVA
            </li>
            <li className=" relative mt-1 cursor-pointer  after:h-0 after:w-0 after:top-1 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-24 after:bg-white after:block  after:shadow-md after:bg-springboot after:bg-cover after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10">
              SpringBoot
            </li>
            <li className=" relative mt-1 cursor-pointer  after:h-0 after:w-0 after:top-1 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-12 after:bg-white after:block  after:shadow-md after:bg-mysql after:bg-cover after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10">
              MySQL
            </li>
            <li className=" relative mt-1 cursor-pointer  after:h-0 after:w-0 after:top-1 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-14 after:bg-white after:block  after:shadow-md after:bg-redis after:bg-cover after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10">
              Redis
            </li>
            <li className=" relative mt-1 cursor-pointer  after:h-0 after:w-0 after:top-1 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-14 after:bg-white after:block  after:shadow-md after:bg-kafka after:bg-cover after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none ">
              Kafka
            </li>
          </ul>
        </div>{" "}
        <div className=" mt-5 self-start ml-8 w-4/6 max-w-80">
          <span className=" pl-1 inline-block border-b-2 text-lg font-semibold border-blue-800 w-full">
            Others
          </span>
          <ul className=" list-disc left-4 relative ">
            <li className=" relative mt-1 cursor-pointer  after:h-0 after:w-0 after:top-1 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-14 after:bg-white after:block  after:bg-github after:bg-cover after:shadow-md after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10">
              GitHub
            </li>
            <li className=" relative mt-1 cursor-pointer  after:h-0 after:w-0 after:top-1 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-14 after:bg-white after:block  after:bg-docker after:bg-cover after:shadow-md after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10">
              Docker
            </li>
            <li className=" relative mt-1 cursor-pointer  after:h-0 after:w-0 after:top-1 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-14 after:bg-white after:block  after:bg-vscode after:bg-cover after:shadow-md after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10">
              VSCode
            </li>
            <li className=" relative mt-1 cursor-pointer  after:h-0 after:w-0 after:top-1 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-32 after:bg-white after:block  after:bg-intellij after:bg-cover after:shadow-md after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10">
              IntelliJ IDEA
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
