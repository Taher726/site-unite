export function AboutLanding() {
    return (
        <section className="py-16 px-5 mt-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                {/* Left: Image */}
                <div className="flex justify-center md:justify-end border border-gray-200 p-5">
                    <img
                        src="/about_landing.jpg" 
                        alt="About Us"
                        className="w-full md:w-[90%] lg:w-full h-auto object-cover"
                    />
                </div>

                {/* Right: Text */}
                <div className="text-center md:text-left">
                    <p className="text-blue-500 text-md font-semibold uppercase tracking-wider mb-2">
                        About Us
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                        Powering Innovation
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-xl text-justify">
                        The HPC, Big Data, and AI Center at the University of Sfax empowers advanced research with cutting-edge computing, massive storage, and AI capabilities.<br />Designed for real-time simulation and data analysis, it drives innovation through high performance and efficiency.
                    </p>
                </div>
            </div>
        </section>
    );
}
