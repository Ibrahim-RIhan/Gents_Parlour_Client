"use client";
import Image from "next/image";
import React from "react";
import featured from "@/assets/featured.png";

const Featured = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row  justify-center items-center place-content-center place-items-center  bg-[#FFF8F5] my-10 py-12  gap-10">

      <div>
        <Image src={featured}></Image>
      </div>
      <div>
        <h3 className="text-4xl font-semibold ">Let us handle your <br /> screen <span className="text-blue-950 font-bold">Professionally.</span></h3>
        <p className="my-7 w-1/2 text-gray-600">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quos, ex inventore minus eius earum nostrum optio! Sint, architecto maiores?
        </p>
        <div className="flex justify-start gap-10">
            <div>
                <p className="text-2xl font-bold text-blue-950 ">500+</p>
                <p>Happy Customer</p>
            </div>
            <div>
                <p className="text-2xl font-bold text-blue-950 ">11+</p>
                <p>Total Service</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
