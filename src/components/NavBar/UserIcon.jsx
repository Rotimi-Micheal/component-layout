import React, { Fragment } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserIcon = () => {
  return (
    <Fragment>
      <div className="userIcon">
        <AccountCircleIcon style={{ color: "white", fontSize: "35px" }} />
      </div>
    </Fragment>
  );
};

export default UserIcon;
