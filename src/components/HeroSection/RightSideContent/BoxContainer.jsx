import React, { Fragment } from "react";
import Box from "./Box";

const BoxContainer = () => {
  return (
    <Fragment>
      <div className=" flex flex-col justify-evenly">
        <h1 className="text-2xl font-bold mb-2 pl-10">header</h1>
        <div className="grid grid-cols-4 justify-items-center  sm:grid-cols-2 ">
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    </Fragment>
  );
};

export default BoxContainer;
