import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
<NavLink to={'/'} className={     ({isActive}) => isActive?  " text-secondary  flex-1 underline-offset-4 hover:underline decoration-secondary after:block after:w-full after:h-1px after:bg-secondary after:absolute after:-bottom-1 after:right-0 " :""}  >Home</NavLink>
<NavLink to={'/Liquide'} className={   ({isActive}) => isActive?  "text-secondary flex-1 underline-offset-4 hover:underline decoration-secondary after:block after:w-full after:h-1px after:bg-secondary after:absolute after:-bottom-1 after:right-0 " :""} >Liquide</NavLink>
<NavLink to={'/Vape'} className={   ({isActive}) => isActive?  "text-secondary flex-1 underline-offset-4 hover:underline decoration-secondary after:block after:w-full after:h-1px after:bg-secondary after:absolute after:-bottom-1 after:right-0 " :""} >Vape</NavLink>
<NavLink to={'/accessoire'} className={   ({isActive}) => isActive?  "text-secondary flex-1 underline-offset-4 hover:underline decoration-secondary after:block after:w-full after:h-1px after:bg-secondary after:absolute after:-bottom-1 after:right-0 " :""} >Accessoire</NavLink>
    </nav>
  )
}

export default NavBar