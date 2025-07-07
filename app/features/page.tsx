"use client";

import { useEffect, useState } from "react";
import { Cpu, Database, Brain, Shield, Zap, Network, Thermometer, Lock, Globe, AirVent, FireExtinguisher, BarChart3 } from 'lucide-react';
import FeaturesAbout from "./components/features_about";

const EnhancedFeaturesContent = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        {
            icon: Cpu,
            title: "High-Performance AI Computing",
            description: "Accelerated by GPUs and parallel processing, our AI infrastructure handles massive datasets and complex neural network training with exceptional speed and accuracy."
        },
        {
            icon: BarChart3,
            title: "Real-Time Big Data Analytics",
            description: "Seamlessly ingest, process, and visualize structured and unstructured data in real-time—enabling smart decision-making and dynamic response systems."
        },
        {
            icon: Brain,
            title: "Scalable Deep Learning Frameworks",
            description: "Leverage TensorFlow, PyTorch, and other modern AI frameworks on scalable cloud-native or on-premise environments designed for intensive workloads."
        },
        {
            icon: Database,
            title: "Large Language Models (LLMs)",
            description: "Enable advanced language understanding with large-scale models for text generation, translation, summarization, and context-aware conversations across multiple languages."
        },
        {
            icon: Globe,
            title: "Natural Language Processing (NLP)",
            description: "Empower human-machine interaction with multilingual text analysis, sentiment detection, and intelligent document processing using state-of-the-art NLP models."
        },
        {
            icon: Shield,
            title: "Secure AI Operations (AI-Ops)",
            description: "Ensure reliable, ethical, and compliant AI deployment with built-in governance, monitoring, and automated lifecycle management."
        }
    ];

    const securityFeatures = [
        {
            icon: Lock,
            title: "Badge-based access",
            image: "/feature1.jpg",
            description: "Advanced biometric scanners and secure badge systems ensure only authorized personnel can access sensitive areas."
        },
        {
            icon: FireExtinguisher ,
            title: "Fire extinguishing",
            image: "/feature7.jpeg",
            description: "State-of-the-art fire detection systems with automated suppression technology protect critical infrastructure."
        },
        {
            icon: Shield,
            title: "FireWall and network monitoring",
            image: "/feature4.png",
            description: "Comprehensive video monitoring with AI-powered analytics provides continuous security coverage and threat detection."
        },
        {
            icon: Network,
            title: "Network",
            image: "/feature6.jpg",
            description: "Digital visitor management system with pre-scheduling and real-time tracking for enhanced security protocols."
        },
        {
            icon: AirVent,
            title: "Redundant power and cooling",
            image: "/feature3.jpg",
            description: "Multiple backup power systems and cooling redundancy ensure 99.9% uptime for mission-critical operations."
        },
        {
            icon: Zap,
            title: "Electrical power supply",
            image: "/feature5.png",
            description: "Advanced perimeter security with motion sensors, thermal imaging, and instant alert systems."
        }
    ];

    const networkFeatures = [
        {
            title: "High-Bandwidth Backbone",
            description: "Ultra-fast data transfer from multi-gigabit to terabit speeds, ensuring seamless flow of massive datasets, fast AI model deployment and sharing, real-time collaboration across nodes, and smooth HPC operations with no bottlenecks.",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Low Latency Architecture",
            description: "Designed for minimal delays, ensuring fast and reliable performance across critical workloads with high-speed switches, short-path routing, real-time data exchange, and edge-aware communication for instant processing.",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            title: "Software-Defined Networking (SDN)",
            description: "Real-time control and flexibility across the network with dynamic bandwidth and traffic prioritization, isolated environments for testing and security, and decoupled control for scalable, programmable infrastructure.",
            gradient: "from-purple-500 to-violet-500"
        },
        {
            title: "Redundant and Resilient",
            description: "Multiple failover systems ensure continuous operation with automated backup switching, distributed load balancing, disaster recovery protocols, and 99.9% uptime guarantee for mission-critical applications.",
            gradient: "from-orange-500 to-red-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

            {/* AI Capabilities Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            AI Capabilities
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Cutting-edge artificial intelligence infrastructure designed to power the next generation of intelligent applications
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-3xl bg-white p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer border border-gray-100`}
                                onMouseEnter={() => setActiveCard(index)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                {/* Unified Gradient Overlay */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                {/* Icon with unified gradient */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-justify">
                                    {feature.description}
                                </p>

                                {/* Animated Border */}
                                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300" />
                            </div>
                        ))}
                    </div>
                    
                </div>  
            </section>

            {/* Security Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Datacenter Design & Security
                        </h2>
                        <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                            Our datacenter uses layered security from access control to surveillance to safeguard sensitive data and ensure continuous, reliable operations.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {securityFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 cursor-pointer"
                                onMouseEnter={() => setActiveCard(index + 10)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                {/* Image Section */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                    {/* Icon Overlay */}
                                    <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <h3 className="text-xl text-center font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                                        {feature.title}
                                    </h3>

                                </div>

                                {/* Animated Border */}
                                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-300" />
                            </div>
                        ))}
                    </div>

                    {/* Cooling Section */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                                <Thermometer className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-white">Smart & Efficient Cooling</h3>
                        </div>
                        <div className="space-y-4 text-blue-100 text-justify">
                            <p><strong>Efficient Thermal Management for High-Density Computing:</strong> To keep our HPC and AI systems running reliably, we use advanced cooling solutions tailored for high thermal loads.</p>
                            <p>Our strategy combines precision air conditioning, liquid cooling, and hot/cold aisle containment for optimal airflow and energy savings. These systems are monitored and adjusted in real time to match workload demands.</p>
                            <p>We also focus on sustainability using free cooling, intelligent airflow design, and heat reuse to reduce our carbon footprint without compromising performance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Network Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Network Infrastructure
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Seamless, secure, and scalable connectivity built to handle high data demands in advanced computing environments
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {networkFeatures.map((feature, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                <div className="flex items-center space-x-4 mb-6">
                                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${feature.gradient} group-hover:scale-125 transition-transform duration-300`} />
                                    <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-justify">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default function FeaturesPage() {
    return (
        <section className="bg-white">
            <FeaturesAbout />
            <EnhancedFeaturesContent />
        </section>
    );
}