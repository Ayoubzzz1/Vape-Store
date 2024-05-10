import React from 'react'
import { Link } from 'react-router-dom'
import RelatePeod from './RelatePeod'


const Hero = () => {
  return (
   <section className=' text-white'>


    <div className='mx-auto max-w[1440px] px-6 lg:px-20 bg-hero bg-cover bg-center bg-no-repeat h-[744px] w-full'>
<div className='relative top-24 xs:top-32'>
    <h4 className='uppercrase text-[18px] font-[600] tracking-wider'>Welcome</h4>
    <h2 className=' text-[30px] leading-tight md:text-[48px] md:leading-[1.3] mb-4 font-bold capitalize max-w-[40rem]'>Elevate Your Look With <span className='text-[#fa8500]' >every click.</span>  shopd today!</h2>
    <p className='my-5 max-w-[33rem]'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
    <div className='inline-flex items-center justify-center gap-4 p-1 bg-[#fa8500] rounded-xl text-black'>
<div className='text-center regular-14 leading-tight pl-5 0]'>
    <h5 className='uppercase font-bold'>30% off</h5>
    <p className='regular-14 text-white'>On All Items</p>
</div>
<Link to={'/'} className='bg-[#1f1f1f] rounded-xl flexCenter p-5 font-bold text-white' >Shop Now</Link>

    </div>

    {/*new coll*/}

<div className='mt-16'>
    <RelatePeod/>
</div>

</div>

    </div>
   </section>
  )
}

export default Hero