import React from "react";
import image1 from "@/assets/test1.png"
import image2 from "@/assets/test2.png"
import image3 from "@/assets/test3.png"


import { FaRegStar, FaStar } from "react-icons/fa";
import Image from "next/image";


const Testimonial = () => {
  return (
    <div className="my-20 py-10">
      <h1 className="text-5xl font-bold text-center mb-20">Testimonial</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center my-10 justify-center">
        <div className="p-5 shadow-lg transition-all hover:scale-105 w-full ">
          <div className="flex justify-start gap-7 items-center">
            <Image src={image1}></Image>
            <div>
              <h1 className="text-xl font-bold ">Bria Malone</h1>
              <h4 className="text-base font-semibold">CEO, Monopol</h4>
            </div>
          </div>
          <p className="my-5 text-gray-600 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            exercitationem.
          </p>
          <div className="flex text-xl gap-1 text-yellow-500">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </div>
        
        </div>
        <div className="p-5 shadow-lg transition-all hover:scale-105 w-full ">
          <div className="flex justify-start gap-7 items-center">
            <Image src={image2}></Image>
            <div>
              <h1 className="text-xl font-bold ">Miriam Barron</h1>
              <h4 className="text-base font-semibold">CEO, Monopol</h4>
            </div>
          </div>
          <p className="my-5 text-gray-600 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            exercitationem.
          </p>
          <div className="flex text-xl gap-1 text-yellow-500">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </div>
        
        </div>
        <div className="p-5 shadow-lg transition-all hover:scale-105 w-full ">
          <div className="flex justify-start gap-7 items-center">
            <Image src={image3}></Image>
            <div>
              <h1 className="text-xl font-bold ">Nash Patrik</h1>
              <h4 className="text-base font-semibold">CEO, Monopol</h4>
            </div>
          </div>
          <p className="my-5 text-gray-600 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            exercitationem.
          </p>
          <div className="flex text-xl gap-1 text-yellow-500">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </div>
        
        </div>
       
        
      </div>
    </div>
  );
};

export default Testimonial;
