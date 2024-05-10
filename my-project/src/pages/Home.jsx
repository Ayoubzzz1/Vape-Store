import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Populair from "../components/Populair";
import Offre from "../components/Offre";
import NewArrivals from '../components/NewArrivals';
import Btw from "../components/Btw";


const Home = () => {
  return (
   <>
   <div className=''>

  
   <Hero/>
   <About/>
   <Populair/>
   <Btw/>
   <Offre/>
   <NewArrivals/>
  
   </div>
   </>

  )
}

export default Home