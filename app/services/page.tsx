"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import HeroServices from "./components/hero_services";

const big_data_applications = [
  {
    description: "Analyzing Tunisia's nighttime satellite lights to study urban activity and development trends.",
    images: ["/nighttime_light.png"],
  },
  {
    description: "Calculating the shortest path between two points using geospatial horodistance for precise routing.",
    images: ["/horodistance.png", "/horodistance2.png"],
  },
  {
    description: "Analyzing and mapping global vaccine coverage to identify gaps and support international public health strategies.",
    images: ["/medical_app.png", "/medical_app2.png"],
  },
  {
    description: "Smart video surveillance with real-time image capture, analysis, and LLM-powered search by prompt.",
    images: ["/surv_2.png"],
  },
  {
    description: "LLM-powered chatbot to guide students in their academic orientation.",
    images: ["dalil_tawjih.png"],
  },
  {
    description: "Mapping pediatric care accessibility across Tunisia.",
    images: ["/pediatric_care.png"],
  },
  {
    description: "Social data analytics for topic modeling and trend insights.",
    images: ["/social.png"],
  }
];

// Carousel component for multiple images
interface ImageCarouselProps {
  images: string[];
  altBase: string;
}

const ImageCarousel = ({ images, altBase }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative aspect-video bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`${altBase} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          const nextElement = target.nextElementSibling as HTMLElement;
          target.style.display = 'none';
          if (nextElement) {
            nextElement.style.display = 'flex';
          }
        }}
      />
      <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 items-center justify-center text-blue-600 font-semibold">
        Image {currentIndex + 1}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex ? 'bg-blue-500' : 'bg-white/60 hover:bg-white/80'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function ApplicationsPage() {
  return (
    <div className="bg-white">
      <HeroServices />
      <div className="bg-gradient-to-b from-white to-gray-50">
        <section className="py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Big Data & AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powering intelligent systems with scalable big data processing and advanced AI technologies to drive innovation, automation, and data-driven decision-making
            </p>
          </div>

          {/* Applications Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {big_data_applications.map((app, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 p-3">
                    {app.images.length > 1 ? (
                      <ImageCarousel images={app.images} altBase={`Application ${index + 1}`} />
                    ) : (
                      // Single image
                      <div className="aspect-video bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden">
                        <img
                          src={app.images[0]}
                          alt={`Application ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            const nextElement = target.nextSibling as HTMLElement;
                            target.style.display = 'none';
                            if (nextElement) {
                              nextElement.style.display = 'flex';
                            }
                          }}
                        />
                        <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 items-center justify-center text-blue-600 font-semibold">
                          Application Image
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed text-justify">
                      {app.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}