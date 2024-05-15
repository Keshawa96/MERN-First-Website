import React, { useState } from 'react';
import './course.css';
import k from "./Images/k.jpg"

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
      />
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
    </div>
  );
};

function App1() {
  const images = [
    
    // 'https://via.placeholder.com/800x400/33ff57/fff',
    // 'https://via.placeholder.com/800x400/5733ff/fff',
  ];

  return (
    <div className="App">
      <h1>Simple React Carousel</h1>
      <Carousel images={images} />
    </div>
  );
}

export default App1;
