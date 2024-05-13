import  { useState, useEffect } from 'react';
 import logo from '../assets/Logo (2).svg';
import { IoMdMenu } from "react-icons/io";
import { SlBasket } from "react-icons/sl";

const Navbar = () => {
  const navItems = [
    { link: "Home", path: "/home" },
    { link: "About", path: "/about" },
    { link: "Courses", path: "/courses" },
    { link: "Blog", path: "/blog" },
    { link: "Contact", path: "/contact" },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (showMenu) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [showMenu]);

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-primary shadow-md">
      <div className="flex items-center"> 
        <a href="/" className="text-xl font-bold text-white flex items-center pr-5">
          <img src={logo} alt="" className="w-auto h-20" />
        </a>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <IoMdMenu className="w-8 h-8" />
        </button>
        
      </div>
      <div className="hidden md:flex gap-10"> {/* Navigation links */}
        <ul className="flex space-x-4 list-none text-white">
          {navItems.map(({ link, path }) => (
            <li key={link}>
              <a href={path} className="hover:text-opacity-75">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center space-x-2 mr-12"> {/* Buttons */}
        <button className="hidden md:block px-3 py-2 rounded-md text-white bg-secondary hover:bg-purple-400">Get Started</button>
        <button className="hidden md:block px-3 py-2 rounded-md text-white bg-secondary hover:bg-purple-400">Login</button>
        <SlBasket className="w-6 h-6 text-white" /> {/* Cart icon */}
      </div>
      <div className={`md:hidden fixed top-20 right-0 w-full h-full bg-primary text-white transition duration-300 ease-in-out z-20 ${showMenu ? 'visible' : 'invisible'}`}>
        <ul className="flex flex-col items-start p-4 space-y-4">
          {navItems.map(({ link, path }) => (
            <li key={link}>
              <a href={path} className="hover:text-opacity-75">{link}</a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-start p-4 space-y-4 mr-12">
          <button className="px-3 py-2 rounded-md text-white bg-secondary hover:bg-purple-400">Get Started</button>
          <button className="px-3 py-2 rounded-md text-white bg-secondary hover:bg-purple-400">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

