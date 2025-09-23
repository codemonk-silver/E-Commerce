import React, { useState } from 'react';
import './category.css';

import deskchair from '../../asset/deskchair.jpg';
import woodenchair from '../../asset/woodenchair.avif';
import sofachair from '../../asset/sofachair.jpg';
import category4 from '../../asset/category4.avif';
import chair10 from '../../asset/chair10.avif';
import category from '../../asset/category.webp';

const images = [deskchair, woodenchair, sofachair, category4, chair10, category];

const Category = () => {
  const [current, setCurrent] = useState(2); // start at 3rd image

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="categoryContainer">
  <h1 className="categoryTitle">Top Categories</h1>

  <div className="carouselWrapper">
    {/* Buttons OUTSIDE the image container */}
    <div className="buttonGroup">
      <button className="carouselBtn" onClick={prevSlide}>‹</button>
      <button className="carouselBtn" onClick={nextSlide}>›</button>
    </div>

    {/* Carousel images */}
    <div className="categoryCarousel">
      {images.map((img, index) => {
        const diff = index - current;
        let position = diff;

        if (diff < -Math.floor(images.length / 2)) {
          position = diff + images.length;
        } else if (diff > Math.floor(images.length / 2)) {
          position = diff - images.length;
        }

        const isMain = Math.abs(position) <= 1;

        return (
          <div
            key={index}
            className={`carouselItem ${position === 0 ? 'active' : ''}`}
            style={{
              transform: `translateX(${position * 100}%)`,
              opacity: isMain ? 1 : 0.3,
              zIndex: isMain ? 2 : 1,
            }}
          >
            <img src={img} alt={`slide-${index}`} />
              {/* Caption overlay */}
            <div className="carouselCaption">
                <h3 className="captionTitle">Wing Chair</h3>
                <p className="captionSubtitle">3,455 products</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

  );
};

export default Category;
