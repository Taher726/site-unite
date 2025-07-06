import {
  Cpu,
  MemoryStick,
  HardDrive,
  Gpu,
  Network,
  Thermometer,
  Settings2
} from "lucide-react";

export function KeyFigures() {
  const cards = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: "1000+ vCPUs",
      description: "Virtual CPU cores optimized for scientific research."
    },
    {
      icon: <MemoryStick className="w-8 h-8 text-green-600" />,
      title: "6 TB ECC RAM",
      description: "Reliable memory for high-performance workloads."
    },
    {
      icon: <Gpu className="w-8 h-8 text-purple-600" />,
      title: "NVIDIA GPUs",
      description: "A40 + L40S + L4 + A2 for AI and simulations."
    },
    {
      icon: <HardDrive className="w-8 h-8 text-yellow-600" />,
      title: "500 TB SSD",
      description: "Fast NVMe, SATA, SAS storage for data-heavy tasks."
    },
    {
      icon: <HardDrive className="w-8 h-8 text-red-500" />,
      title: "96 TB Backup",
      description: "Redundant HDDs ensure data safety and recovery."
    },
    {
      icon: <Network className="w-8 h-8 text-cyan-600" />,
      title: "100/10/25 Gb Network",
      description: "Ultra-fast network switches with low latency."
    },
    {
      icon: <Thermometer className="w-8 h-8 text-pink-500" />,
      title: "Cooling & Power",
      description: "Redundant systems for stable, efficient operation."
    },
    {
      icon: <Settings2 className="w-8 h-8 text-indigo-500" />,
      title: "Virtualization Tools",
      description: "KVM and tools for flexible research environments."
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-500 text-center mb-10">
        Key Figures in 2025
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          /*<div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {card.description}
            </p>
          </div>*/
          <div key={index} className="bg-gray-50 rounded-xl shadow-md py-10 px-3 border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col justify-center items-center" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="bg-white p-3 rounded-sm mb-4 border border-gray-200 ">
                {card.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {card.title}
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
