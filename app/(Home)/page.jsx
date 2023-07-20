"use client";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Featured from "@/components/Featured";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import { motion, useScroll } from "framer-motion";

const HomePage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.path
      d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
      style={{ pathLength: scrollYProgress }}
    >
      <Banner></Banner>
      <div className="container mx-auto">
        <Service></Service>
      </div>
      <Featured></Featured>
      <div className="container mx-auto">
        <Testimonial></Testimonial>
      </div>
      <Contact></Contact>
    </motion.path>
  );
};

export default HomePage;
