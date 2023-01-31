import React, { Fragment } from "react";

const NavButton = () => {
  return (
    <Fragment>
      <button
        className={` bg-white p-1 w-36 lg:w-28 md:w-20 border-none rounded-3xl sm:w-[80%] `}
      >
        Button
      </button>
    </Fragment>
  );
};

export default NavButton;
