import React from "react";
import profile from "../assets/Profile2.jpg";

const ContactMeCard = () => {
  return (
    <div className="card mt-10 duration-500">
      <a href="mailto:sumitdasofficial29@gmail.com" target="_blank">
        <button className="mail">
          <svg
            className="lucide lucide-mail"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect rx="2" y="4" x="2" height="16" width="20"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </button>
      </a>
      <div className="profile-pic">
        {" "}
        <img className="" src={profile} />
      </div>
      <div className="bottom">
        <div className="content">
          <span className="name">Sumit Das</span>
          <span className="about-me">
            Email: sumitdasofficial29@gmail.com
          </span>
        </div>
        <div className="bottom-bottom">
          <div className="social-links-container">
            <a href="https://linkedin.com/in/sumit-das-sumitdas" target="_blank" className="text-2xl text-gray-600"><i className="fa-brands fa-linkedin hover:text-blue-700 transition-all"></i></a>
          </div>
          <a href="https://drive.google.com/file/d/15UBBxU2TLsOt5wgPHBZTMGjA1Wk9Lpwy/view?usp=sharing" target="_blank"><button className="button">Resume</button></a>
        </div>
      </div>
    </div>
  );
};

export default ContactMeCard;
