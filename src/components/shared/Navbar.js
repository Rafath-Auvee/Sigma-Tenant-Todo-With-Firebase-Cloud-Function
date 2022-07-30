import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./../Context/ThemeContext";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const userMenu = (
    <>
      <div className="flex items-center ">
        <li className="hover">
          <Link to="/">Home</Link>
        </li>
        <li className="hover">
          <Link to="/add">Add Task</Link>
        </li>
        <DarkModeToggle onToggle={setIsDarkMode} />
      </div>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {userMenu}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Rafath Todo</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{userMenu}</ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Navbar;
