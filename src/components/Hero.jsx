import React from "react";

const Hero = () => {
  return (
    <div className=" text-gray-700 " id="home">
      <div className="h-72 md:h-[480px] bg-fixed bg-left bg-gradient-to-b from-black to-gray-400 relative">
        <img
          alt="A picture of our machines"
          className="w-full h-full z-10 object-cover object-center absolute mix-blend-overlay"
        />
        <div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold py-2 m-5 mt-[90px] bg-gradient-to-r from-emerald-500 to-slate-300 text-transparent bg-clip-text inline-block">
            Serving aluminum makers since 1960.
          </h1>
          <p className="text-right text-xl sm:text-3xl md:text-5xl m-5 pb-2 font-bold bg-gradient-to-r from-slate-300 to-emerald-500 text-transparent bg-clip-text">
            Dedicated to excellence and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
