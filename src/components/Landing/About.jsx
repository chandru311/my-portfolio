import React from "react";
import theme from "../../assets/theme_pattern.svg";
import mywork_data from "../../common/mywork_data";
import { calculateExp } from "../../common/common";

const About = () => {
  const achievements = [
    { head: calculateExp(), p: "Years of Experience", id: 1 },
    { head: mywork_data.length, p: "Projects", id: 2 },
  ];

  return (
    <div
      id="About"
      className="flex flex-col items-center justify-center gap-20 my-20 mx-44 mob:my-12 mob:mx-16 mob:items-start"
    >
      <div id="title" className="relative">
        <h1 className="px-7 text-7xl font-semibold mob:text-5xl mob:p-0">
          About Me
        </h1>
        <img
          className="absolute bottom-0 right-0 mob:w-32 mob:-right-5"
          style={{ zIndex: -1 }}
          src={theme}
          alt="theme"
          loading="lazy"
        />
      </div>
      <div id="section" className="flex gap-20 mob:flex-col">
        <div id="about-left" className="mob:hidden"></div>
        <div id="about-right" className="flex flex-col gap-20">
          <div id="info" className=" flex flex-col gap-5 text-2xl font-medium">
            <p className="mob:text-lg">
              I'm a React Developer with more than a year of experience in
              creating lively websites. I've teamed up with others develop
              user-friendly interfaces that boost engagement and get more done.
              My work includes developing a website for an online money-changing
              service. I focused on features that let users exchange currency
              online without any issues. I also know the basics of Web API
              development in ASP.NET. Right now, I'm learning Node.js and
              MongoDB to enhance my skills for full-stack development.
            </p>
          </div>
        </div>
      </div>
      <div
        id="acievements"
        className="flex justify-center content-around text-center mb-20 mob:justify-between mob:flex-col"
      >
        {achievements.map((a) => (
          <div
            id={a.id}
            key={a.id}
            className="flex flex-col content-around px-20 md:border-r-2 items-center hover:scale-110 duration-500"
          >
            <h1 className="text-6xl font-bold bg-gradient-to-r from-fuchsia-500 to-amber-500 bg-clip-text text-transparent">
              {a.head}
            </h1>
            <p className=" font-medium text-xl mob:mb-6">{a.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
