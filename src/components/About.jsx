import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
  return (
    <div 
    data-scroll 
    data-scroll-section
    data-scroll-speed='-.3'
    className="w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black">
      <h1 className="font-com text-[3vw] leading-[4.5vw] tracking-tight">
        We have built a cool website for you to explore. Play as Much as you
        like, Here is the place where Voldemort Sniffs.
      </h1>
      <div className="w-full flex gap-5 mt-15 border-t-[1px] border-[#5c653d]">
        <div className="w-1/2">
          <h1 className="text-6xl font-bangla mt-5">Approach Me</h1>
          <button className="flex font-light items-center gap-5 px-7 py-4 bg-zinc-900 text-white rounded-full mt-10 font-com ">
            READ MORE
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[40vw] rounded-3xl bg-[#989997] mt-15 flex items-center justify-center overflow-hidden">
          <img
            className="w-full, h-full"
            src="https://source.unsplash.com/random/900x700/?city-road"
            alt="Media 4"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
