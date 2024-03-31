import {  NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <navbar className="navbar bg-base-100 justify-between px-10 shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-700 text-white" : ""
                }
              >
                Home
              </NavLink>
              <NavLink to={"/products"} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-700 text-white" : ""
                }>Products</NavLink>
              <NavLink to={"/dashboard"} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-700 text-white" : ""
                }>DashBoard</NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">AmaJhon</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-xl gap-10">
          <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-700 text-white" : ""
                }
              >
                Home
              </NavLink>
            <NavLink to={"/products"}  className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-700 text-white" : ""
                }>Products</NavLink>
            <NavLink to={"/dashboard"}  className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-700 text-white" : ""
                }>DashBoard</NavLink>
          </ul>
        </div>
      </navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
