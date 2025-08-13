import React from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Tools from "./../components/Tools";
import Testimonial from "../components/Testimonial";
import Plans from "../components/Plans";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Tools />
      <Testimonial />
      <Plans />
      <Footer />
    </>
  );
};

export default Home;
