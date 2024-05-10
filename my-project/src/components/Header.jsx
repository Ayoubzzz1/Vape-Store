import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { MdMenu, MdClose } from 'react-icons/md';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { LuUserCircle2 } from "react-icons/lu";
import { useAuthState } from 'react-firebase-hooks/auth'; // Import useAuthState hook
import { auth } from '../firebase'; // Import your firebase instance
import NavBar from './NavBar'; // Import NavBar component

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const handleMenuToggle = () => setMenuOpened(!menuOpened);
  const [userEmail, setUserEmail] = useState(null);

  // Fetch the user's authentication state
  const [user] = useAuthState(auth);

  useEffect(() => {
    const handScroll = () => {
      if(window.scrollY > 0 && menuOpened) {
        setMenuOpened(false);
      }
    }
    window.addEventListener("scroll", handScroll);

    return () => {
      window.removeEventListener("scroll", handScroll);
    };
  }, [menuOpened]);

  useEffect(() => {
    // Set the user's email if the user is logged in
    if (user) {
      setUserEmail(user.email);
    } else {
      setUserEmail(null);
    }
  }, [user]);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <header className="mx-auto max-w-7xl px-6 lg:px-20 w-full z-50">
      <div className="flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-x-2">
          <img src={logo} alt="" height={50} width={100} />
          <span className="text-lg md:text-xl lg:text-2xl font-bold">Jungle Vape</span>
        </Link>

        <div className="flex items-center gap-x-4">
          {/* Navigation bar items */}
          <NavBar containerStyles="hidden xl:flex gap-x-12 xl:gap-x-10 pl-6 rounded-full px-12 py-1" />
          <div>
            <NavBar containerStyles={`flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 md:w-72 lg:w-80 xl:w-96 ring-1 ring-slate-900/5 transition-all duration-300 z-50 ${menuOpened ? '' : '-right-full'}`} />
          </div>

          {/* Display user's email if logged in */}
          {userEmail && (
            <p className=''>{userEmail}</p>
          )}

          {/* Conditional rendering for login/logout button */}
          {user ? (
            <button onClick={handleLogout} className="bg-secondary flex items-center gap-x-4 ml-4 rounded-xl pr-4 pl-4 text-white active:bg-[#28d266]">
              <span>Logout</span>
            </button>
          ) : (
            <NavLink to={'/login'} className="bg-secondary flex items-center gap-x-4 ml-4 rounded-xl pr-4 pl-4 text-white active:bg-[#28d266]">
              <LuUserCircle2 className='w-6 h-6 md:w-8 md:h-8 mt-1 ' />
              <span>SignUp</span>
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
