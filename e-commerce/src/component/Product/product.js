import React, { useRef, useState } from 'react';
import './product.css';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
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

  // State for tracking current slide position
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides] = useState(8); // Total number of products

  // Calculate slides visible based on screen width
  const getSlidesVisible = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 479) return 1;
    if (screenWidth <= 767) return 2;
    if (screenWidth <= 991) return 3;
    if (screenWidth <= 1199) return 4;
    return 5;
  };

  const [slidesVisible, setSlidesVisible] = useState(getSlidesVisible());

  // Update slides visible on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setSlidesVisible(getSlidesVisible());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update current slide indicator based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.children[0]?.offsetWidth || 0;
        const gap = 13; // 0.8em gap converted to pixels (approximate)
        const slideIndex = Math.round(scrollLeft / (cardWidth + gap));
        setCurrentSlide(slideIndex);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      // Responsive scroll amount based on screen width
      const screenWidth = window.innerWidth;
      let scrollAmount = 250;
      
      if (screenWidth <= 479) scrollAmount = 150;
      else if (screenWidth <= 767) scrollAmount = 180;
      else if (screenWidth <= 991) scrollAmount = 220;
      
      // Direct scrollLeft manipulation for better compatibility
      const container = carouselRef.current;
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  const scrollToSlide = (slideIndex) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = container.children[0]?.offsetWidth || 0;
      const gap = 13; // 0.8em gap converted to pixels (approximate)
      const scrollPosition = slideIndex * (cardWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
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

  return (
    <div className='productContainer'>
      <h1 className='productTitle'>Featured Product</h1>

      <div className="carouselWrapper">
        <div className="carouselButtons">
          <button onClick={() => scroll('left')}>‹</button>
          <button onClick={() => scroll('right')}>›</button>
        </div>

        <div className='productCarousel' ref={carouselRef}>

          {/* Slide 1: NEW + Heart */}
          <div className="cardWrapper">
            <div className="imageWrapper">
              <span className="badgeNew">NEW</span>
              <FaHeart 
                className="heartIcon"
                style={{ color: liked.chair4 ? "crimson" : "white" }}
                onClick={() => toggleLike('chair4')}
              />
              <img className='productCard' src={chair4} alt='chair4' />
            </div>
            <p className="productDesc">Library Stool Chair</p>
            <div className="productFooter">
              <span className="price">$120</span>
              <FaShoppingCart className="cartIcon" />
            </div>
          </div>

          {/* Slide 2: SALE + Heart */}
          <div className="cardWrapper">
            <div className="imageWrapper">
              <span className="badgeNew" style={{ background: '#ff6b35' }}>SALE</span>
              <FaHeart 
                className="heartIcon"
                style={{ color: liked.chair3 ? "crimson" : "white" }}
                onClick={() => toggleLike('chair3')}
              />
              <img className='productCard' src={chair3} alt='chair3' />
            </div>
            <p className="productDesc">Comfort Lounge Chair</p>
            <div className="productFooter">
              <span className="price">
                <span style={{ textDecoration: 'line-through', color: '#999', marginRight: '8px' }}>$120</span>
                $90
              </span>
              <FaShoppingCart className="cartIcon" />
            </div>
          </div>

          {/* Slide 3: Normal + Heart */}
          <div className="cardWrapper">
            <div className="imageWrapper">
              <FaHeart 
                className="heartIcon"
                style={{ color: liked.chair5 ? "crimson" : "white" }}
                onClick={() => toggleLike('chair5')}
              />
              <img className='productCard' src={chair5} alt='chair5' />
            </div>
            <p className="productDesc">Classic Wooden Chair</p>
            <div className="productFooter">
              <span className="price">$150</span>
              <FaShoppingCart className="cartIcon" />
            </div>
          </div>

          {/* Slide 4 */}
          <div className="cardWrapper">
            <div className='imageWrapper'>
              <FaHeart 
                className="heartIcon"
                style={{ color: liked.chair6 ? "crimson" : "white" }}
                onClick={() => toggleLike('chair6')}
              />
              <img className='productCard' src={chair6} alt='chair6' />
            </div>
            <p className="productDesc">Minimalist Chair</p>
            <div className="productFooter">
              <span className="price">$110</span>
              <FaShoppingCart className="cartIcon" />
            </div>
          </div>

          {/* Slide 5 */}
          <div className="cardWrapper">
            <div className='imageWrapper'>
              <FaHeart 
                className="heartIcon"
                style={{ color: liked.chair7 ? "crimson" : "white" }}
                onClick={() => toggleLike('chair7')}
              />
              <img className='productCard' src={chair7} alt='chair7' />
            </div>
            <p className="productDesc">Stylish Armchair</p>
            <div className="productFooter">
              <span className="price">$130</span>
              <FaShoppingCart className="cartIcon" />
            </div>
          </div>

          {/* Slide 6 */}
          <div className="cardWrapper">
            <div className='imageWrapper'>
              <FaHeart 
                className="heartIcon"
                style={{ color: liked.chair8 ? "crimson" : "white" }}
                onClick={() => toggleLike('chair8')}
              />
              <img className='productCard' src={chair8} alt='chair8' />
            </div>
            <p className="productDesc">Modern Desk Chair</p>
            <div className="productFooter">
              <span className="price">$95</span>
              <FaShoppingCart className="cartIcon" />
            </div>
          </div>

          {/* Slide 7 */}
          <div className="cardWrapper">
            <div className='imageWrapper'>
              <FaHeart 
                className="heartIcon"
                style={{ color: liked.chair9 ? "crimson" : "white" }}
                onClick={() => toggleLike('chair9')}
              />
              <img className='productCard' src={chair9} alt='chair9' />
            </div>
            <p className="productDesc">Comfort Recliner</p>
            <div className="productFooter">
              <span className="price">$170</span>
              <FaShoppingCart className="cartIcon" />
            </div>
          </div>

          {/* Slide 8 */}
          <div className="cardWrapper">
            <div className='imageWrapper'>
              <FaHeart 
                className="heartIcon"
                style={{ color: liked.chair10 ? "crimson" : "white" }}
                onClick={() => toggleLike('chair10')}
              />
              <img className='productCard' src={chair10} alt='chair10' />
            </div>
            <p className="productDesc">Velvet Luxury Chair</p>
            <div className="productFooter">
              <span className="price">$200</span>
              <FaShoppingCart className="cartIcon" />
            </div>
          </div>

        </div>
      </div>

      {/* Slider Indicators */}
      <div className="sliderIndicators">
        {Array.from({ length: Math.max(0, totalSlides - slidesVisible + 1) }, (_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => scrollToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Alternative: Progress Bar Indicator */}
      {/* 
      <div className="progressIndicator">
        <div 
          className="progressFill"
          style={{
            width: `${((currentSlide + 1) / Math.max(1, totalSlides - slidesVisible + 1)) * 100}%`
          }}
        />
      </div>
      */}

    </div>
  )
}

export default Product;