import React from "react";
import LeftNavBtn from "./LeftNavBtn";

const LeftNav = () => {
  return (
    <div className="w-[25%] md:w-[15%] h-[87vh] flex flex-col justify-around items-center smd:flex-row smd:mt-4 smd:w-full">
      <div className="flex-[70%] flex flex-col items-center justify-evenly smd:flex-row  ">
        <LeftNavBtn />
        <LeftNavBtn />
        <LeftNavBtn />
        <LeftNavBtn />
      </div>
      <div className="flex-[30%] flex-col flex justify-center items-center  smd:absolute smd:top-[37rem] sm:top-[58rem] ">
        <div className="h-[100px] bg-gray-600 w-60 lg:w-[11rem] md:w-24 smd:w-[20rem]">
          ads
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
