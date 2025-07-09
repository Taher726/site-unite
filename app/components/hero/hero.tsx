"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
    {
        title: "Empowering Innovation",
        subtitle: "Next-Generation Computing",
        description: "High-performance computing, Big Data & AI transforming research and accelerating discoveries across industries.",
        image: "/img1.jpg",
        accent: "from-blue-600 to-cyan-500"
    },
    {
        title: "AI-Driven Future",
        subtitle: "GPU-Powered Intelligence",
        description: "Accelerating breakthroughs with cutting-edge GPU technology and machine learning capabilities.",
        image: "/img1.jpg",
        accent: "from-purple-600 to-blue-500"
    },
];

export function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 6000); // Increased to 6 seconds for better UX
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 opacity-40 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-50 to-transparent opacity-30 animate-spin-slow"></div>
            </div>

            {/* Main Content */}
            <div className="relative w-full max-w-7xl mx-auto px-6 z-10 mt-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        {/* Text Section */}
                        <div className="space-y-8">
                            {/* Subtitle */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${slides[index].accent} text-white text-sm font-medium tracking-wide shadow-lg`}>
                                    {slides[index].subtitle}
                                </span>
                            </motion.div>

                            {/* Main Title */}
                            <motion.h1
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-5xl lg:text-7xl font-bold leading-tight"
                            >
                                {slides[index].title.split(" ").map((word, i) => (
                                    <span
                                        key={i}
                                        className={`block ${i === 0
                                                ? `bg-gradient-to-r ${slides[index].accent} bg-clip-text text-transparent`
                                                : `bg-gradient-to-r ${slides[index].accent} bg-clip-text text-transparent`
                                            }`}
                                    >
                                        {word}
                                    </span>
                                ))}
                            </motion.h1>


                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-xl"
                            >
                                {slides[index].description}
                            </motion.p>
                        </div>

                        {/* Image Section */}
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                                className="relative"
                            >
                                {/* Decorative elements */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>

                                {/* Main image container */}
                                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                                    <Image
                                        src={slides[index].image}
                                        alt="Hero"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover"
                                    />

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
                                </div>

                                {/* Floating elements */}
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-lg animate-bounce"></div>
                                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shadow-lg animate-pulse"></div>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex justify-center mt-12 space-x-3"
                >
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index
                                ? `bg-gradient-to-r ${slides[index].accent} shadow-lg`
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}