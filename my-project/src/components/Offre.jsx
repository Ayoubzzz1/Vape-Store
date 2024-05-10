import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRightLong} from 'react-icons/fa6'


const Offre = () => {
  return (



   <section className=' bg-banner bg-center bg-cover w-full bg-no-repeat'>


<div className='px-8 py-16 md:py-24 lg:py-44'>
  <h2 className='h2 mt-2 ml-12 text-white'>Bonnd D'achat 50%</h2>
  <h3 className='ml-8 medium-32 capitalize font-normal line-clamp-2 gap-x-2 text-white '>Take <span  className='text-[#fa8500]'>your opprounity</span>  Now!</h3>
  <Link to={'/'} className='text-white bg-tertiary pl-6 rounded-full flexBetween gap-x-2 medium-16 w-44 mt-10 ml-8 group:'>
    Go To Shop
    <FaArrowRightLong className='text-xl bg-[#fa8500] text-primary rounded-full h-8 w-8 p-2 group-hover:-rotate-45 transition-all duration-500 border-2 border-white' />
  </Link>
</div>

   </section>
 
  )
}

export default Offre