import Image from "next/image";
import React from "react";
import image1 from "@/assets/makeup 1.png";

const Service = () => {
  return (
    <div className="my-20">
      <h1 className="text-center mb-10  text-blue-950 text-5xl font-bold ">
        Our Awesome Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center my-20 items-stretch place-items-center gap-7">
        <div className="flex flex-col justify-center items-center p-5 shadow-xl text-center transition-all hover:scale-105">
          <Image src={image1} />
          <h3 className="text-xl font-bold ">Anti Age Mask</h3>
          <h5 className="text-blue-900 my-2 font-semibold text-lg">$58</h5>
          <p className="text-base text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            officia!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-5 shadow-xl text-center transition-all hover:scale-105">
          <Image src={image1} />
          <h3 className="text-xl font-bold ">Anti Age Mask</h3>
          <h5 className="text-blue-900 my-2 font-semibold text-lg">$58</h5>
          <p className="text-base text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            officia!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-5 shadow-xl text-center transition-all hover:scale-105">
          <Image src={image1} />
          <h3 className="text-xl font-bold ">Anti Age Mask</h3>
          <h5 className="text-blue-900 my-2 font-semibold text-lg">$58</h5>
          <p className="text-base text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            officia!
          </p>
        </div>
      </div>
      <div className="flex mt-10 justify-center">
        <button className="btn-black">See more</button>
      </div>
    </div>
  );
};

export default Service;
