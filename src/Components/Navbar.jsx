/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Search from "./Utils/Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
  }, []);
  const NavItems = (
    <>
      {" "}
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/CourseSection">Course</Link>
      </li>
      <li>
        <Link to="/ContactSection">Contact</Link>
      </li>
      <li>
        <Link to="/AboutSection">About</Link>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`max-w-screen-2xl z-50 font-semibold container mx-auto md:px-20 px-4 dark:bg-slate-700 dark:text-white fixed top-0 left-0 right-0 backdrop-blur-sm bg-white/30${
          sticky
            ? " bg-white backdrop-filter dark:bg-slate-700 dark:text-white backdrop-blur"
            : ""
        } shadow-md duration-300 transition-all ease-in-out`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {NavItems}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">StuCode</a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center flex-grow px-4">
              <div className="hidden md:block">
                <Search />
              </div>
            </div>
            <div>
              <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                <Link to="/Login">Login</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
