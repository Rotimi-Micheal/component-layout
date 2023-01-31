import React from "react";
import Banner from "./RightSideContent/Banner";
import LeftNav from "./leftSideNavBar/LeftNav";
import RightSideContent from "./RightSideContent/RightSideContent";

const HeroSection = () => {
  return (
    <section className="container">
      <div className="flex w-[100%] h-[87vh] smd:flex-col smd:items-center smd:relative">
        {/* left */}
        <LeftNav />
        {/* Right */}
        <div className="w-[75%] md:w-[85%] h-[87vh] flex flex-col smd:w-full  ">
          <Banner />
          <RightSideContent />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
