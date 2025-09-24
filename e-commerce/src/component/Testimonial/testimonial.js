import React, { useState } from "react";
import "./testimonial.css";
import avater from "../../asset/avater.png";
import double from "../../asset/double.png";

const testimonials = [
  {
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text...",
    name: "John Doe",
    job: "Software Engineer",
    image: avater,
    cornerImage: double
  },
  {
    text: "Lorem Ipsum has roots in a piece of classical Latin literature...",
    name: "Jane Smith",
    job: "Software Engineer",
    image: avater,
    cornerImage: double
  },
  {
    text: "Richard McClintock, a Latin professor at Hampden-Sydney College...",
    name: "David Johnson",
    job: "Software Engineer",
    image: avater,
    cornerImage: double
  },
  {
    text: "It has survived not only five centuries, but also the leap into electronic typesetting...",
    name: "Emily Carter",
    job: "Software Engineer",
    image: avater,
    cornerImage: double
  },
  {
    text: "Many desktop publishing packages and web page editors now use Lorem Ipsum...",
    name: "Michael Brown",
    job: "Software Engineer",
    image: avater,
    cornerImage: double
  },
  {
    text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below...",
    name: "Sophia Wilson",
    job: "Software Engineer",
    image: avater,
    cornerImage: double
  }
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const cardsToShow = 2;

  const nextSlide = () => {
    setCurrent((prev) =>
      prev + cardsToShow >= testimonials.length ? 0 : prev + cardsToShow
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev - cardsToShow < 0
        ? testimonials.length - cardsToShow
        : prev - cardsToShow
    );
  };

  return (
    <section className="testContainer">
      <div className="testHeader">
        <h1 className="testTitle">What Client Says About Us</h1>
        <div className="testBtns">
          <button className="testBtn" onClick={prevSlide}>
            ❮
          </button>
          <button className="testBtn" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </div>

      <div className="testCarousel">
        <div className="testCarouselContent">
          {testimonials
            .slice(current, current + cardsToShow)
            .map((item, index) => (
              <div key={index} className="testCarouselCard">
                <p className="testCarouselSlide">{item.text}</p>

                <div className="testProfile">
                  <img src={item.image} alt={item.name} />
                  <div className="testDetails">
                    <h4>{item.name}</h4>
                    <p className="testJob">{item.job}</p>
                  </div>
                </div>

                {/* ✅ Bottom-right corner image */}
                <img
                  src={item.cornerImage}
                  alt="corner"
                  className="cornerImage"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
