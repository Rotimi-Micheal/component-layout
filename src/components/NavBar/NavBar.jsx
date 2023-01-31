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
    <header className="header">
      <nav className="nav">
        <Logo />
        <SearchInput />
        <div className={toggleNav ? "togglenav" : "togglenavElse"}>
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
