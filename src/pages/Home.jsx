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

import { Link } from "react-router-dom";  

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
      }, 500); // Match this with the transition duration
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
      {/* Landing Image Section - Now a Slideshow */}
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

          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Indicator */}
          <div className="absolute bottom-6 right-6 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* 2nd Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-700 mb-4">
            Elevating Brands Through
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
            Strategy, Creativity and Innovation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-16">
          <div className="flex justify-center">
            <img
              src={Rectangle28}
              alt="Brand Growth Illustration"
              className="max-w-md w-full"
            />
          </div>

          <div className="flex justify-center md:justify-start">
            <a
              href="/book-free-call"
              className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold px-10 py-4 rounded-full transition inline-block"
            >
              Book A Free Strategy Call
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At <span className="font-semibold text-gray-900">Uplift Marketing Agency</span>, we transform ideas into powerful brand experiences.
            Our team of passionate marketers, strategists, and creatives helps businesses unlock their full potential
            and accelerate sustainable growth.
          </p>
        </div>
      </section>

      {/* 4th Section: Our Core Services */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Service 1 */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-8 md:gap-12 mb-16 md:mb-24">
            <div className="w-full md:w-2/5">
              <img 
                src={Communication}
                alt="Digital Marketing"
                className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="w-full md:w-3/5">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Digital Marketing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Logging of the marketing process for digital marketing is a key component in the industry. 
                Our comprehensive digital marketing strategies drive measurable results and ROI for your business.
              </p>

              {/* Fixed href to be more specific */}
              <a href="/services/digital-marketing"
                className="inline-flex items-center mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition"
              >
                Learn more <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 mb-16 md:mb-24">
            <div className="w-full md:w-2/5">
              <img 
                src={Analysis2}
                alt="Graphic Design & Branding"
                className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="w-full md:w-3/5">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Graphic Design & Branding
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Innovative and creative solutions are designed to help customers improve their product experience. 
                We create memorable brand identities that resonate with your target audience.
              </p>

              {/* Fixed href to be service-specific */}
              <a href="/services/graphic-design"
                className="inline-flex items-center mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition"
              >
                Learn more <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-8 md:gap-12 mb-16 md:mb-24">
            <div className="w-full md:w-2/5">
              <img 
                src={ContentMarketing}
                alt="Content Marketing"
                className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="w-full md:w-3/5">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Content Marketing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Logging of the marketing process for digital marketing is a key component in the industry. 
                We craft compelling content that engages your audience and drives conversions.
              </p>

              {/* Fixed href to be service-specific */}
              <a
                href="/services/content-marketing"
                className="inline-flex items-center mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition"
              >
                Learn more <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Service 4 */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            <div className="w-full md:w-2/5">
              <img 
                src={Analysing}
                alt="Marketing Strategy"
                className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="w-full md:w-3/5">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Marketing Strategy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Logging of the marketing process for digital marketing is a key component in the industry. 
                We develop data-driven marketing strategies that align with your business goals and objectives.
              </p>

              {/* Fixed href to be service-specific */}
              <a
                href="/services/marketing-strategy"
                className="inline-flex items-center mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition"
              >
                Learn more <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-24 pt-12 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              What They Say About Us
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md mr-4 flex-shrink-0">
                    <img 
                      src={Female2} 
                      alt="Sarah M." 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah M.</p>
                    <p className="text-gray-600 text-sm">Cofounder and CEO</p>
                    <div className="flex mt-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Uplift Marketing Agency helped us refine our brand strategy and completely transformed how we show up online. Their creativity, attention to detail, and strategic thinking delivered results beyond our expectations."
                </p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md mr-4 flex-shrink-0">
                    <img 
                      src={User1} 
                      alt="James K." 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">James K.</p>
                    <p className="text-gray-600 text-sm">Marketing Manager</p>
                    <div className="flex mt-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "From day one, the team understood our goals and delivered marketing solutions that actually worked. We saw increased engagement, stronger brand visibility, and real business growth."
                </p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md mr-4 flex-shrink-0">
                    <img 
                      src={Female1} 
                      alt="Linda P." 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Linda P.</p>
                    <p className="text-gray-600 text-sm">Operational Manager</p>
                    <div className="flex mt-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                      <span className="text-yellow-400">★</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Working with Uplift feels like having an in-house marketing team. They're proactive, transparent, and genuinely invested in our success. We highly recommend them to any growing business."
                </p>
              </div>
            </div>
          </div>
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
