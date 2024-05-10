import React from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingCart2Line } from "react-icons/ri";

const Item = ({id, image, name , old_price , new_price}) => {
  return (
   <Link to={`/product${id}`} className=' bg-white p-2 rounded-xl relative w-72'>

<div className='flexCenter mb-2  '>
    <img src={image} alt="" height={211} width={211} className='rounded-lg drop-shadow-xl '/>
</div>
<div className='flex flex-col gap-y-3 pt-20  rounded-xl'>
    <h4 className='line-clamp-2 medium-16'>{name}</h4>
    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
    <div className='flexBetween'>
        <div className='flex gap-x-6 medium-16'>
            <span>${new_price}.00</span>
            <span className='line-through text-secondary'>${old_price}</span>
        </div>
        <RiShoppingCart2Line className='p-2 h-10 w-10  hover:bg-secondary rounded-full hover:text-white'/>
    </div>

</div>
   </Link>
  )
}

export default Item