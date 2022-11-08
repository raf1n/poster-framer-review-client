import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(true);
  return (
    <div className="navbar bg-base-100 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user ? (
              <>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li tabIndex={0}>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/service/myservice" className="justify-between">
                    My services
                  </Link>
                </li>
                <li>
                  <Link to="/service/addservice" className="justify-between">
                    Add service
                  </Link>
                </li>
                <li>
                  <Link to="/reviews/addreview" className="justify-between">
                    Add review
                  </Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li tabIndex={0}>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div>
          <Link className="flex items-center" to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1832/1832062.png"
              className="h-6 sm:h-9"
              alt="logo"
            />
            <button to="/" className="btn btn-ghost normal-case text-xl">
              Poster Framer
            </button>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {user ? (
            <>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/service/myservice" className="justify-between">
                  My services
                </Link>
              </li>
              <li>
                <Link to="/service/addservice" className="justify-between">
                  Add service
                </Link>
              </li>
              <li>
                <Link to="/reviews/addreview" className="justify-between">
                  Add review
                </Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {/* <>
          {(user && user?.email) || (user && user?.uid) ? (
            <>
              <div
                className="avatar tooltip tooltip-left"
                data-tip={user?.displayName}
              >
                <div className="w-8 mr-2 lg:w-10 rounded-full">
                  {user?.photoURL ? (
                    <img src={user?.photoURL} alt="avatar" />
                  ) : (
                    <FaUser className="w-6 lg:w-8 mt-2 ml-1 h-6"></FaUser>
                  )}
                </div>
              </div>
              <Link onClick={handleLogOut} className="btn btn-sm">
                Log Out
              </Link>
            </>
          ) : (
            <Link to="/login" className="btn btn-sm ml-3">
              Login
            </Link>
          )}
        </> */}
        {user ? (
          <Link className="btn btn-sm">Log Out</Link>
        ) : (
          <Link to="/login" className="btn btn-sm ml-3">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
