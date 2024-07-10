import React, {useEffect, useRef} from "react";

const Projects = () => {
  const container = useRef()

  const observer = new IntersectionObserver(entries=>{
    entries.forEach((entry)=>{
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
    <section id="projects" ref = {container} className=" relative z-10 h-max pb-20 w-full snap-center flex flex-col items-center">
      <span className=" duration-500 transition-all text-5xl font-bold mt-20 mb-10">
        Projects
      </span>
      {/* Projcet cards */}
      <div className="flip-card cursor-pointer p-2">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">Doodles<sub className="text-xs font-light">(Jun-Jul 2024)</sub></p>
              <p className=" mx-2">
              Built a real-time, multiplayer game (2-8 players) where users connect over a network to draw and guess. One player
              acts as the artist, sketching a concept on a shared canvas, while others try to guess it.</p>
            </div>
            <div className="flip-card-back text-left">
              <p className="title">Tech Stack</p>
              <p className="text-xs ml-2 mt-2">
                <strong>Frontend:</strong> Javascript, ReactJs, TailwindCSS, STOMP JS
              </p>
              <p className="text-xs ml-2">
                <strong>Backend:</strong> JAVA, SpringBoot, WebSockets
              </p>
              <span className="flex mt-4 justify-center">
              <a
                  href="https://doodlefrontend.vercel.app"
                  target="_blank"
                  className="mx-1"
                >
                  <span
                    title="link"
                    className=" flex justify-center items-center h-8 w-8 rounded-full bg-white hover:bg-blue-500 hover:text-white hover:scale-110 transition-all border-2 border-white "
                  >
                    <i className="fa-solid fa-link"></i>
                  </span>
                </a>
                <a
                  href="https://github.com/SumitDas2004/Doodle"
                  target="_blank"
                  className="mx-1"
                >
                  <span
                    title="link"
                    className=" flex justify-center items-center h-8 w-8 rounded-full bg-white hover:bg-black hover:text-white hover:scale-110 transition-all border-2 border-white "
                  >
                    <i className="fa-brands fa-github"></i>
                  </span>
                </a>

              </span>
            </div>
          </div>
        </div>
      <div className=" duration-500 transition-all flex flex-wrap justify-center items-start w-5/6">
        <div className="flip-card cursor-pointer p-2">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">Shorty<sub className="text-xs font-light">(Apr,2024)</sub></p>
              <p className=" mx-2">
                Shorty is a URL shortener Application that takes long URLs as
                input from user and generates shorter URLs based on that.
              </p>
            </div>
            <div className="flip-card-back text-left">
              <p className="title">Tech Stack</p>
              <p className="text-xs ml-2 mt-2">
                <strong>Frontend:</strong> HTML, CSS, Javascript
              </p>
              <p className="text-xs ml-2">
                <strong>Backend:</strong> JAVA, SpringBoot, MySQL
              </p>
              <span className="flex mt-4 justify-center">
                <a
                  href="https://sumitdas2004.github.io/shortyfrontend/"
                  target="_blank"
                  className="mx-1"
                >
                  <span
                    title="link"
                    className=" flex justify-center items-center h-8 w-8 rounded-full bg-white hover:bg-blue-500 hover:text-white hover:scale-110 transition-all border-2 border-white "
                  >
                    <i className="fa-solid fa-link"></i>
                  </span>
                </a>
                <a
                  href="https://github.com/SumitDas2004/shorty"
                  target="_blank"
                  className="mx-1"
                >
                  <span
                    title="Github"
                    className=" flex justify-center items-center h-8 w-8 rounded-full bg-white hover:bg-black hover:text-white hover:scale-110 transition-all border-2 border-white "
                  >
                    <i className="fa-brands fa-github"></i>
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="flip-card cursor-pointer p-2">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">CanvasBids<sub className="text-xs font-light">(May,2024)</sub></p>
              <p className=" mx-2 text-xs max-h-[80%]">
                Developed backend for a platform focused around artists where artists can post their artworks for auction.
              </p>
            </div>
            <div className="flip-card-back text-left">
              <p className="title">Tech Stack</p>
              <p className="text-xs ml-2">
                <strong>Backend:</strong> JAVA, SpringBoot, MySQL
              </p>
              <span className="flex mt-4 justify-center">
               
                <a
                  href="https://github.com/SumitDas2004/CanvasBids/"
                  target="_blank"
                  className="mx-1"
                >
                  <span
                    title="Github"
                    className=" flex justify-center items-center h-8 w-8 rounded-full bg-white hover:bg-black hover:text-white hover:scale-110 transition-all border-2 border-white "
                  >
                    <i className="fa-brands fa-github"></i>
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="flip-card cursor-pointer p-2">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">WhatsUp<sub className="text-xs font-light">(Aug,2023)</sub></p>
              <p className=" mx-2">
                WhatsUp is a realtime chatting application where users can create their account and communicate with other registered users.
              </p>
            </div>
            <div className="flip-card-back text-left">
              <p className="title">Tech Stack</p>
              <p className="text-xs ml-2 mt-2">
                <strong>Frontend:</strong> ReactJS, TailwindCSS, socket.io
              </p>
              <p className="text-xs ml-2">
                <strong>Backend:</strong> ExpressJS, Socket.io, MongoDB
              </p>
              <span className="flex mt-4 justify-center">
                <a
                  href="https://whatsup-5lru.onrender.com/"
                  target="_blank"
                  className="mx-1"
                >
                  <span
                    title="link"
                    className=" flex justify-center items-center h-8 w-8 rounded-full bg-white hover:bg-blue-500 hover:text-white hover:scale-110 transition-all border-2 border-white "
                  >
                    <i className="fa-solid fa-link"></i>
                  </span>
                </a>
                <a
                  href="https://github.com/SumitDas2004/whatsUpFrontend"
                  target="_blank"
                  className="mx-1"
                >
                  <span
                    title="Frontend"
                    className=" flex justify-center items-center h-8 w-8 rounded-full bg-white hover:bg-black hover:text-white hover:scale-110 transition-all border-2 border-white "
                  >
                    <i className="fa-brands fa-github"></i>
                  </span>
                </a>
                <a
                  href="https://github.com/SumitDas2004/whatsUpBackend"
                  target="_blank"
                  className="mx-1"
                >
                  <span
                    title="Backend"
                    className=" flex justify-center items-center h-8 w-8 rounded-full bg-white hover:bg-black hover:text-white hover:scale-110 transition-all border-2 border-white "
                  >
                    <i className="fa-brands fa-github"></i>
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
