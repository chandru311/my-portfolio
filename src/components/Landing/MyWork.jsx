import React from "react";
import theme from "../../assets/theme_pattern.svg";
import myWork from "../../common/mywork_data";

const MyWork = () => {
  return (
    <div
      id="Works"
      className="flex flex-col items-center content-center my-20 gap-10 mx-44 mob:my-12 mob:mx-16 mob:items-start"
    >
      <div className="relative">
        <h1 className="px-7 text-7xl font-semibold mob:text-5xl mob:p-0">
          My Works
        </h1>
        <img
          className="absolute bottom-0 right-0 mob:w-32 mob:-right-5"
          src={theme}
          alt="theme"
          style={{ zIndex: -1 }}
          loading="lazy"
        />
      </div>
      <div
        className={`grid ${
          myWork.length > 3 ? "lg:grid-cols-3" : ""
        } md:grid-cols-2 gap-10 mob:grid-cols-1 mob:gap-7 mb-20 mt-10`}
      >
        {myWork.map((work) =>
          work?.link ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={work.link}
              key={work.no}
            >
              <img
                className="box-border duration-300 cursor-pointer hover:scale-110 rounded-xl"
                src={work.img}
                alt={work.name}
                loading="lazy"
              />
            </a>
          ) : (
            <img
              className="box-border duration-300 cursor-pointer hover:scale-110 rounded-xl"
              key={work.no}
              src={work.img}
              alt={work.name}
              loading="lazy"
            />
          )
        )}
      </div>
    </div>
  );
};

export default MyWork;
