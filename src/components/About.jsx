import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">

      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>

      <div className="w-full flex gap-5 mt-20 border-t-[1px] pt-10 border-[#a1b562]">
        <div className="w-1/2">
        <h1 className="text-7xl">Our approch:</h1>
        <button className="flex gap-6 items-center uppercase px-6 py-4 mt-6 bg-zinc-900 rounded-full text-white">Read More
        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
        </button>
        </div>
        <div className="w-1/2 h-[60vh]">
        <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" className="w-full h-[60vh] rounded-3xl"/>
        </div>
      </div>
    </div>
  );
};

export default About;
