import React from 'react'

import POPULAIR from '../assets/pouplair'
import Item from './Item'
function NewArrivals() {
  return (
    <section className='max-padd-container bg-[#F5F5F5] rounded-xl p-12 xl:py-28'>
    <div className='text-center max-w-xl mx-auto'>
      <h3 className='h3'>PNew Arrival</h3>
    </div>




<div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6 mt-20'>
{POPULAIR.map((item)=> (

<Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
))}
</div>

  </section>
  )
}

export default NewArrivals