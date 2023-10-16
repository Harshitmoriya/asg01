import React, { useState, useEffect } from 'react';
import viteLogo from '/vite.svg'
// import './Slider.css'; // Create this CSS file for styling
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';

import './Slider.css'
import Purchase from './1 Purchase Order.json'
import Processing from './2 Processing.json'
import Quality from './3 Quality Control.json'
import Prackaging from './4 Prackaging.json'
import Logistics from './5 Logistics.json'
import Insurance from './6 Insurance.json'
import Customs from './7 Customs _ Compliance.json'
import Delivery from './8 Delivery.json'
import Lottie from 'lottie-react'


const slides = [
  { serialNumber: 1, animationData: Purchase, title: 'Purchase', content: 'Once youve found your exporter, Pazago Fulfilled ensures a seamless journey empowering your business to streamline communication, manage documents, handle financial transactions, track shipments, and optimise trade operations with unparalleled efficiency' },
  { serialNumber: 2, animationData: Processing, title: 'Processing', content: 'Once youve found your exporter, Pazago Fulfilled ensures a seamless journey empowering your business to streamline communication, manage documents, handle financial transactions, track shipments, and optimise trade operations with unparalleled efficiency' },
  { serialNumber: 3, animationData: Quality, title: 'Quality', content: 'Once youve found your exporter, Pazago Fulfilled ensures a seamless journey empowering your business to streamline communication, manage documents, handle financial transactions, track shipments, and optimise trade operations with unparalleled efficiency' },
  { serialNumber: 4, animationData: Prackaging, title: 'Prackaging', content: 'Once youve found your exporter, Pazago Fulfilled ensures a seamless journey empowering your business to streamline communication, manage documents, handle financial transactions, track shipments, and optimise trade operations with unparalleled efficiency' },
  { serialNumber: 5, animationData: Logistics, title: 'Logistics', content: 'Once youve found your exporter, Pazago Fulfilled ensures a seamless journey empowering your business to streamline communication, manage documents, handle financial transactions, track shipments, and optimise trade operations with unparalleled efficiency' },
  { serialNumber: 6, animationData: Insurance, title: 'Insurance', content: 'Once youve found your exporter, Pazago Fulfilled ensures a seamless journey empowering your business to streamline communication, manage documents, handle financial transactions, track shipments, and optimise trade operations with unparalleled efficiency' },
  { serialNumber: 7, animationData: Customs, title: 'Customs', content: 'Once youve found your exporter, Pazago Fulfilled ensures a seamless journey empowering your business to streamline communication, manage documents, handle financial transactions, track shipments, and optimise trade operations with unparalleled efficiency' },
  { serialNumber: 8, animationData: Delivery, title: 'Delivery', content: 'Once youve found your exporter, Pazago Fulfilled ensures a seamless journey empowering your business to streamline communication, manage documents, handle financial transactions, track shipments, and optimise trade operations with unparalleled efficiency' },
];

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (startAnimation) {
      // Start the animation after a 2-second delay
      const timer = setTimeout(() => {
        setStartAnimation(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [startAnimation]);


  
  const nextSlide = () => {
    const currentLottieAnimation = document.querySelector('.carousel-slide.active .lottie-animation');
    currentLottieAnimation.classList.add('next');

    setTimeout(() => {
      currentLottieAnimation.classList.remove('next');
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 100); // Adjust the delay based on your animation duration
  };

  const prevSlide = () => {
    const currentLottieAnimation = document.querySelector('.carousel-slide.active .lottie-animation');
    currentLottieAnimation.classList.add('prev');

    setTimeout(() => {
      currentLottieAnimation.classList.remove('prev');
      setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    }, 100); // Adjust the delay based on your animation duration
  };



  return (
    <div className="carousel-container">
      <h1 className="carousel-heading">From order to fulfilment</h1>
      <div className="carousel">
    
        {slides.map((slide, index) => (
          
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
        
            <div className="lottie-animation">
              
              <Lottie
                animationData={slide.animationData}
                options={{
                  loop: true,
                  autoplay: true,
                  delay:2000,
         
                }}
              />
               <div className="slide-content">
              <p>{slide.serialNumber}</p>
              </div>
            </div>
            <div className="slide-content">
             
              <h3>{slide.title}</h3>
              <p>{slide.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={prevSlide}>Previous</button>
        <button
          onClick={nextSlide}
          className="next-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;