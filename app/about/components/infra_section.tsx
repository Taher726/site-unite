"use client";

import React, { useState } from 'react';
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(infrastructureFeatures.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.ceil(infrastructureFeatures.length / 3) - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleItems = () => {
    const itemsPerPage = 3;
    const startIndex = currentIndex * itemsPerPage;
    return infrastructureFeatures.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section className="pt-27 pb-2 bg-white relative overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
          Infrastructure
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
          Powering Innovation with Scalable, Intelligent Systems
        </p>
      </div>

      {/* Carousel Container with dark overlay on background image */}
      <div className="relative py-16 overflow-hidden">
        {/* Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url('/about4.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b]/70 via-[#0f172a]/60 to-[#1e293b]/70 backdrop-blur-sm"></div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#30394A] hover:bg-opacity-30 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#30394A] hover:bg-opacity-30 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Cards Container */}
          <div className="relative flex justify-center gap-6 px-16 mb-8">
            {getVisibleItems().map((feature, index) => (
              <div
                key={currentIndex * 3 + index}
                className="flex-1 max-w-sm bg-[#30394A] backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-48 bg-gradient-to-br bg-white flex items-center justify-center">
                  {feature.icon}
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: Math.ceil(infrastructureFeatures.length / 3) }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 w-8'
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
