import React, { useState } from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  console.log("header");
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);
  const login = async (params) => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary shadow-lg">
      <div className="hidden h-full w-full items-center justify-between md:flex">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover" alt="Logo" />
          <p className="text-xl font-bold text-headingColor">Burger Town</p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 800 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-8"
          >
            <li className="cursor-pointer text-base text-headingColor transition-all duration-500 ease-in-out hover:text-headingColor">
              Home
            </li>
            <li className="cursor-pointer text-base text-headingColor  transition-all duration-500 ease-in-out hover:text-headingColor">
              Menu
            </li>
            <li className="cursor-pointer text-base text-headingColor transition-all duration-500 ease-in-out hover:text-headingColor">
              Acerca de nosotros
            </li>
            <li className="cursor-pointer text-base text-headingColor transition-all duration-500 ease-in-out hover:text-headingColor">
              Servicios
            </li>
          </motion.ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="ml-8 cursor-pointer text-2xl text-textColor" />
            <div className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-cartNumBg">
              <p className="text-xs font-semibold text-white">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 1.6 }}
              src={user ? user.photoURL : Avatar}
              alt="user"
              onClick={login}
              className="h-10 min-h-[40px] w-10 min-w-[40px] cursor-pointer rounded-full drop-shadow-xl"
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="absolute  top-12 right-0  flex w-40 flex-col rounded-lg bg-primary py-2 shadow-xl"
              >
                {user && user.email === "huacreenciso97@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="flex cursor-pointer items-center gap-3 px-4 py-2 text-base text-textColor transition-all duration-100 ease-in-out hover:bg-slate-200">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p className="flex cursor-pointer items-center gap-3 px-4 py-2 text-base text-textColor transition-all duration-100 ease-in-out hover:bg-slate-200">
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="flex h-full w-full items-center justify-between md:hidden">
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="cursor-pointer text-2xl text-textColor" />
          <div className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-cartNumBg">
            <p className="text-xs font-semibold text-white">2</p>
          </div>
        </div>
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover" alt="Logo" />
          <p className="text-xl font-bold text-headingColor">City</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 1.6 }}
            src={user ? user.photoURL : Avatar}
            alt="user"
            onClick={login}
            className="h-10 min-h-[40px] w-10 min-w-[40px] cursor-pointer rounded-full drop-shadow-xl"
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="absolute right-0 top-12 flex w-60 flex-col rounded-lg bg-primary py-2 shadow-xl "
            >
              {user && user.email === "huacreenciso97@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="flex cursor-pointer items-center gap-3 px-4 py-2 text-base text-textColor transition-all duration-100 ease-in-out hover:bg-slate-200">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              <ul
                initial={{ opacity: 0, x: 800 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col"
              >
                <li
                  className="cursor-pointer px-4 
                py-2 text-base text-headingColor
                 transition-all duration-100 ease-in-out hover:bg-slate-200
                 hover:text-headingColor"
                >
                  Home
                </li>

                <li
                  className=" cursor-pointer 
                px-4  py-2 text-base
                 text-headingColor transition-all duration-100 ease-in-out
                 hover:bg-slate-200 hover:text-headingColor"
                >
                  Menu
                </li>
                <li
                  className="cursor-pointer px-4 
                py-2 text-base text-headingColor
                 transition-all duration-500 ease-in-out hover:bg-slate-200
                 hover:text-headingColor"
                >
                  Acerca de nosotros
                </li>

                <li
                  className="cursor-pointer px-4 
                py-2 text-base text-headingColor 
                transition-all duration-100 ease-in-out hover:bg-slate-200
                hover:text-headingColor"
                >
                  Servicios
                </li>
              </ul>
              <p
                className="m-2 flex cursor-pointer items-center justify-center gap-3
              rounded-md bg-gray-200 p-2 text-base
               text-textColor shadow-md transition-all duration-100
                ease-in-out hover:bg-gray-300"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
