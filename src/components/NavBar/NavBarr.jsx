import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [toggleNav, setToggleNav] = useState(true);

  return (
    <header
      className={
        toggleNav
          ? "h-[300px] w-[100%] bg-gray-700 "
          : "bg-gray-700 flex items-center h-20 w-full border-none rounded-lg"
      }
    >
      <div className="flex">
        <div
          className={
            toggleNav
              ? "flex"
              : "flex-[60%] sm:flex-none xsm:flex-none lg:flex-[50%] flex items-center justify-between"
          }
        >
          <div className="w-24 md:w-16 text-center ml-7 bg-white">logo</div>
          <input
            type={`search`}
            className="w-[70%] lg:w-[60%] h-[30px] border-none rounded-3xl mx-1 md:mr-4 pl-4 "
            placeholder={`Search.....`}
          />
        </div>
        <nav
          className={
            toggleNav
              ? "flex"
              : "flex-[40%] sm:flex-none xsm:flex-none lg:flex-[50%] flex items-center justify-evenly"
          }
        >
          <button className="sm:hidden xsm:hidden block  bg-white p-1 w-36 md:w-24 border-none rounded-3xl hover:scale-[1]">
            Button
          </button>
          <button className="sm:hidden xsm:hidden block bg-white p-1 w-36 md:w-24 border-none rounded-3xl hover:scale-[1]">
            Button
          </button>
          <div className="h-[40px] w-10 flex items-center justify-center border-none rounded-[50%] bg-red-200">
            <h1>hii</h1>
          </div>
        </nav>
      </div>
      <div className="hidden sm:flex xsm:flex">
        <MenuIcon />
      </div>
    </header>
  );
};

export default NavBar;
