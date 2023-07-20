import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="p-10 border border-gray-600">
        <h3 className="text-4xl font-bold mt-5 mb-10 text-center">
          Create New Account
        </h3>
        <input
          className="border-b border-gray-600 transition-all block hover:scale-105 w-full focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-10"
          placeholder="Your Name"
          type="text"
        />
        <input
          className="border-b border-gray-600 transition-all block hover:scale-105 w-full focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-10"
          placeholder="Your Name"
          type="text"
        />
        <input
          className="border-b border-gray-600 transition-all block hover:scale-105 w-full focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-10"
          placeholder="Your Name"
          type="text"
        />
        <input
          className="border-b border-gray-600 transition-all block hover:scale-105 w-full focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-10"
          placeholder="Your Name"
          type="text"
        />
        <button className="btn-black w-full">Create New Account</button>

        <p className="text-center mt-5 text-gray-500">
          Already have an account?{" "}
          <a className="text-purple-500 font-semibold" href="">
            Login
          </a>
        </p>
      </div>
      <div className="flex">
      
        <p>Or</p>
        <hr />
      </div>
    </div>
  );
};

export default Register;
