import React, { useEffect, useRef } from "react";
import "../Projects/Projects.css"
import "./Contact.css"

const Contact = ({setSelected}) => {
  const ref = useRef()

  useEffect(()=>{
    const observer = new IntersectionObserver(elm=>{
      if(elm[0].isIntersecting){
        setSelected(5)
      }
    },{
      threshold:0.5
    })
    observer.observe(ref.current)
    return ()=>observer.disconnect()
  }, [])
  return (
    <div ref = {ref} id="contact" className="bg-black relative overflow-clip h-full w-full flex justify-center items-center flex-col">
          <span style={{right:`${Math.round(Math.random()*1000%(window.innerWidth*90/100))}px`, top:`${Math.round(Math.random()*1000%(window.innerHeight*90/100))}px`, animationDelay:`${Math.random()*10%4}s`,}} className={`shootingStar z-10`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%(window.innerWidth*90/100))}px`, top:`${Math.round(Math.random()*1000%(window.innerHeight*90/100))}px`, animationDelay:`${Math.random()*10%4}s`,}} className={`shootingStar z-10`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%(window.innerWidth*90/100))}px`, top:`${Math.round(Math.random()*1000%(window.innerHeight*90/100))}px`, animationDelay:`${Math.random()*10%4}s`,}} className={`shootingStar z-10`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%(window.innerWidth*90/100))}px`, top:`${Math.round(Math.random()*1000%(window.innerHeight*90/100))}px`, animationDelay:`${Math.random()*10%4}s`,}} className={`shootingStar z-10`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%(window.innerWidth*90/100))}px`, top:`${Math.round(Math.random()*1000%(window.innerHeight*90/100))}px`, animationDelay:`${Math.random()*10%4}s`,}} className={`shootingStar z-10`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%(window.innerWidth*90/100))}px`, top:`${Math.round(Math.random()*1000%(window.innerHeight*90/100))}px`, animationDelay:`${Math.random()*10%4}s`,}} className={`shootingStar z-10`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%(window.innerWidth*90/100))}px`, top:`${Math.round(Math.random()*1000%(window.innerHeight*90/100))}px`, animationDelay:`${Math.random()*10%4}s`,}} className={`shootingStar z-10`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%(window.innerWidth*90/100))}px`, top:`${Math.round(Math.random()*1000%(window.innerHeight*90/100))}px`, animationDelay:`${Math.random()*10%4}s`,}} className={`shootingStar z-10`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%(window.innerWidth*90/100))}px`, top:`${Math.round(Math.random()*1000%(window.innerHeight*90/100))}px`, animationDelay:`${Math.random()*10%4}s`,}} className={`shootingStar z-10`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%(window.innerWidth*90/100))}px`, top:`${Math.round(Math.random()*1000%(window.innerHeight*90/100))}px`, animationDelay:`${Math.random()*10%4}s`,}} className={`shootingStar z-10`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%(window.innerWidth*90/100))}px`, top:`${Math.round(Math.random()*1000%(window.innerHeight*90/100))}px`, animationDelay:`${Math.random()*10%4}s`,}} className={`shootingStar z-10`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%(window.innerWidth*90/100))}px`, top:`${Math.round(Math.random()*1000%(window.innerHeight*90/100))}px`, animationDelay:`${Math.random()*10%4}s`,}} className={`shootingStar z-10`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%(window.innerWidth*90/100))}px`, top:`${Math.round(Math.random()*1000%(window.innerHeight*90/100))}px`, animationDelay:`${Math.random()*10%4}s`,}} className={`shootingStar z-10`}></span>
          <span style={{right:`${Math.round(Math.random()*1000%(window.innerWidth*90/100))}px`, top:`${Math.round(Math.random()*1000%(window.innerHeight*90/100))}px`, animationDelay:`${Math.random()*10%4}s`,}} className={`shootingStar z-10`}></span>

      <span className=" absolute top-36  heading font-bold text-5xl z-30 popUpAnimation">Contact me</span>

      {/* Contact buttons container */}
      <div className=" contactButtons transition-all z-30 flex justify-center items-center gap-4 w-fit h-min flex-wrap">
        {/* linkedin */}
        <a target="_blank" href="https://linkedin.com/in/sumit-das-sumitdas" className="cursor-pointer">
          <div className=" cursor-pointer w-16 aspect-square rounded-full p-1">
            <img src="https://img.icons8.com/?size=100&id=qNUNvR9aEWql&format=png&color=000000" />
          </div>
        </a>
        {/* github */}
        <a target="_blank" href="https://github.com/SumitDas2004" className="cursor-pointer">
          <div className="cursor-pointer w-16 aspect-square rounded-full p-1 invert">
            <img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" />
          </div>
        </a>

        {/* gmail */}
        <a target="_blank" href="mailto:sumitdasofficial29@gmail.com" className="cursor-pointer">
          <div className="cursor-pointer w-16 aspect-square rounded-full p-1">
            <img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" />
          </div>
        </a>
        {/* Leetcode */}
        <a target="_blank" href="https://leetcode.com/u/sumit2018das2004/" className="cursor-pointer">
          <div className="cursor-pointer w-16 aspect-square rounded-full p-1">
            <img src="https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=000000" />
          </div>
        </a>

        {/* Codeforces */}
        <a target="_blank" href="https://codeforces.com/profile/sumit2018das2004" className="cursor-pointer">
          <div className="cursor-pointer w-16 aspect-square rounded-full p-1">
            <img src="https://img.icons8.com/?size=100&id=jldAN67IAsrW&format=png&color=000000" />
          </div>
        </a>

        {/* Codechef */}
        <a target="_blank" href="https://www.codechef.com/users/sumit2004das" className="cursor-pointer">
          <div className="cursor-pointer w-16 aspect-square rounded-full p-1">
            <img src="https://img.icons8.com/?size=100&id=eqDiO9L02aEu&format=png&color=000000" />
          </div>
        </a>

        {/* GeeksFoGeeks */}
        <a target="_blank" href="https://www.geeksforgeeks.org/user/sumit2004/" className="cursor-pointer">
          <div className="cursor-pointer w-16 aspect-square rounded-full p-1">
            <img src="https://img.icons8.com/?size=100&id=AbQBhN9v62Ob&format=png&color=000000" />
          </div>
        </a>

        
      </div>
    </div>
  );
};

export default Contact;
