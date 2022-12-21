import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut, setUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser(null);
        toast.success("You have logged out succesfully");
        navigate("/");
      })
      .catch((err) => console.error(err.message));
  };
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
                  <Link to="/service/addservice" className="justify-between">
                    Add service
                  </Link>
                </li>
                <li>
                  <Link to="/myreview" className="justify-between">
                    My reviews
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
            <button
              to="/"
              className="btn btn-ghost normal-case text-base lg:text-xl"
            >
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
                <Link to="/service/addservice" className="justify-between">
                  Add service
                </Link>
              </li>
              <li>
                <Link to="/myreview" className="justify-between">
                  My reviews
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
        {user && user?.uid && user?.email ? (
          <>
            <div className="hidden md:block">
              <h1 className="text-sm  mr-2">
                Hello, <span className="text-red-700">{user?.displayName}</span>
              </h1>
            </div>
            <button onClick={handleLogOut} className="btn btn-xs md:btn-sm">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-xs md:btn-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
