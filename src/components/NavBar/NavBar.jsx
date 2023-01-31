import React, { useState } from "react";
import SearchInput from "./SearchInput";
import Logo from "./Logo";
import UserIcon from "./UserIcon";
import NavButton from "./NavButton";
import ToggleMenu from "./ToggleMenu";

const NavBar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const toggleHandler = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <header className="h-[5rem] w-[100%] bg-gray-600">
      <nav
        className={`sm:relative flex items-center h-[5rem] border-none rounded-lg justify-between `}
      >
        <Logo />
        <SearchInput />
        <div
          className={
            toggleNav
              ? "absolute top-20 h-[10rem] w-[100%]  flex flex-col items-center justify-evenly bg-gray-600 z-20"
              : "w-[30%] flex justify-evenly sm:hidden xsm:hidden"
          }
        >
          <NavButton />
          <NavButton />
        </div>
        <UserIcon />
        <ToggleMenu onClick={toggleHandler} />
      </nav>
    </header>
  );
};

export default NavBar;
