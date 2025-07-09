"use client";

import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Database,
  Zap,
  Shield,
  BarChart3,
  Brain,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const InfrastructureSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const infrastructureFeatures = [
    {
      icon: <Cpu className="w-16 h-16 text-blue-500" />,
      title: "High-Performance Computing",
      description: "Advanced HPC clusters designed for large-scale computation and complex data processing with unmatched speed and reliability.",
      image: "/api/placeholder/400/250",
    },
    {
      icon: <Zap className="w-16 h-16 text-green-500" />,
      title: "GPU-Accelerated Nodes",
      description: "Cutting-edge GPU infrastructure optimized for deep learning training and massive simulation workloads.",
      image: "/api/placeholder/400/250",
    },
    {
      icon: <Database className="w-16 h-16 text-purple-500" />,
      title: "High-Throughput Storage",
      description: "Scalable storage systems ensuring fast data access and seamless integration with processing environments.",
      image: "/api/placeholder/400/250",
    },
    {
      icon: <Shield className="w-16 h-16 text-red-500" />,
      title: "Secure Data Management",
      description: "Enterprise-grade security platforms protecting sensitive research data and ensuring compliance with industry standards.",
      image: "/api/placeholder/400/250",
    },
    {
      icon: <BarChart3 className="w-16 h-16 text-orange-500" />,
      title: "Real-Time Analytics",
      description: "Advanced analytics capabilities for processing terabytes of satellite imagery and complex data streams.",
      image: "/api/placeholder/400/250",
    },
    {
      icon: <Brain className="w-16 h-16 text-indigo-500" />,
      title: "AI Experimentation",
      description: "Specialized environments for artificial intelligence research and intelligent urban systems modeling.",
      image: "/api/placeholder/400/250",
    },
  ];

  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1; // Mobile: 1 item
      if (window.innerWidth < 1024) return 2; // Tablet: 2 items
      return 3; // Desktop: 3 items
    }
    return 3; // Default fallback
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  // Update items per page on window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      // Reset to first slide when changing layout
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(infrastructureFeatures.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  const getVisibleItems = () => {
    const startIndex = currentIndex * itemsPerPage;
    return infrastructureFeatures.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section className="pt-20 md:pt-27 pb-20 bg-white relative overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-6">
          Infrastructure
        </h2>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Powering Innovation with Scalable, Intelligent Systems
        </p>
      </div>

      {/* Carousel Container with dark overlay on background image */}
      <div className="relative py-8 md:py-16 overflow-hidden">
        {/* Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url('/about4.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-70 backdrop-blur-sm"></div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-slate-700 hover:bg-slate-600 rounded-full p-2 md:p-3 transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-slate-700 hover:bg-slate-600 rounded-full p-2 md:p-3 transition-all duration-300 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </button>

          {/* Cards Container */}
          <div className="relative flex justify-center gap-3 md:gap-6 px-4 sm:px-8 md:px-12 lg:px-16 mb-8">
            {getVisibleItems().map((feature, index) => (
              <div
                key={currentIndex * itemsPerPage + index}
                className="flex-1 w-full max-w-sm bg-slate-700 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-32 sm:h-40 md:h-48 bg-gradient-to-br bg-white flex items-center justify-center">
                  <div className="scale-75 sm:scale-90 md:scale-100">
                    {feature.icon}
                  </div>
                </div>

                <div className="p-4 md:p-6 text-center">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed text-justify">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 w-6 md:w-8'
                    : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;