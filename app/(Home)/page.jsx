import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Featured from "@/components/Featured";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <Service></Service>
      </div>
      <Featured></Featured>
      <div className="container mx-auto">
        <Testimonial></Testimonial>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default HomePage;
