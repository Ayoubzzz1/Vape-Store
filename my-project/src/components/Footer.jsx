import React from 'react'
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import SocialIcons from './SocialIcons';
function Footer() {
  return (
   <footer className=' bg-footer py-8'>
    <div className='flexCenter flex-col mb-10'>
    <Link to="/" className="flex items-center gap-x-2">
          <img src={logo} alt="" height={50} width={100} />
          <span className="text-lg md:text-xl lg:text-2xl font-bold text-white">Jungle Vape</span>
        </Link>
          <div className="p-y-6">
          <NavBar containerStyles ="flex gap-x-12 xl:gap-x-10 pl-6 rounded-full px-12 py-1 text-white" />
          </div>
     <SocialIcons/>
     <hr className='bg-white h-[1px] w-2/3 my-5' />
     <div className='text-white mt-8'> Copyright &copy; Jungle Vape | All Right Reserved.</div>
    </div> 

   </footer>
  )
}

export default Footer