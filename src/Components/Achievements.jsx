import React,{useEffect, useRef} from "react";

const Achievements = () => {
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
    <section id="achievements" ref={container} className=" h-full w-full snap-start flex flex-col items-center">
      <span className=" duration-500 transition-all text-5xl font-bold mt-20 mb-10">
        Achievements
      </span>
      <ul className=" transition-all duration-500 max-w-[600px] list-disc left-4 relative flex flex-col w-5/6">
        <li className=" relative mt-1 cursor-pointer hover:underline after:h-0 after:w-0 after:top-1 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-[22rem] after:bg-white after:block  after:bg-leetcode after:bg-cover after:shadow-md after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10">
          <a href="https://leetcode.com/u/sumit2018das2004/" target="_blank">Rated <strong>Knight</strong> at Leetcode (Max:2046).</a>
        </li>
        <li className=" relative mt-1 cursor-pointer hover:underline after:h-0 after:w-0 after:top-1 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-[22rem] after:bg-white after:block  after:bg-codeforces after:bg-cover after:shadow-md after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10">
          <a href="https://codeforces.com/profile/sumit2018das2004" target="_blank"><strong>Specialist</strong> at Codeforces (Max:1495).</a>
        </li>
        <li className=" relative mt-1 cursor-pointer hover:underline after:h-0 after:w-0 after:top-1 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-72 after:bg-white after:block  after:bg-codechef after:bg-cover after:shadow-md after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10">
          <a href="https://www.codechef.com/users/sumit2004das" target="_blank"><strong>4*</strong> at Codeforces (Max:1804).</a>
        </li>
        <li className=" relative mt-1 cursor-pointer">
          <strong>Ranked 98 globally</strong> in TCS Codevita season 11 round 1 and 729 in round
          2.
        </li>
        <li className=" relative mt-1 cursor-pointer">
          Rewarded <strong>Reliance Foundation Scholarship</strong> 2023.
        </li>
        <li className=" relative mt-1 cursor-pointer after:h-0 after:w-0 after:top-16 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-96 after:bg-white after:block  after:bg-gfg after:bg-cover after:shadow-md after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10">
          Attained <strong>45th</strong> rank at <strong>GeeksForGeeks Career Advancement Test</strong> and got
          enrollment to GeeksForGeeks’ DSA to Development course.
        </li>
        <li className=" hover:underline relative mt-1 cursor-pointer after:h-0 after:w-0 after:top-8 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-36 after:bg-white after:block  after:bg-certificate after:bg-cover after:shadow-md after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10">
          <a href="https://drive.google.com/file/d/10PdCQbfqAdB5pfn-QCRL-OZVPhMLwRBw/view?usp=drive_link" target="_blank">Completed <strong>DSA to Development</strong> course by GeeksForGeeks.</a>
        </li>
        <li className=" hover:underline relative mt-1 cursor-pointer after:h-0 after:w-0 after:top-8 hover:after:w-14 hover:after:h-14 after:transition-all after:absolute after:left-40 after:bg-white after:block  after:bg-certificate after:bg-cover after:shadow-md after:shadow-[#000000a7] after:rounded-xl after:overflow-hidden after:rounded-tl-none after:z-10">
          <a href="https://drive.google.com/file/d/1gqjZtZvLF-w0PlsZGum4NP_aaCaBfaxp/view?usp=drive_link" target="_blank">Completed <strong>JAVA backend development</strong> live course by GeeksForGeeks.</a>
        </li>
        <li className=" relative mt-1 cursor-pointer">
        Solved <strong>2000+</strong> problems across platforms.(GeeksForGeeks, LeetCode,
          CodeForces and CodeChef)
        </li>
      </ul>
    </section>
  );
};

export default Achievements;
