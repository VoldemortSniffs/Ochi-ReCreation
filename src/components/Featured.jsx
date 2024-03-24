import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap/all";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverend = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-15 ">
        <h1 className="font-com text-7xl font-light ">Feature Nature</h1>
      </div>
      <div className="w-full px-20 ">
        <div className="cards w-full flex gap-6 mt-15">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverend(0)}
            className="cardcontainer relative w-1/2 h-[70vh]"
          >
            <h1 className="absolute flex font-bangla overflow-hidden text-8xl z-[9] tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2">
              {"HILLS".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: index * 0.15,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden rounded-2xl">
              <img
                className="w-full h-full bg-cover"
                src="https://source.unsplash.com/random/?nature-hills"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverend(1)}
            className="cardcontainer relative w-1/2 h-[70vh] rounded-2xl"
          >
            <div className="card w-full h-full overflow-hidden rounded-2xl">
              <h1 className="absolute flex overflow-hidden font-bangla text-8xl z-[9] tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2">
                {"BEACH".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: index * 0.15,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://source.unsplash.com/random/?nature-beach"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
