import React from "react";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10  place-content-center place-items-center">
      <div className="px-10 py-5 border rounded-xl md:w-1/3  border-gray-600">
        <h3 className="text-4xl font-bold mt-5 mb-10">Login Now</h3>
       
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
        <button className="btn-black w-full">Login</button>

        <p className="text-center mt-5 text-gray-500">
          New to Parlour_G?{" "}
          <a className="text-purple-500 font-semibold" href="">
           Register
          </a>
        </p>
        <div class="divider ">OR</div>
        <button className="flex justify-center gap-3 border border-gray-600 transition-all hover:scale-105 rounded-xl py-2 px-5 hover:bg-stone-800 hover:text-white w-full items-center">
          <FaGoogle></FaGoogle>
          <p>Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
