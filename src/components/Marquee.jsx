import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 overflow-hidden border-zinc-300 flex whitespace-nowrap">
        <motion.h1
          intial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className="text-[24vw] font-bangla leading-none font-bold uppercase pt-1 px-5 mb-[0.5vw]"
        >
          bang the web
        </motion.h1>
        <motion.h1
          intial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className="text-[24vw] font-bangla leading-none font-bold uppercase pt-1 px-5 mb-[0.5vw]"
        >
          bang the web
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
