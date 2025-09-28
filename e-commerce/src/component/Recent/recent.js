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
  
  // Individual liked states for each product
  const [liked, setLiked] = useState({
    chair4: false,
    chair3: false,
    chair5: false,
    chair6: false,
    chair7: false,
    chair8: false,
    chair9: false,
    chair10: false
  });

  const scroll = (direction) => {
    if (carouselRef.current) {
      // Responsive scroll amount based on screen width
      const screenWidth = window.innerWidth;
      let scrollAmount = 250;
      
      if (screenWidth <= 479) scrollAmount = 150;
      else if (screenWidth <= 767) scrollAmount = 180;
      else if (screenWidth <= 991) scrollAmount = 220;
      
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const toggleLike = (chairId) => {
    setLiked(prev => ({
      ...prev,
      [chairId]: !prev[chairId]
    }));
  };

  // Product data array for cleaner code
  const products = [
    {
      id: 'chair4',
      image: chair4,
      title: 'Library Stool Chair',
      price: '$120',
      badge: 'NEW',
      badgeColor: 'crimson'
    },
    {
      id: 'chair3',
      image: chair3,
      title: 'Comfort Lounge Chair',
      price: '$90',
      originalPrice: '$120',
      badge: 'SALE',
      badgeColor: '#ff6b35'
    },
    {
      id: 'chair5',
      image: chair5,
      title: 'Classic Wooden Chair',
      price: '$150'
    },
    {
      id: 'chair6',
      image: chair6,
      title: 'Minimalist Chair',
      price: '$110'
    },
    {
      id: 'chair7',
      image: chair7,
      title: 'Stylish Armchair',
      price: '$130'
    },
    {
      id: 'chair8',
      image: chair8,
      title: 'Modern Desk Chair',
      price: '$95'
    },
    {
      id: 'chair9',
      image: chair9,
      title: 'Comfort Recliner',
      price: '$170'
    },
    {
      id: 'chair10',
      image: chair10,
      title: 'Velvet Luxury Chair',
      price: '$200'
    }
  ];

  return (
    <section className="recentContainer">
      <h1 className="recentTitle">Recently Added</h1>
      
      <div className="recentCarouselWrapper">
        <div className="recentCarouselButtons">
          <button onClick={() => scroll('left')}>‹</button>
          <button onClick={() => scroll('right')}>›</button>
        </div>

        <div className='recentCarousel' ref={carouselRef}>
          {products.map((product) => (
            <div key={product.id} className="recentcardWrapper">
              <div className="recentImageWrapper">
                {product.badge && (
                  <span 
                    className="recentBadgeNew" 
                    style={{ background: product.badgeColor }}
                  >
                    {product.badge}
                  </span>
                )}
                <FaHeart 
                  className="recentHeartIcon"
                  style={{ color: liked[product.id] ? "crimson" : "white" }}
                  onClick={() => toggleLike(product.id)}
                />
                <img className='recentCard' src={product.image} alt={product.title} />
              </div>
              <p className="recentDesc">{product.title}</p>
              <div className="recentFooter">
                <span className="recentPrice">
                  {product.originalPrice && (
                    <span style={{ 
                      textDecoration: 'line-through', 
                      color: '#999', 
                      marginRight: '8px' 
                    }}>
                      {product.originalPrice}
                    </span>
                  )}
                  {product.price}
                </span>
                <FaShoppingCart className="recentCartIcon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recent;