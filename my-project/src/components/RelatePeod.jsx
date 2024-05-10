import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import LATEST from '../assets/latest'
import { RiShoppingCart2Line } from "react-icons/ri";


{
    
  }

  
  

// Import Swiper styles
import 'swiper/css';
import { Link } from 'react-router-dom';

const RelatePeod = () => {
  return (
    <div >
 <h4 className='border-l-4 pl-2 border- uppercase font-medium'>Product</h4>



 <div className='mx-auto max-w-full'>


    <Swiper
    breakpoints={{
        600:{
            slidesPerView: 2,
            spaceBetween: 10,
    
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 10,
    
        },
        1200:{
            slidesPerView: 4,
            spaceBetween: 10,
    
        },
    }}
    className='h-[190px]  mt-5 '
    >


    {LATEST.map((item, i) => (
      <SwiperSlide key={i} >
      <Link to={''} className='flexCenter bg-white gap-x-2 p-4  rounded-lg text-black'>
      <img src={item.image} height={70} width={70} alt="" className='rounded-lg drop-shadow-xl' />
      <div className='flex flex-col gap-y-1'>
        <h4 className='line-clamp-1 font-semibold'>{item.name}</h4>
        <p className='line-clamp-1'>to make a type specimen book. It has survived not only five centurie
            s, but also</p>
        <div className='flexBetween'>
            <div className='flexBetween gap-x-2 font-medium'>
                <span>${item.new_price}.00</span>
                <span className='line-through text-secondary'>${item.old_price}.00</span>
            </div>
            <RiShoppingCart2Line className='hover:text-secondary'/>
        </div>
      </div>
     
      </Link>
  </SwiperSlide>
))}




    </Swiper>
 </div>
    </div>
 

  )
}

export default RelatePeod