import HeroAbout from "./components/hero_about";
import InfrastructureSection from "./components/infra_section";

export default function AboutPage() {
    return (
        <>
            <HeroAbout />
            <section className="py-16 px-4 md:mt-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
                    {/* Text - appears first on mobile, left on desktop */}
                    <div className="text-center md:text-left order-1 md:order-2">
                        <p className="text-blue-500 text-md font-semibold uppercase tracking-wider mb-2">
                            About Us
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                            Harnessing the Power of HPC, Big Data & Artifical Intelligence
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-xl text-justify">
                            We are a team that works across different fields to support learning, research, and new ideas in high-performance computing (HPC), big data, and artificial intelligence (AI). Our goal is help future engineers, scientists, and innovators use powerful tools to solve real-world problems.
                        </p>
                    </div>
                    
                    {/* Image - appears second on mobile, right on desktop */}
                    <div className="flex justify-center md:justify-end order-2 md:order-1">
                        <img
                            src="/about_1.jpg"
                            alt="About Us"
                            className="w-full md:w-[90%] lg:w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="py-16 px-4 md:mt-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
                    {/* Text - appears first on mobile, left on desktop */}
                    <div className="text-center md:text-left order-1">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                            HPC | Big Data | AI Our Innovation Journey
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-xl text-justify">
                            The Unfolding HPC, Big Data & AI Journey From humble beginnings rooted in academic exploration to a thriving hub of technological advancement, our journey reflects a relentless pursuit of innovation.
                        </p>
                    </div>
                    
                    {/* Image - appears second on mobile, right on desktop */}
                    <div className="flex justify-center md:justify-center items-center order-2">
                        <img
                            src="/about2.jpg"
                            alt="About Us"
                            className="w-full md:w-[90%] lg:w-[95%] h-auto object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </section>
            <InfrastructureSection/>
        </>
    );
}