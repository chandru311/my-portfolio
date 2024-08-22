import React, { useEffect, useRef, useState } from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuOpen from "../../assets/menu_open.svg";
import menuClose from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();
  const navRef = useRef();
  const toggleMenu = (size) => {
    menuRef.current.style.right = size;
  };

  const menus = [
    { label: "Home", value: 1 },
    { label: "About", value: 2 },
    { label: "Services", value: 3 },
    { label: "Portfolio", value: 4 },
    { label: "Contact", value: 5 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768 && window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={navRef}
      className={`md:fixed md:top-0 md:w-full md:z-[10] ${
        scrolled ? "bg-[#1f0016]" : ""
      }`}
    >
      <div className="flex items-center justify-between m-6 mob:my-5 mob:mx-12">
        <img src="" alt="" />
        <img
          src={menuOpen}
          onClick={() => {
            toggleMenu("0");
          }}
          alt="menuOpen"
          className="md:hidden mob:block mob:absolute mob:right-7 mob:cursor-pointer"
          width="36"
          height="29"
          loading="lazy"
        />
        <ul
          ref={menuRef}
          className="flex items-center gap-14 text-xl mob:fixed mob:flex-col mob:items-start mob:top-0 mob:gap-7 mob:bg-[#1f0016] mob:w-[350px] mob:h-full mob:z-[2] duration-500 mob:origin-right mob:-right-[350px]"
        >
          <img
            src={menuClose}
            onClick={() => {
              toggleMenu("-350px");
            }}
            alt="menuClose"
            className="md:hidden mob:block mob:relative mob:top-7 mob:left-[290px] mob:w-7 mob:cursor-pointer"
            width="15"
            height="15"
            loading="lazy"
          />
          {menus.map((item) => (
            <li
              key={item.value}
              className="cursor-pointer flex flex-col gap-1 mob:pl-24 mob:flex-row mob:gap-5 mob:text-3xl"
              onClick={() => {
                setMenu(item.label);
              }}
            >
              <AnchorLink href={`#${item.label}`} offset={50}>
                <p>{item.label}</p>
              </AnchorLink>
              {menu === item.label ? (
                <img
                  className=" flex m-auto"
                  src={underline}
                  alt="nav-underline"
                  width="37"
                  height="12"
                  loading="lazy"
                />
              ) : (
                <></>
              )}
            </li>
          ))}
        </ul>
        <div className="mob:hidden px-8 py-4 rounded-3xl text-xl cursor-pointer bg-gradient-to-r from-fuchsia-500 to-amber-500 hover:scale-125 duration-500">
          <a href="#Contact" offset={50}>
            Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
