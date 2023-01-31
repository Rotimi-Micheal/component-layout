import React, { Fragment } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserIcon = () => {
  return (
    <Fragment>
      <div
        className={`h-[40px] w-10 flex items-center justify-center border-none rounded-[50%]  mr-7 sm:mr-0 cursor-pointer`}
      >
        <AccountCircleIcon style={{ color: "white", fontSize: "35px" }} />
      </div>
    </Fragment>
  );
};

export default UserIcon;
