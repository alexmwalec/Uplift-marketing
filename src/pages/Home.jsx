 import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import LandingImage from '../assets/images/LandingImage.png';
import Rectangle28 from '../assets/images/Rectangle28.png';
import Communication from '../assets/images/Communication.jpg';
import Analysis2 from '../assets/images/analsysis2.jpg';
import ContentMarketing from '../assets/images/Livemarketing.jpg';
import Analysing from '../assets/images/Analysing.jpg';
import User1 from '../assets/images/User1.jpg';  
import Female1 from '../assets/images/Female1.jpg';
import Female2 from '../assets/images/Female2.jpg';

import { Link, Route } from "react-router-dom";

function Home() {
  // Images for the slideshow
  const slides = [
    { image: LandingImage, alt: "Landing Image" },
    { image: ContentMarketing, alt: "Content Marketing" },
    { image: Analysis2, alt: "Analysis" },
    { image: Analysing, alt: "Analysing" },
    { image: Communication, alt: "Communication" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // Manual slide navigation
  const goToSlide = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setFade(true);
    }, 300);
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 300);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(true);
    }, 300);
  };

  return (
    <div className="w-full">
      {/* Landing Image Section */}
      <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        {/* Slideshow Container */}
        <div className="relative w-full h-full">
          {/* Slide Image */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].alt} 
              className="w-full h-full object-cover"
            />
            
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              We Don't Just Make Brands
            </h1>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
              We Uplift Them
            </h2>
          </div>

          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full">
            ‹
          </button>

          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full">
            ›
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
              />
            ))}
          </div>

          {/* Slide Indicator */}
          <div className="absolute bottom-6 right-6 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Services + Testimonials */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* content unchanged */}
        </div>
      </section>

      <Footer />

      <div>
        <Link className="font-bold text-3xl text-blue-500 hover:text-orange-500" to="/portfolio">
          Go to Portfolio
        </Link>
      </div>
    </div>
    
  );
}

export default Home;
