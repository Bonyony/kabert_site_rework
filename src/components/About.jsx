import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold text-emerald-800 m-5 ">
            Quality and Experience
          </h1>
          <p className="text-md sm:text-xl mx-5 text-slate-800 ">
            Since 1960, Kabert Industries Inc. has been furnishing the aluminum
            industry with quality casting supplies. We continually strives to
            provide its customers with exceptional service. Our experienced
            sales staff has been helping aluminum makers solve casting problems
            for over 60 years.
          </p>
        </div>
        <div className="grid grid-cols-2 mx-5 my-8 gap-4">
          <div>
            <img
              className="w-full h-96 object-cover placeholder bg-slate-400 rounded-sm"
              alt="A picture of optimism"
            />
          </div>
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-emerald-800 mx-2 mb-5 basis-1/3">
              It's What We Do
            </h1>
            <p className="text-md sm:text-xl mx-2 text-slate-800 basis-2/3">
              High-twist fiberglass cloth is woven, cut and sewn at our plant
              specifically for aluminum distribution and filtration. Other
              products available include gaskets, vacuum formed shapes, and
              ceramic foam filters - all trusted by the aluminum industry for
              more than half a century.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* <div className="pt-16 bg-gradient-to-b from-stone-100 to-white" id="about">
<div className=" text-gray-700 flex-col my-8 mx-6 sm:mx-8 md:mx-10  p-6  shadow-lg shadow-emerald-900">
  <div className=" flex flex-col lg:flex-row">
    <h1 className="text-3xl sm:text-5xl font-bold text-emerald-800 m-2 basis-1/3">
      Quality and Experience
      <div className="bg-emerald-600 h-2 w-64 md:w-72"></div>
    </h1>
    <p className="text-md sm:text-xl mx-2 text-slate-800 basis-2/3">
      Since 1960, Kabert Industries Inc. has been furnishing the aluminum
      industry with quality casting supplies. We continually strives to
      provide its customers with exceptional service. Our experienced
      sales staff has been helping aluminum makers solve casting problems
      for over 60 years.
    </p>
  </div>
  <div>
    <img
      className="w-full h-96 object-cover placeholder my-4 bg-slate-400 rounded-xl"
      alt="A picture of optimism"
    />
  </div>
  <div className="kabert__about-blurb2 flex flex-col lg:flex-row-reverse">
    <h1 className="text-3xl sm:text-5xl font-bold text-emerald-800 mx-2 mb-2 basis-1/3">
      It's What We Do
      <div className="bg-emerald-600 h-2 w-40 md:w-52"></div>
    </h1>
    <p className="text-md sm:text-xl mx-2 text-slate-800 basis-2/3">
      High-twist fiberglass cloth is woven, cut and sewn at our plant
      specifically for aluminum distribution and filtration. Other
      products available include gaskets, vacuum formed shapes, and
      ceramic foam filters - all trusted by the aluminum industry for more
      than half a century.
    </p>
  </div>
</div>
</div> */
}
