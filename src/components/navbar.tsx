import React from "react";
import classNames from "classnames";
type Props = {
  onMenuButtonClick(): void;
  setCollapsed(): void;
};
const Navbar = (props: Props) => {
  return (
    <nav
      className={classNames({
        " bg-black ": true,
        " items-center": true,
        "full md:w-full sticky z-10 shadow-sm h-[73px]  ": true,
      })}
    >
      <div className="navbar flex align-center  pt-5  w-full bg-base-100">
        <button
          role="button"
          onClick={() => props.setCollapsed()}
          className="btn btn-ghost btn-circle "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div className="flex-1">
          <div className="text-xl ml-2">Dashboard</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
