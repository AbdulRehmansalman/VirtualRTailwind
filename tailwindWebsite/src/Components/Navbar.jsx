import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import Logo from '../assets/logo.png';
import { navItems } from '../Constants/index.jsx';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [DrawerOpen, setDrawerOpen] = useState(false);
  const ToggleNavbar = () => {
    setDrawerOpen(!DrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center flex-shrink-0">
            <img className="w-10 h-12 mr-2" src={Logo} alt="Logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          {/* Ul Tag to Display Lists */}
          <ul className="hidden lg:flex ml-14 space-x-12 mr-2">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`border text-white duration-300 relative group cursor-pointer overflow-hidden h-10 w-20 md:h-14 lg:w-40 rounded-2xl p-2 font-extrabold ${
                  activeIndex === index
                    ? 'bg-black text-white'
                    : 'bg-neutral-800 hover:bg-sky-700'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-yellow-500"></div>
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-orange-500"></div>
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-pink-500"></div>
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600"></div>
                <a href={item.href} className="z-10 absolute bottom-2 left-2">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-4">
            <a
              href="#"
              className="text-center bg-slate-900 text-white border border-neutral-600 border-b-4 font-medium overflow-hidden relative px-5 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
            >
              <span className="bg-white-200 shadow-orange-300 absolute -top-[150%] left-0 inline-flex w-50 h-[3px] lg:h-[6px] sm:h-[2px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Sign In
            </a>

            <a
              href="#"
              className="text-center bg-gradient-to-r from bg-orange-500 to bg-orange-800 hover:shadow-orange-300 py-2 px-3 border rounded-md hover:border-[#f79d5d]"
            >
              Create an Account
            </a>
          </div>
          {/* Add the Button for Mobile Responsive */}
          <div className="lg:hidden md:flex flex-col justify-center ">
            <button onClick={ToggleNavbar} className="mr-2">
              {DrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* To Set the Toggle Functionality */}
        {DrawerOpen && (
          <motion.div
            className="fixed top-20 right-0 h-screen w-[15rem] z-20 bg-red-900 flex flex-col justify-center items-center lg:hidden space-y-10 ml-0 mt-0 rounded-2xl"
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ul>
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  className={`mb-10 border text-white duration-300 relative group cursor-pointer overflow-hidden h-14 w-[190px] rounded-2xl p-2 font-extrabold ${
                    activeIndex === index
                      ? 'bg-black text-white'
                      : 'bg-neutral-800 hover:bg-sky-700'
                  }`}
                  onClick={() => {
                    setActiveIndex(index);
                    setDrawerOpen(false); // Close the drawer after clicking an item
                  }}
                >
                  <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-yellow-500"></div>
                  <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-orange-500"></div>
                  <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-pink-500"></div>
                  <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600"></div>
                  <a href={item.href} className="z-10 absolute bottom-2 left-2">
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="flex flex-col items-center space-x-6 md:text-2xl xs:text-2xl"
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <a
                href="#"
                className="mb-2 w-[10rem] text-center bg-blue-500 text-white border border-neutral-600 border-b-4 font-medium overflow-hidden relative px-5 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-white-200 shadow-orange-300 absolute -top-[150%] left-0 inline-flex w-50 h-[3px] lg:h-[6px] sm:h-[2px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Sign In
              </a>
              <a
                href="#"
                className="w-[180px] bg-gradient-to-r from bg-orange-900 to bg-orange-800 py-4 px-5 border rounded-xl hover:shadow-orange-300 py-2 px-3 border rounded-md hover:border-[#f79d5d]"
              >
                Create an Account
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
