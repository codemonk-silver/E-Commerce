import React from 'react';
import './category.css';
import deskchair from '../../asset/deskchair.jpg';
import woodenchair from '../../asset/woodenchair.avif';
import sofachair from '../../asset/sofachair.jpg';
import category4 from '../../asset/category4.avif';
import parkbench from '../../asset/parkbench.jpg';
import category from '../../asset/category.webp';

const Category = () => {
  return (
    <section className='categoryContainer'>
        <h1 className='categoryTitle'>Top Categories</h1>
        <div className='categoryCarousel'>
            <img src={deskchair} alt='' />
            <img src={woodenchair} alt='' />
            <img src={sofachair} alt='' />
            <img src={category4} alt='' />
            <img src={parkbench} alt='' />
            <img src={category} alt='' />
        </div>
    </section>
  )
}

export default Category