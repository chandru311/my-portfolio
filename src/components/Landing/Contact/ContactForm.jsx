import React from "react";

const ContactForm = () => {
  const emailAccessKey = process.env.REACT_APP_EMAIL_ACCESS_KEY;
  const emailAccessUrl = process.env.REACT_APP_EMAIL_ACCESS_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", emailAccessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch(emailAccessUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message Sent");
    }
  };

  return (
    <React.Fragment>
      <form className="flex flex-col items-start gap-7" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter Your Name" />
        <label htmlFor="">Email</label>
        <input type="email" name="email" placeholder="Enter Your Name" />
        <label htmlFor="">Write Your Message</label>
        <textarea name="message" rows={8} placeholder="Type Your Message" />
        <button type="submit" className="">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default ContactForm;
