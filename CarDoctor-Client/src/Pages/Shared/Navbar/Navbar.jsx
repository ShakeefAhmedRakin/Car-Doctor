import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { PiShoppingBagLight } from "react-icons/pi";

const Navbar = () => {
  const links = (
    <>
      <li className="navigation-link">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="navigation-link">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="navigation-link">
        <NavLink to="/services">Services</NavLink>
      </li>
      <li className="navigation-link">
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li className="navigation-link">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar my-5 max-w-7xl mx-auto px-2 md:px-8">
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
              className="dropdown-content mt-3 z-[50] py-5 pl-8 w-screen -ml-2 bg-white space-y-4 font-semibold"
            >
              {links}
            </ul>
          </div>
          <img
            src="/src/assets/logo.svg"
            className="hidden md:flex aspect-video w-32"
          />
        </div>
        <div className="navbar-center hidden lg:flex mr-8">
          <ul className="flex gap-x-12 font-semibold">{links}</ul>
        </div>
        <div className="navbar-end gap-x-1">
          <button className="text-xl md:text-2xl btn btn-sm md:btn-md rounded-full bg-transparent border-none">
            <PiShoppingBagLight></PiShoppingBagLight>
          </button>
          <button className="text-xl md:text-2xl btn btn-sm md:btn-md rounded-full bg-transparent border-none">
            <CiSearch></CiSearch>
          </button>
          <button className="btn btn-primary bg-transparent text-primary text-base font-semibold px-5 border-primary normal-case hover:bg-primary hover:border-primary hover:text-white ml-2 md:ml-4">
            Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
