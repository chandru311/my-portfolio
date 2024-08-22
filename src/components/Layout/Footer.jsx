import React from "react";

const Footer = () => {
  return (
    <div className="my-20 mx-44 mob:my-12 mob:mx-16">
      <hr />
      <div className="text-lg mt-5 mob:mb-12">
        <p className="mob:text-center">
          &copy;{new Date().getFullYear()} Chandru. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
