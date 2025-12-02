import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="w-32 h-36 p-[2px] rounded-2xl 
                     bg-gradient-to-br from-[#8a2eff] via-[#00f0ff] to-[#ff3ec9]"
        >
          <div
            className="bg-[#0c0f27] w-full h-full rounded-2xl
                          flex flex-col justify-center items-center"
          >
            <img
              src={technology.icon}
              className="w-14 h-14 object-contain"
              alt={technology.name}
            />
            <p className="text-white mt-3 text-sm font-semibold">
              {technology.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
