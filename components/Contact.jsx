import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#FFF8F5] flex flex-col justify-center items-center h-full p-16">
      <div>
        <h3 className="text-5xl leading-relaxed text-blue-950 font-bold text-center my-10">
          Let us handle your <br />
          Project Professionally
        </h3>
        <div className="text-center">
        
          <input
            className="border  placeholder:text-gray-500 placeholder:px-1 px-5 w-full border-gray-700 transition-all hover:scale-105 py-3 rounded-lg "
            placeholder="Name"
            type="text"
          />
        </div>
        <div className="my-5 text-center">
          <input
            className="border placeholder:text-gray-500 placeholder:px-1 border-gray-700 transition-all hover:scale-105 py-3 px-5 lg:mr-5 w-full  mb-5 rounded-lg "
            placeholder="Email address"
            type="email"
          />
          <input
            className="border w-full placeholder:text-gray-500 placeholder:px-1 px-5 border-gray-700 transition-all hover:scale-105 py-3 rounded-lg "
            placeholder="Phone number"
            type="text"
          />
        </div>
        <div className="text-center ">
          <textarea
            placeholder="Your Message"
            className=" placeholder:text-gray-500 hover:scale-105 placeholder:px-3 placeholder:py-2 w-full border border-gray-700 transition-all rounded-lg"
            name=""
            id=""
            cols="20"
            rows="7"
          ></textarea>
        </div>
        <button className="btn-black w-full my-5">Send</button>
      </div>
    </div>
  );
};

export default Contact;
