import React from "react";
import theme from "../../../assets/theme_pattern.svg";
import mail from "../../../assets/mail_icon.svg";
import location from "../../../assets/location_icon.svg";
import call from "../../../assets/call_icon.svg";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contact = [
    { icon: mail, label: "contactchandru311@gmail.com" },
    { icon: call, label: "+91 9003083354" },
    { icon: location, label: "Chennai, India" },
  ];
  return (
    <div
      id="Contact"
      className="flex flex-col items-center content-center gap-20 my-20 mx-44 mob:my-12 mob:mx-16 mob:items-start"
    >
      <div className="relative">
        <h1 className="px-7 text-7xl font-semibold mob:text-5xl mob:p-0">
          Get In Touch
        </h1>
        <img
          src={theme}
          alt="theme"
          className="absolute bottom-0 right-0 mob:w-32 mob:-right-5"
          style={{ zIndex: -1 }}
        />
      </div>
      <div className=" flex gap-36 mob:flex-col mob:gap-16">
        <div className=" flex flex-col gap-7">
          <h1 className=" text-7xl font-bold bg-gradient-to-r from-fuchsia-500 to-amber-500 bg-clip-text text-transparent mob:text-6xl">
            Let's Talk
          </h1>
          <p className=" max-w-[550px] text-[#d8d8d8] text-xl mob:text-base">
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime
          </p>
          <div className="flex flex-col gap-8 text-[#d8d8d8] text-xl mob:gap-5">
            {contact.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-5 mob:gap-2"
              >
                <img src={item.icon} alt="icon" className="mob:w-6" />
                <p className="mob:text-xl">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
