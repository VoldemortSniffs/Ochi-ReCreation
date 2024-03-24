import { easeIn, motion } from "framer-motion";
import React from "react";

function Landing() {
  return (
    <div
      data-scroll 
      data-scroll-section
      data-scroll-speed='-.3'
      className="w-full h-screen bg-zinc-900 pt-2"
    >
      <div className="textstructure mt-52 px-20">
        {["Get ready to", "Bang", "this website"].map((item, index) => (
          <div className="masker">
            <div className="w-fit flex">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="mr-3 mt-[2vw] rounded-lg w-[9vw] h-[5.5vw] flex items-center"
                >
                  <img
                    className="w-full h-[5.5vw] overflow-hidden rounded-lg"
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    alt=""
                  />
                </motion.div>
              )}
              <h1 className="pt-[2vw] -mb-[1vw] font-bold uppercase text-[7vw] font-bangla leading-[5.5vw] ">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {["Tailwind", "React", "JavaScript"].map((item, index) => (
          <div className="px-4 py-0 flex items-center gap-2 uppercase">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
