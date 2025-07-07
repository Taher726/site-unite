"use client";

import React, { useState, useEffect } from 'react';
import {
  Cpu,
  MemoryStick,
  HardDrive,
  Zap,
  Network,
  Thermometer,
  Settings2
} from "lucide-react";

interface AnimatedNumberProps {
  targetNumber: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  startDelay?: number;
}

function AnimatedNumber({
  targetNumber,
  suffix = "",
  prefix = "",
  duration = 2000,
  startDelay = 0
}: AnimatedNumberProps) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (startDelay === 0) {
      setHasStarted(true);
    } else {
      const startTimer = setTimeout(() => {
        setHasStarted(true);
      }, startDelay);

      return () => clearTimeout(startTimer);
    }
  }, [startDelay]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now();
    const startValue = 0;
    const endValue = targetNumber;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = startValue + (endValue - startValue) * easeOutQuart;

      setCurrentNumber(Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrentNumber(endValue);
      }
    };

    animate();
  }, [hasStarted, targetNumber, duration]);

  return (
    <span>
      {prefix}
      {currentNumber.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function KeyFigures() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const cards = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: "vCPUs",
      number: 1000,
      suffix: "+",
      description: "Virtual CPU cores optimized for scientific research."
    },
    {
      icon: <MemoryStick className="w-8 h-8 text-green-600" />,
      title: "ECC RAM",
      number: 6,
      suffix: " TB",
      description: "Reliable memory for high-performance workloads."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "NVIDIA GPUs",
      number: 0,
      suffix: "",
      description: "A40 + L40S + L4 + A2 for AI and simulations."
    },
    {
      icon: <HardDrive className="w-8 h-8 text-yellow-600" />,
      title: "SSD Storage",
      number: 500,
      suffix: " TB",
      description: "Fast NVMe, SATA, SAS storage for data-heavy tasks."
    },
    {
      icon: <HardDrive className="w-8 h-8 text-red-500" />,
      title: "Backup Storage",
      number: 96,
      suffix: " TB",
      description: "Redundant HDDs ensure data safety and recovery."
    },
    {
      icon: <Network className="w-8 h-8 text-cyan-600" />,
      title: "Network Speed",
      number: 100,
      suffix: " Gb",
      description: "Ultra-fast network switches with low latency."
    },
    {
      icon: <Thermometer className="w-8 h-8 text-pink-500" />,
      title: "Cooling & Power",
      number: 0,
      suffix: "",
      description: "Redundant systems for stable, efficient operation."
    },
    {
      icon: <Settings2 className="w-8 h-8 text-indigo-500" />,
      title: "Virtualization Tools",
      number: 0,
      suffix: "",
      description: "KVM and tools for flexible research environments."
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-500 text-center mb-10">
        Key Figures in 2025
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-md py-10 px-3 border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col justify-center items-center"
          >
            <div className="bg-white p-3 rounded-sm mb-4 border border-gray-200">
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {card.number > 0 ? (
                <>
                  <AnimatedNumber
                    targetNumber={card.number}
                    suffix={card.suffix}
                    duration={2500}
                    startDelay={isVisible ? index * 200 : 0}
                  />{" "}
                  {card.title}
                </>
              ) : (
                card.title
              )}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
