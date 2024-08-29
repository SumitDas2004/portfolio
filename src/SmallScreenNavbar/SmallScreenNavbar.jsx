import React, { useState } from "react";
import './SmallScreenNavabar.css'

const SmallScreenNavbar = () => {
  const [selected, setSelected] = useState(1)
  return (
    <div
      className=" lg:hidden fixed bottom-10 h-14 w-full flex items-center justify-center"
    >
      <nav style={{boxShadow:" 0 0 15px white"}} className="container h-full w-11/12 max-w-[300px] bg-[rgba(0,0,0,0.6)] rounded-full flex justify-evenly items-center">
        <a href="#home" title="home" onClick={()=>setSelected(1)}><button className={`${selected===1 && 'bottomNavbarButtonsActive'} bottomNavbarButtons text-white h-12 w-12 hover:bg-[rgb(149, 51, 254)] cursor-pointer transition-all duration-200 rounded-full text-2xl flex justify-center items-center p-2`}><img src="https://img.icons8.com/?size=100&id=73&format=png&color=FFFFFF"/></button></a>
        <a href="#about"  title="about" onClick={()=>setSelected(2)}><button className={`${selected===2 && 'bottomNavbarButtonsActive'}  bottomNavbarButtons text-white h-12 w-12 hover:bg-[rgb(149, 51, 254)] cursor-pointer transition-all duration-200 rounded-full text-2xl flex justify-center items-center p-2`}><img src="https://img.icons8.com/?size=100&id=85139&format=png&color=FFFFFF"/></button></a>
        <a href="#skills" title="skills" onClick={()=>setSelected(3)}><button className={`${selected===3 && 'bottomNavbarButtonsActive'}  bottomNavbarButtons text-white h-12 w-12 hover:bg-[rgb(149, 51, 254)] cursor-pointer transition-all duration-200 rounded-full text-2xl flex justify-center items-center p-2`}><img src="https://img.icons8.com/?size=100&id=K7UWQpIZgEo1&format=png&color=FFFFFF"/></button></a>
        <a href="#project" title="project" onClick={()=>setSelected(4)}><button className={`${selected===4 && 'bottomNavbarButtonsActive'}  bottomNavbarButtons text-white h-12 w-12 hover:bg-[rgb(149, 51, 254)] cursor-pointer transition-all duration-200 rounded-full text-2xl flex justify-center items-center p-2`}><img src="https://img.icons8.com/?size=100&id=25391&format=png&color=FFFFFF"/></button></a>
        <a href="#contact" title="contact" onClick={()=>setSelected(5)}><button className={`${selected===5 && 'bottomNavbarButtonsActive'}  bottomNavbarButtons text-white h-12 w-12 hover:bg-[rgb(149, 51, 254)] cursor-pointer transition-all duration-200 rounded-full text-2xl flex justify-center items-center p-2`}><img src="https://img.icons8.com/?size=100&id=42357&format=png&color=FFFFFF"/></button></a>
      </nav>
    </div>
  );
};

export default SmallScreenNavbar;

