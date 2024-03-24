import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-[#252525] rounded-tl-3xl rounded-tr-3xl flex items-center gap-5 px-32">
      <div className="cardscontainer w-1/2 h-[50vh]">
        <div className="card relative rounded-xl flex items-center justify-center w-full h-full bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="Media 1"
          />
          <button className="absolute px-5 py-2 rounded-full border-[1px] border-zinc-100 left-10 bottom-10 uppercase text-xs">
            Click Me
          </button>
        </div>
      </div>
      <div className="cardscontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative rounded-xl flex items-center justify-center w-1/2 h-full bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="Media 2"
          />
          <button className="absolute px-5 py-2 rounded-full border-[1px] border-zinc-100 left-10 bottom-10 uppercase text-xs">
            Click Me
          </button>
        </div>
        <div className="card relative rounded-xl flex items-center justify-center w-1/2 h-full bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="Media 3"
          />
          <button className="absolute px-3 py-2 rounded-full border-[1px] border-zinc-100 left-10 bottom-10 uppercase text-xs">
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
