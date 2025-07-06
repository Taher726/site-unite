import React, { useState } from 'react';
import { Server, HardDrive, Wifi, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

// Define the types for props
interface ImageGalleryProps {
    images: string[];
    title: string;
}

// Image Gallery Component
function ImageGallery({ images, title }: ImageGalleryProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!images || images.length === 0) {
        return (
            <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 flex items-center justify-center border border-gray-300">
                <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-gray-500 text-sm">No Image</span>
                    </div>
                    <p className="text-gray-400 text-sm">Image not available</p>
                </div>
            </div>
        );
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-gray-300">
            {/* Main Image */}
            <div className="relative w-full h-full">
                <img
                    src={images[currentImageIndex]}
                    alt={`${title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain transition-all duration-500"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement; // Type assertion
                        target.style.display = 'none';
                        (target.nextElementSibling as HTMLElement).style.display = 'flex'; // Type assertion for next sibling
                    }}
                />

                {/* Fallback for broken images */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 hidden items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-gray-500 text-xs">404</span>
                        </div>
                        <p className="text-gray-400 text-sm">Image not found</p>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows (only show if multiple images) */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {currentImageIndex + 1} / {images.length}
                </div>
            )}

            {/* Dot Indicators (only show if multiple images) */}
            {images.length > 1 && (
                <div className="absolute bottom-2 right-2 flex space-x-1">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                                ? 'bg-white'
                                : 'bg-white/50 hover:bg-white/70'
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

interface ResourceNodeProps {
    resource: {
        id: number;
        title: string;
        icon: React.ComponentType<{ className?: string }>;
    };
    position: {
        top: number;
        left: number;
        delay: number;
    };
    isActive: boolean;
    onHover: (id: number | null) => void;
    onClick: (resource: any) => void;
}

// Resource Node Component
function ResourceNode({ resource, position, isActive, onHover, onClick }: ResourceNodeProps) {
    const { top, left, delay } = position;

    return (
        <div
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 cursor-pointer group ${isActive ? 'z-20' : 'z-10'
                }`}
            style={{
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${delay}ms`
            }}
            onMouseEnter={() => onHover(resource.id)}
            onMouseLeave={() => onHover(null)}
            onClick={() => onClick(resource)}
        >
            {/* Connection Line to Center */}
            <div className="absolute w-px bg-gradient-to-r from-blue-500/60 to-transparent h-32 -bottom-16 left-1/2 transform -translate-x-1/2 opacity-40 group-hover:opacity-80 transition-opacity duration-300" />

            {/* Resource Circle */}
            <div className={`relative w-32 h-32 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300 flex flex-col items-center justify-center transform transition-all duration-500 hover:scale-110 shadow-lg ${isActive ? 'border-blue-500 shadow-blue-500/30' : 'group-hover:border-blue-400'
                }`}>
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                {/* Icon */}
                <div className="relative z-10 mb-2">
                    <resource.icon className="w-8 h-8 text-blue-600 group-hover:text-blue-500 transition-colors duration-300" />
                </div>

                {/* Title */}
                <div className="relative z-10 text-center px-2">
                    <h3 className="text-sm font-semibold text-gray-800 leading-tight">{resource.title}</h3>
                </div>

                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-500 opacity-0 group-hover:opacity-100 animate-ping" />
            </div>

            {/* Resource Image (Placeholder) */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                <resource.icon className="w-6 h-6 text-white" />
            </div>
        </div>
    );
}

interface CentralHubProps {
    isActive: boolean;
}

// Central Hub Component
function CentralHub({ isActive }: CentralHubProps) {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            {/* Outer Ring */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-blue-400/40 animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-blue-500/30 animate-pulse" />

            {/* Central Core */}
            <div className="relative w-32 h-32 rounded-full bg-blue-500 shadow-2xl flex flex-col items-center justify-center border-4 border-blue-400/60">
                {/* Inner Glow */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-500/40 blur-lg animate-pulse" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center px-2 text-center items-center">
                    <img src="/logo_dc-white.svg" className='h-9 mb-2' />
                    <h2 className="text-xs font-bold text-white leading-tight">Data Center</h2>
                    <p className="text-xs text-blue-100">Resources</p>
                </div>

                {/* Rotating Elements */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-300/60 animate-spin-slow" />
                <div className="absolute inset-1 rounded-full border border-blue-200/40 animate-spin-reverse" />
            </div>
        </div>
    );
}

interface ConnectionLinesProps {
    activeResource: number | null;
}

// Connection Lines Component
function ConnectionLines({ activeResource }: ConnectionLinesProps) {
    const connections = [
        { from: { x: 50, y: 50 }, to: { x: 25, y: 25 } },
        { from: { x: 50, y: 50 }, to: { x: 75, y: 25 } },
        { from: { x: 50, y: 50 }, to: { x: 75, y: 75 } },
        { from: { x: 50, y: 50 }, to: { x: 25, y: 75 } },
    ];

    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
                </linearGradient>
            </defs>
            {connections.map((connection, index) => (
                <line
                    key={index}
                    x1={`${connection.from.x}%`}
                    y1={`${connection.from.y}%`}
                    x2={`${connection.to.x}%`}
                    y2={`${connection.to.y}%`}
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className={`transition-all duration-500 ${activeResource ? 'opacity-100' : 'opacity-50'
                        }`}
                />
            ))}
        </svg>
    );
}

interface ResourceDetailModalProps {
    resource: {
        id: number;
        title: string;
        category: string;
        icon: React.ComponentType<{ className?: string }>;
        images: string[];
        specs?: string[];
        features?: string[];
    } | null;
    onClose: () => void;
}

// Resource Detail Modal
function ResourceDetailModal({ resource, onClose }: ResourceDetailModalProps) {
    if (!resource) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-slate-50/95 to-white/95 backdrop-blur-sm rounded-3xl max-w-2xl w-full border border-white/20 shadow-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                                <resource.icon className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-800">{resource.title}</h2>
                                <p className="text-blue-600 text-sm font-medium">{resource.category}</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-slate-400 hover:text-slate-600 transition-all duration-300 w-8 h-8 rounded-full bg-white/80 hover:bg-white hover:scale-110 flex items-center justify-center shadow-sm"
                        >
                            ×
                        </button>
                    </div>

                    {/* Image Gallery */}
                    <ImageGallery images={resource.images} title={resource.title} />

                    <div className="text-center">
                        {/* Additional Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/40 shadow-sm">
                                <h4 className="font-semibold text-slate-700 mb-2">Specifications</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    {resource.specs?.map((spec, index) => (
                                        <li key={index}>• {spec}</li>
                                    )) || <li>• Details coming soon</li>}
                                </ul>
                            </div>
                            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/40 shadow-sm">
                                <h4 className="font-semibold text-slate-700 mb-2">Features</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    {resource.features?.map((feature, index) => (
                                        <li key={index}>• {feature}</li>
                                    )) || <li>• Enterprise-grade reliability</li>}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Main Resources Component
export default function Resources() {
    const [activeResource, setActiveResource] = useState<number | null>(null)
    const [selectedResource, setSelectedResource] = useState(null);

    const resources = [
        {
            id: 1,
            title: "Servers",
            category: "Computing",
            description: "High-performance enterprise servers powering your applications with maximum efficiency and reliability. Our server infrastructure is designed to handle demanding workloads while maintaining optimal performance and uptime.",
            icon: Server,
            images: ["/server3.jpeg", "/server1.jpeg", "/server2.jpeg"],
            position: { top: 25, left: 25, delay: 0 },
            specs: ["Intel Xeon processors", "Up to 1TB RAM", "NVMe SSD storage", "Redundant power supply"],
            features: ["24/7 monitoring", "Auto-scaling", "Load balancing", "Backup systems"]
        },
        {
            id: 2,
            title: "Storage",
            category: "Data Storage",
            description: "Massive storage arrays with lightning-fast access speeds and enterprise-grade reliability. Our storage solutions provide scalable capacity with advanced data protection and high-speed access.",
            icon: HardDrive,
            images: ["/hard_drive.jpeg"],
            position: { top: 25, left: 75, delay: 200 },
            specs: ["Terabyte capacity", "SSD + HDD tiers", "RAID protection", "10Gbps throughput"],
            features: ["Data deduplication", "Snapshots", "Encryption", "Remote replication"]
        },
        {
            id: 3,
            title: "Network",
            category: "Connectivity",
            description: "Ultra-high-speed networking infrastructure ensuring seamless data flow and minimal latency. Our network backbone connects all resources with redundant pathways for maximum reliability.",
            icon: Wifi,
            images: ["/network2.jpeg", "/feature6.jpg"],
            position: { top: 75, left: 75, delay: 400 },
            specs: ["100Gbps backbone", "Sub-millisecond latency", "99.99% uptime", "Global peering"],
            features: ["DDoS protection", "Traffic shaping", "VPN support", "SD-WAN ready"]
        },
        {
            id: 4,
            title: "AI GPUs",
            category: "Acceleration",
            description: "Cutting-edge GPU clusters optimized for AI workloads and high-performance computing tasks. Our GPU infrastructure accelerates machine learning, rendering, and computational workloads.",
            icon: Zap,
            images: ["/gpu.jpeg"],
            position: { top: 75, left: 25, delay: 600 },
            specs: ["NVIDIA A40", "NVIDIA L40S", "NVIDIA L4", "NVIDIA A2"],
            features: ["AI frameworks", "Container support", "Jupyter notebooks", "Model deployment"]
        }
    ];

    return (
        <div className="min-h-screen bg-white relative overflow-hidden p-2">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                                     radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
                }} />
            </div>

            <div className="relative z-10 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Infrastructure Overview</h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover our state-of-the-art data center resources. Click on any resource to learn more about our capabilities.
                    </p>
                </div>

                {/* Main Network Diagram */}
                <div className="relative max-w-4xl mx-auto h-96 px-8">
                    <ConnectionLines activeResource={activeResource} />
                    <CentralHub isActive={activeResource !== null} />

                    {resources.map((resource) => (
                        <ResourceNode
                            key={resource.id}
                            resource={resource}
                            position={resource.position}
                            isActive={activeResource === resource.id}
                            onHover={setActiveResource}
                            onClick={setSelectedResource}
                        />
                    ))}
                </div>

                {/* Instructions */}
                <div className="text-center mt-16">
                    <p className="text-gray-500 text-sm">
                        Hover over resources to see connections • Click to view details
                    </p>
                </div>
            </div>

            <ResourceDetailModal
                resource={selectedResource}
                onClose={() => setSelectedResource(null)}
            />
        </div>
    );
}