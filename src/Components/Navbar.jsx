import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const listContainer = useRef()
    const hamBurger = useRef()

    useEffect(() => {
      document.body.addEventListener('click', (e)=>{
        if(!listContainer.current.contains(e.target) && !hamBurger.current.contains(e.target) && window.innerWidth<=768)setIsMenuVisible(false)
      })
    window.addEventListener('resize', ()=>{
        if(window.innerWidth>=768){
            setIsMenuVisible(true);
        }
        hamBurger.current.classList.toggle('hidden', window.innerWidth>=768)
    })
    }, [])
    

  return (
    <div className=" h-14 bg-[#fbb9b652] backdrop-blur-sm w-screen flex items-center justify-between fixed top-0 z-50">
      <span
        className=" text-[#f55d56] font-extrabold text-2xl ml-[4%]"
        style={{
          fontFamily: '"Pacifico", cursive',
          fontOticalSizing: "auto",
          fontStyle: "normal",
        }}
      >
        Sumit Das
      </span>
      <span ref={hamBurger} onClick={()=>setIsMenuVisible(!isMenuVisible)} className={`${isMenuVisible?"justify-center":"justify-between"} w-7 h-6 mr-[4%] flex flex-col items-center cursor-pointer`}>
        <span className={` ${isMenuVisible && 'rotate-45 relative top-[0.125rem]'} duration-300 transition-all block w-full bg-[#727272] h-1 rounded-full`}></span>
        {!isMenuVisible && <span className={` inline-block w-full bg-[#727272] h-1 rounded-full`}></span>}
        <span className={` ${isMenuVisible && '-rotate-45 relative bottom-[0.125rem]'} duration-300 transition-all inline-block w-full bg-[#727272] h-1 rounded-full`}></span>
      </span>
      <ul ref={listContainer} onClick={()=>setIsMenuVisible(!isMenuVisible)}  className={` ${isMenuVisible && 'scale-100' || 'scale-0 -top-4 -right-10'} md:text-sm lg:text-base transition-all duration-300 bg-white md:w-max md:flex-row md:relative md:left-0 md:top-0 md:shadow-none md:bg-transparent rounded-sm  overflow-hidden flex flex-col absolute top-14 right-2 w-48 shadow-md shadow-[#0000006e] justify-center items-center text-center`}>
        <a href="#home" className="border-b  border-gray-300 md:border-none inline-block w-full">
          <li className=" mr-2 p-2 active:underline cursor-pointer hover:text-[#f55d56] transition-all hover:scale-110">
            Home
          </li>
        </a>
        <a href="#about" className=" border-b md:border-none border-gray-300 inline-block w-full text-center">
          <li className=" mr-2 p-2 active:underline  cursor-pointer hover:text-[#f55d56] transition-all hover:scale-110">
            About
          </li>
        </a>
        <a href="#skills" className=" border-b md:border-none border-gray-300 inline-block w-full text-center">
          <li className=" mr-2 p-2 active:underline  cursor-pointer hover:text-[#f55d56] transition-all hover:scale-110">
            Skills
          </li>
        </a>
        <a href="#projects"  className=" border-b md:border-none border-gray-300 flex text-center w-full">
          <li className=" inline-block w-full mr-2 p-2 active:underline  cursor-pointer hover:text-[#f55d56] transition-all hover:scale-110">
            Projects
          </li>
        </a>
        <a href="#achievements" className=" border-b md:border-none border-gray-300 flex text-center w-full">
          <li className=" inline-block w-full mr-2 p-2 active:underline  cursor-pointer hover:text-[#f55d56] transition-all hover:scale-110">
            Achievements
          </li>
        </a>
        <a href="#contact" className=" flex text-center w-full border-b md:border-none border-gray-300">
          <li className=" inline-block w-full mr-2 p-2 active:underline  cursor-pointer hover:text-[#f55d56] transition-all hover:scale-110">
            Contact
          </li>
        </a>
        <a href="https://drive.google.com/file/d/15UBBxU2TLsOt5wgPHBZTMGjA1Wk9Lpwy/view?usp=sharing" target="_blank" className="flex text-center w-full border-b md:border-none border-gray-300">
          <li className=" inline-block w-full mr-6 p-2 active:underline  cursor-pointer hover:text-[#f55d56] transition-all hover:scale-110">
            Resume
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
