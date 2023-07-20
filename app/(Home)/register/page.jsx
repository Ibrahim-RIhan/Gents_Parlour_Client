import React from "react";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10  place-content-center place-items-center">
      <div className="px-7 py-5 border rounded-xl  border-gray-600">
        <h3 className="text-4xl font-bold mt-5 mb-10">
          Create New Account
        </h3>
        <input
          className="border-b border-gray-600 transition-all block hover:scale-105 w-full focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-10"
          placeholder="Your Name"
          type="text"
        />
        <input
          className="border-b border-gray-600 transition-all block hover:scale-105 w-full focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-10"
          placeholder="Your Email Address"
          type="email"
        />
        <input
          className="border-b border-gray-600 transition-all block hover:scale-105 w-full focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-10"
          placeholder="Password"
          type="password"
        />
        <input type="file" className="file-input file-input-bordered border-b border-gray-600 transition-all block hover:scale-105 w-full focus:outline-none placeholder:px-2 placeholder:text-gray-500 mb-10" />
        <button className="btn-black w-full">Create New Account</button>

        <p className="text-center mt-5 text-gray-500">
          Already have an account?{" "}
          <a className="text-purple-500 font-semibold" href="">
            Login
          </a>
        </p>
      <div class="divider">OR</div>
      <button className="flex justify-center gap-3 border border-gray-600 transition-all hover:scale-105 rounded-xl py-2 px-5 hover:bg-stone-800 hover:text-white w-full items-center">
        <FaGoogle></FaGoogle> 
        <p>Continue with Google</p>
      </button>
      </div>
    </div>
  );
};

export default Register;
