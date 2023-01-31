import React, { Fragment } from "react";

const SearchInput = () => {
  return (
    <Fragment>
      <input
        className={`w-[40%] h-[40px] border-none rounded-3xl mx-1 md:mr-4 pl-4`}
        type={`search`}
        placeholder={`Search....`}
      />
    </Fragment>
  );
};

export default SearchInput;
