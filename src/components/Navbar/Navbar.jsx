import { Link, NavLink } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import logo from "../../assets/logo/logo.png";
import logoDark from "../../assets/logo/logo-white.png";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const Navbar = () => {
  // Dark Mode Theme Toggles
  const { user, theme, setTheme, logOut } = useAuth();
  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
      setTheme("light");
    }
  };
  const { data: cart } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://sky-mart-server-side.vercel.app/api/v1/carts?user=${user?.email}`
      );
      return res.data;
    },
  });
  // Logout Button
  const handleLogoutBtn = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfully");
      })
      .catch((error) => {
        toast.error("Logout Failed");
        console.log(error.message);
      });
  };
  const navMenu = (
    <>
      <li className="hover:text-job-primary dark:hover:text-job-primary duration-300">
        <NavLink
          className={({ isActive }) => (isActive ? "text-job-primary" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="hover:text-job-primary dark:hover:text-job-primary duration-300">
        <NavLink
          className={({ isActive }) => (isActive ? "text-job-primary" : "")}
          to="/products"
        >
          Products
        </NavLink>
      </li>
      {user?.email ? (
        <>
          <li className="hover:text-job-primary dark:hover:text-job-primary duration-300">
            <NavLink
              className={({ isActive }) => (isActive ? "text-job-primary" : "")}
              to="/cart"
            >
              My Cart
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div className="dark:bg-gray-900 dark:text-white drop-shadow-md bg-white py-1">
      <nav className="container mx-auto px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3 lg:gap-6 xl:gap-16">
          {/* Mobile Menu */}

          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost px-1">
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
              className="space-y-3 p-6 dropdown-content mt-3 w-52 z-[1] shadow bg-base-100 dark:bg-gray-900 rounded-box "
            >
              {navMenu}
            </ul>
          </div>

          <div className="xl:max-w-[300px] lg:max-w-[180px] md:max-w-[250px]">
            <Link to="/">
              <img
                className="w-full"
                src={theme === "light" ? logo : logoDark}
                alt="Sky Mart Logo"
              />
            </Link>
          </div>
          <div>
            <ul className="lg:flex items-center gap-6 xl:text-lg font-medium hidden ">
              {navMenu}
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center xl:gap-3 gap-2">
          <Link to="/cart"><button className="hidden xl:text-xl  font-medium  duration-300 md:flex justify-center items-center gap-1">
            <FaCartShopping />
            <div className="badge badge-secondary">
              {cart?.length > 0 ? cart?.length : 0}
            </div>
          </button></Link>
          <label className="swap swap-rotate">
            <input
              onChange={handleThemeToggle}
              checked={theme === "light" ? false : true}
              type="checkbox"
            />
            <svg
              className="swap-on fill-current xl:w-10 xl:h-10 w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current xl:w-10 xl:h-10 w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {user?.email ? (
            <div className="flex justify-center items-center xl:gap-3 gap-2">
              <div className="dropdown dropdown-end ">
                <div
                  tabIndex={0}
                  className="cursor-pointer flex justify-center items-center gap-3"
                >
                  <label className="md:w-14 w-12 avatar cursor-pointer align-bottom">
                    <div className="rounded-full ring-2 ring-gray-200">
                      {user?.photoURL ? (
                        <img src={user?.photoURL} />
                      ) : (
                        <img src="https://i.ibb.co/MPpqQSM/user.png" />
                      )}
                    </div>
                  </label>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 z-50 shadow  dark:border-2 menu menu-sm dropdown-content bg-base-100 dark:bg-gray-900 rounded-box"
                >
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div className="font-medium ">
                      {user?.displayName ? user?.displayName : "Your Name"}
                    </div>
                    <div className="truncate">
                      {user?.email ? user?.email : "name@gmail.com"}
                    </div>
                  </div>

                  <button
                    tabIndex="-1"
                    role="menuitem"
                    className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all dark:text-white hover:bg-brand-secondary hover:text-job-primary dark:hover:text-job-primary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-brand-secondary active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                      ></path>
                    </svg>
                    <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                      <Link to="/cart">My Cart</Link>
                    </p>
                  </button>
                  <hr
                    className="my-2 border-blue-gray-50"
                    tabIndex="-1"
                    role="menuitem"
                  />
                  <button
                    onClick={handleLogoutBtn}
                    tabIndex="-1"
                    role="menuitem"
                    className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all dark:text-white hover:bg-brand-secondary hover:text-job-primary dark:hover:text-job-primary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-brand-secondary active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                      ></path>
                    </svg>
                    <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                      Sign Out
                    </p>
                  </button>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="text-lg font-medium text-white bg-job-primary hover:bg-green-600 duration-300 py-3 px-7 rounded-full flex justify-center items-center gap-1">
                <PiSignInBold /> Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
