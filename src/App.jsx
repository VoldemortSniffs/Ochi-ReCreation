import React from "react";
import Navbar from "./components/navbar";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import About from "./components/About";
import GooglyEyes from "./components/GooglyEyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen overflow-hidden text-white bg-zinc-900">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <GooglyEyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
