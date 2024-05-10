import React from 'react'
import {TbTruckDelivery} from "react-icons/tb";
import about from "../assets/about.png";
import { BiSupport } from "react-icons/bi";
import { FaBoxOpen } from "react-icons/fa";

const About = () => {
  return (
    <section className='mx-auto max-w-screen-lx px-6 lg:px-20 py-12  '>

<div className='flex flex-col gap-16 xl:gap-8 xl:flex-row '>
  <div className='flex-1 mt-10'>
    <h3 className='text-[29px] leading-tight md:text-[36px] md:leading[1.3] mb-4 font-semibold capitalize'>Take The Chance With Us!</h3>
    <p className='py-5'>to make a type specimen book. It has survived not only five centuries, but also</p>
    <div className='flex flex-col items-start gap-y-4'>
      <div className='flexCenter gap-x-4'>
        <div className='h-16 w-16 bg-secondary flexCenter rounded-xl'>
<TbTruckDelivery className='text-white text-3xl'/>
        </div>
        <div className=''>
          <h4 className='text-[20px] leading-tight md:text-[20px] md:leading[1.3]  font-semibold'>Livraison a domicile </h4>
          <p>to make a type specimen book. It has survived not only five centuries, but also</p>
        </div>
      </div>
      <div className='flexCenter gap-x-4'>
        <div className='h-16 w-16 bg-secondary flexCenter rounded-lg'>
<BiSupport className='text-white text-3xl'/>
        </div>
        <div className=''>
          <h4 className='text-[20px] leading-tight md:text-[20px] md:leading[1.3]  font-semibold'>Support 24/7 </h4>
          <p>to make a type specimen book. It has survived not only five centuries, but also</p>
        </div>
      </div>
      <div className='flexCenter gap-x-4'>
        <div className='h-16 w-16 bg-secondary flexCenter rounded-xl'>
<FaBoxOpen  className='text-white text-3xl'/>
        </div>
        <div className=''>
          <h4 className='text-[20px] leading-tight md:text-[20px] md:leading[1.3]  font-semibold'>Safely Delivred</h4>
          <p>to make a type specimen book. It has survived not only five centuries, but also</p>
        </div>
      </div>
    </div>
  </div>

<div className='flex-1 flexCenter'>
  <div>
    <img src={about} alt="" width={400} height={488} />
  </div>
</div>


</div>

    </section>
  )
}

export default About