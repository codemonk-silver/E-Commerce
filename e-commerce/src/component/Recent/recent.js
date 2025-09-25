import React, { useRef, useState } from "react";
import "./recent.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import chair3 from '../../asset/chair3.jpg';
import chair4 from '../../asset/chair4.jpg';
import chair5 from '../../asset/chair5.jpg';
import chair6 from '../../asset/chair6.jpg';
import chair7 from '../../asset/chair7.jpg';
import chair8 from '../../asset/chair8.jpg';
import chair9 from '../../asset/chair9.jpg';
import chair10 from '../../asset/chair10.avif';

const Recent = () => {
    const carouselRef = useRef(null);
      const [liked, setLiked] = useState(false);
    
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
    <section className="recentContainer">
        <h1 className="recentTitle">
            Recently Added
        </h1>
        <div className="carouselWrapper">
                <div className="carouselButtons">
                  <button onClick={() => scroll('left')}>‹</button>
                  <button onClick={() => scroll('right')}>›</button>
                </div>
        
                <div className='recentCarousel' ref={carouselRef}>
        
                  {/* Slide 1: NEW + Heart */}
                  {/* Slide 1: NEW + Heart */}
                <div className="cardWrapper">
                  <div className="imageWrapper">
                    <span className="badgeNew">NEW</span>
                    <FaHeart 
                      className="heartIcon"
                      style={{ color: liked ? "crimson" : "white" }}
                      onClick={() => setLiked(!liked)}
                    />
                    <img className='recentCard' src={chair4} alt='chair4' />
                  </div>
                  <p className="recentDesc">Library Stool Chair</p>
                  <div className="recentFooter">
                    <span className="price">$120</span>
                    <FaShoppingCart className="cartIcon" />
                  </div>
                </div>
        
                {/* Slide 2: SALE (no heart) */}
                <div className="cardWrapper">
                  <div className="imageWrapper">
                    <span className="badgeNew">SALE</span>
                    <img className='recentCard' src={chair3} alt='chair3' />
                  </div>
                  <p className="recentDesc">Comfort Lounge Chair</p>
                  <div className="recentFooter">
                    <span className="price">$90</span>
                    <FaShoppingCart className="cartIcon" />
                  </div>
                </div>
        
                {/* Slide 3: Normal (still wrapped in imageWrapper) */}
                <div className="cardWrapper">
                  <div className="imageWrapper">
                    <img className='recentCard' src={chair5} alt='chair5' />
                  </div>
                  <p className="recentDesc">Classic Wooden Chair</p>
                  <div className="recentFooter">
                    <span className="price">$150</span>
                    <FaShoppingCart className="cartIcon" />
                  </div>
                </div>
        
        
                  {/* Other Slides */}
        
                  <div className="cardWrapper">
                    <div className='imagewrapper'>
                      <img className='recentCard' src={chair6} alt='chair6' />
                    </div>
                    <p className="recentDesc">Minimalist Chair</p>
                    <div className="recentFooter">
                      <span className="price">$110</span>
                      <FaShoppingCart className="cartIcon" />
                    </div>
                  </div>
        
                  <div className="cardWrapper">
                    <div className='imagewrapper'>
                      <img className='recentCard' src={chair7} alt='chair7' />
                    </div>
                    <p className="recentDesc">Stylish Armchair</p>
                    <div className="recentFooter">
                      <span className="price">$130</span>
                      <FaShoppingCart className="cartIcon" />
                    </div>
                  </div>
        
                  <div className="cardWrapper">
                     <div className='imagewrapper'>
                        <img className='recentCard' src={chair8} alt='chair8' />
                    </div>
                    <p className="recentDesc">Modern Desk Chair</p>
                    <div className="recentFooter">
                      <span className="price">$95</span>
                      <FaShoppingCart className="cartIcon" />
                    </div>
                  </div>
        
                  <div className="cardWrapper">
                     <div className='imagewrapper'>
                        <img className='recentCard' src={chair9} alt='chair9' />
                      </div>
                    <p className="recentDesc">Comfort Recliner</p>
                    <div className="recentFooter">
                      <span className="price">$170</span>
                      <FaShoppingCart className="cartIcon" />
                    </div>
                  </div>
        
                  <div className="cardWrapper">
                    <div className='imagewrapper'>
                        <img className='recentCard' src={chair10} alt='chair10' />
                    </div>
                    <p className="recentDesc">Velvet Luxury Chair</p>
                    <div className="recentFooter">
                      <span className="price">$200</span>
                      <FaShoppingCart className="cartIcon" />
                    </div>
                  </div>
        
                </div>
              </div>
              
    </section>
    
    
  );
};

export default Recent;
