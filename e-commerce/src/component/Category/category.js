import React, { useState, useEffect } from 'react';
import './category.css';

import deskchair from '../../asset/deskchair.jpg';
import woodenchair from '../../asset/woodenchair.avif';
import sofachair from '../../asset/sofachair.jpg';
import category4 from '../../asset/category4.avif';
import chair10 from '../../asset/chair10.avif';
import category from '../../asset/category.webp';

// Category data with dynamic titles and product counts
const categoryData = [
  { 
    image: deskchair, 
    title: 'Desk Chair', 
    productCount: '2,847 products',
    alt: 'Modern desk chair collection' 
  },
  { 
    image: woodenchair, 
    title: 'Wooden Chair', 
    productCount: '1,923 products',
    alt: 'Classic wooden chair collection' 
  },
  { 
    image: sofachair, 
    title: 'Sofa Chair', 
    productCount: '3,128 products',
    alt: 'Comfortable sofa chair collection' 
  },
  { 
    image: category4, 
    title: 'Wing Chair', 
    productCount: '3,455 products',
    alt: 'Elegant wing chair collection' 
  },
  { 
    image: chair10, 
    title: 'Luxury Chair', 
    productCount: '987 products',
    alt: 'Premium luxury chair collection' 
  },
  { 
    image: category, 
    title: 'Office Chair', 
    productCount: '2,156 products',
    alt: 'Professional office chair collection' 
  }
];

const Category = () => {
  const [current, setCurrent] = useState(2); // start at 3rd image (Wing Chair)
  const [visibleItems, setVisibleItems] = useState(3);
  const [autoPlay, setAutoPlay] = useState(true);

  // Determine how many items to show based on screen size
  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width <= 479) {
        setVisibleItems(1); // Mobile: show 1 item
      } else if (width <= 767) {
        setVisibleItems(2); // Tablet: show 2 items  
      } else {
        setVisibleItems(3); // Desktop: show 3 items
      }
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % categoryData.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % categoryData.length);
    setAutoPlay(false); // Stop auto-play when user interacts
    setTimeout(() => setAutoPlay(true), 10000); // Resume after 10 seconds
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + categoryData.length) % categoryData.length);
    setAutoPlay(false); // Stop auto-play when user interacts
    setTimeout(() => setAutoPlay(true), 10000); // Resume after 10 seconds
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Click on item to make it active
  const handleItemClick = (index) => {
    setCurrent(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <section className="categoryContainer">
      <h1 className="categoryTitle">Top Categories</h1>

      <div className="carouselWrapper">
        {/* Navigation Buttons */}
        <div className="buttonGroup">
          <button 
            className="carouselBtn" 
            onClick={prevSlide}
            aria-label="Previous category"
          >
            ‹
          </button>
          <button 
            className="carouselBtn" 
            onClick={nextSlide}
            aria-label="Next category"
          >
            ›
          </button>
        </div>

        {/* Carousel Container */}
        <div className="categoryCarousel">
          {categoryData.map((item, index) => {
            const diff = index - current;
            let position = diff;

            // Handle circular positioning
            if (diff < -Math.floor(categoryData.length / 2)) {
              position = diff + categoryData.length;
            } else if (diff > Math.floor(categoryData.length / 2)) {
              position = diff - categoryData.length;
            }

            // Determine visibility based on screen size
            const maxVisible = Math.floor(visibleItems / 2);
            const isVisible = Math.abs(position) <= maxVisible;
            const isActive = position === 0;

            return (
              <div
                key={index}
                className={`carouselItem ${isActive ? 'active' : ''}`}
                style={{
                  transform: `translateX(${position * (100 / visibleItems)}%)`,
                  opacity: isVisible ? (isActive ? 1 : 0.7) : 0,
                  zIndex: isActive ? 10 : isVisible ? 5 : 1,
                  cursor: !isActive ? 'pointer' : 'default',
                }}
                onClick={() => !isActive && handleItemClick(index)}
              >
                <img 
                  src={item.image} 
                  alt={item.alt}
                  loading="lazy"
                />
                
                {/* Caption Overlay */}
                <div className="carouselCaption">
                  <h3 className="captionTitle">{item.title}</h3>
                  <p className="captionSubtitle">{item.productCount}</p>
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