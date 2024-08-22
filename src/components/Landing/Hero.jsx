import React from "react";
import profileImg from "../../assets/profile-img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { calculateExp } from "../../common/common";

const Hero = () => {
  return (
    <div id="Home" className="flex items-center flex-col gap-9">
      <img
        className="mt-36 rounded-full mob:mt-16 mob:w-64"
        src={profileImg}
        alt="profile-img"
        width="256"
        height="288"
        loading="lazy"
      />
      <h1 className="text-center w-9/12 text-7xl font-semibold mob:mt-12 mob:w-[90%] mob:text-5xl">
        <span className="bg-gradient-to-r from-fuchsia-500 to-amber-500 bg-clip-text text-transparent">
          I'm Chandru
        </span>
        , Front End Developer
      </h1>
      <p className="w-6/12 text-center text-2xl mob:w-2/3 mob:text-lg mob:my-2">
        I am a Front End Developer from Chennai, India with {calculateExp()}{" "}
        year of experience in React JS
      </p>
      <div className="flex mob:flex-wrap justify-center items-center gap-6 font-semibold mb-12 mob:mb-12 mob:gap-4 ">
        <div className="py-6 px-11 rounded-full cursor-pointer bg-gradient-to-r from-fuchsia-500 to-amber-500 hover:border-2 border-white border-solid">
          <AnchorLink href="#Contact" offset={50}>
            Connect with Me
          </AnchorLink>
        </div>
        <a
          href={process.env.REACT_APP_RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="py-6 px-16 border-2 border-white border-solid rounded-full cursor-pointer hover:border-fuchsia-500"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
