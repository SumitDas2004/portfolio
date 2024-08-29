import React from "react";
import "./Projects.css";
import silentnotes from "../assets/silentnotes.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="project" className="relative px-3 flex flex-col items-center justify-evenly min-h-screen py-20 w-full bg-black">
      <span
        className=" popUpAnimation heading font-bold text-5xl top-16 inline-block"
      >
        My Projects
      </span>
      <div className="w-11/12 h-max flex justify-center items-center flex-wrap gap-8">
        <ProjectCard
        className={'leftToRightAnimation'}
          description={`Engineered a social media platform enabling anonymous communication
            among college students, where students can safely express their
            thoughts without concern for their identity.`}
          image={silentnotes}
          deployment={"https://silentnotes.vercel.app"}
          github={"https://www.github.com/SumitDas2004/SilentNotes"}
          name={"SilentNotes"}
        />
        <ProjectCard
        className={"rightToLeftAnimation"}
          description={`Built a real-time, multiplayer game where 2-8 users can connect over a network to draw and guess. One player acts
as the artist, sketching a concept on a shared canvas, while others try to guess it.`}
          image={
            "https://raw.githubusercontent.com/SumitDas2004/Doodle/main/playerarea.png"
          }
          deployment={"https://doodlefrontend.vercel.app"}
          github={"https://www.github.com/SumitDas2004/Doodle"}
          name={"Doodle"}
        />
      </div>
    </section>
  );
};

export default Projects;
