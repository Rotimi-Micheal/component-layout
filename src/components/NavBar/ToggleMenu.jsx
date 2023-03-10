import React, { Fragment } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const ToggleMenu = ({ onClick }) => {
  return (
    <Fragment>
      <div onClick={onClick} className="toggleMenu">
        <MenuIcon
          style={{
            marginRight: "10px",
            fontSize: "35px",
            color: "whitesmoke",
          }}
        />
      </div>
    </Fragment>
  );
};

export default ToggleMenu;
