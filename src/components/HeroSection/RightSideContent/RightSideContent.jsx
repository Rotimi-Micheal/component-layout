import React, { Fragment } from "react";
import BoxContainer from "./BoxContainer";

const RightSideContent = () => {
  return (
    <Fragment>
      <div className="mb-3 flex-[70%] flex-col flex justify-evenly">
        <BoxContainer />
        <BoxContainer />
      </div>
    </Fragment>
  );
};

export default RightSideContent;
