import React, { useRef, useState } from 'react';
import './product.css';
import { FaHeart } from "react-icons/fa";
import chair3 from '../../asset/chair3.jpg';
import chair4 from '../../asset/chair4.jpg';
import chair5 from '../../asset/chair5.jpg';
import chair6 from '../../asset/chair6.jpg';
import chair7 from '../../asset/chair7.jpg';
import chair8 from '../../asset/chair8.jpg';
import chair9 from '../../asset/chair9.jpg';
import chair10 from '../../asset/chair10.avif';

const Product = () => {
  const carouselRef = useRef(null);
  const [liked, setLiked] = useState(false); // ❤️ state for first slide

  // Scroll handler
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 250;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='productContainer'>
      <h1 className='productTitle'>Featured Product</h1>

      <div className="carouselWrapper">
        {/* Buttons */}
        <div className="carouselButtons">
          <button onClick={() => scroll('left')}>‹</button>
          <button onClick={() => scroll('right')}>›</button>
        </div>

        {/* Carousel */}
        <div className='productCarousel' ref={carouselRef}>

          {/* Slide 1: NEW + Heart (click toggle) */}
          <div className="cardWrapper">
            <div className="imageWrapper">
              <span className="badgeNew">NEW</span>
              <FaHeart 
                className="heartIcon"
                style={{ color: liked ? "crimson" : "white" }}
                onClick={() => setLiked(!liked)}
              />
              <img className='productCard' src={chair4} alt='chair4' />
            </div>
          </div>

          {/* Slide 2: SALE (only text) */}
          <div className="cardWrapper">
            <div className="imageWrapper">
              <span className="badgeNew">SALE</span>
              <img className='productCard' src={chair3} alt='chair3' />
            </div>
          </div>

          {/* Other Slides */}
          <div className="cardWrapper">
            <img className='productCard' src={chair5} alt='chair5' />
          </div>
          <div className="cardWrapper">
            <img className='productCard' src={chair6} alt='chair6' />
          </div>
          <div className="cardWrapper">
            <img className='productCard' src={chair7} alt='chair7' />
          </div>
          <div className="cardWrapper">
            <img className='productCard' src={chair8} alt='chair8' />
          </div>
          <div className="cardWrapper">
            <img className='productCard' src={chair9} alt='chair9' />
          </div>
          <div className="cardWrapper">
            <img className='productCard' src={chair10} alt='chair10' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product;
