import React, { useState } from 'react';
import { VscSettings } from "react-icons/vsc";
import allproduct from '../assets/allproduct';
import Item from '../components/Item';
import { Link } from "react-router-dom";

const Category = ({ banner, category }) => {
  const [displayCount, setDisplayCount] = useState(8); // État pour suivre le nombre d'éléments à afficher

  const loadMore = () => {
    setDisplayCount(displayCount + 8); // Charger 8 éléments de plus
  };

  return (
    <section className='max-padd-container bg-primary'>
      <div>
        <div className='pt-6'>
          <img src={banner} alt="" className='block mb-7 mx-auto' />
        </div>
        <div className='flexBetween my-10 mx-2 '>
          <h5><span className='font-bold'>Showing 1-{displayCount}</span> out of 36 products</h5>
          <Link to={'/'}><VscSettings className='text-3xl bg-tertiary rounded-md h-10 w-10 p-2 text-white' /></Link>
        </div>
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6 mt-20'>
          {allproduct.map((item, index) => {
            if (category === item.category && index < displayCount) {
              return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
            }
            return null; // Retourne null pour les éléments qui ne doivent pas être affichés
          })}
        </div>
        <div className='py-16 text-center'>
          <button className='bg-black rounded-xl text-white p-4' onClick={loadMore}>Load More</button>
        </div>
      </div>
    </section>
  );
};

export default Category;
