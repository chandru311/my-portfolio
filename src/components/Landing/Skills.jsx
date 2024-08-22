import React from "react";
import theme from "../../assets/theme_pattern.svg";
import SkillsData from "../../common/skills_data";

const Skills = () => {
  return (
    <div
      id="Services"
      className="flex flex-col items-center content-center justify-center gap-20 my-20 mx-44 mob:my-12 mob:mx-16 mob:items-start"
    >
      <div className="relative">
        <h1 className="px-7 text-7xl font-semibold mob:text-5xl mob:p-0">
          My Skills
        </h1>
        <img
          className="absolute bottom-0 right-0 mob:w-32 mob:-right-5"
          src={theme}
          alt="theme"
          style={{ zIndex: -1 }}
          loading="lazy"
        />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mb-20 sm:grid-cols-1">
        {SkillsData.map((s) => (
          <div
            key={s.no}
            className="flex flex-col content-center gap-5 p-14 rounded-lg border-2 border-solid border-white hover:scale-105 duration-300 hover:border-pink-500 "
          >
            <img
              src={s.icon}
              height={"150px"}
              width={"150px"}
              alt="skills"
              loading="lazy"
            />
            <h2 className="text-4xl text-center font-extrabold bg-gradient-to-r from-fuchsia-500 to-amber-500 bg-clip-text text-transparent">
              {s.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
