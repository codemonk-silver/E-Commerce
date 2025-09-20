import React, { useState, useEffect } from 'react';
import './hero.css';
import heropics from '../../asset/heropics.png';
import slider2 from '../../asset/slider2.png';
import slider3 from '../../asset/slider3.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data for 3 slides
  const slides = [
    {
      id: 1,
      subtitle: "WELCOME TO CHAIRY",
      title: "Best Furniture Collection For Your Interior",
      buttonText: "Shop Now",
      discount: "54%",
      discountText: "Discount",
      image: heropics, // Using your existing image
      bgColor: "#f1f2f3"
    },
    {
      id: 2,
      subtitle: "NEW ARRIVALS",
      title: "Premium Chair Collection For Modern Homes",
      buttonText: "Explore Now",
      discount: "30%",
      discountText: "Off",
      image: slider2, // Replace with heropics2 when you add more images
      bgColor: "#f8f9fa"
    },
    {
      id: 3,
      subtitle: "BEST SELLER",
      title: "Luxury Seating Solutions For Every Space",
      buttonText: "Discover More",
      discount: "25%",
      discountText: "Sale",
      image: slider3, // Replace with heropics3 when you add more images
      bgColor: "#f5f6f7"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-wrapper">
      <div 
        className='herocontainer'
        key={currentSlide}
        style={{ background: slides[currentSlide].bgColor }}
      >
        <div className='leftHeroContainer'>
          <div className='leftHeroText'>
            <p>{slides[currentSlide].subtitle}</p>
            <h1>{slides[currentSlide].title}</h1>
            <button className="arrow-btn">
              <span className="btn-text">{slides[currentSlide].buttonText}</span>
              <i className="fas fa-arrow-right btn-arrow"></i>
            </button>
          </div>
        </div>
        
        <div className='rightHeroContainer'>
          <div className='rightHeroImg'>
            <img 
              src={slides[currentSlide].image} 
              alt='Hero furniture'
              className={`hero-image slide-${currentSlide + 1}`}
            />
            <div className='heroDis'>
              <h1>{slides[currentSlide].discount}</h1>
              <p>{slides[currentSlide].discountText}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button className="slider-controls prev-btn" onClick={prevSlide}>
        <span>‹</span>
      </button>
      
      <button className="slider-controls next-btn" onClick={nextSlide}>
        <span>›</span>
      </button>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Hero;