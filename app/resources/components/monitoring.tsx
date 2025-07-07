export default function Monitoring() {
    return (
        <div className="bg-white pt-10 md:pt-20 pr-2 pl-2 pb-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Management & Monitoring</h2>
            </div>
            <div className="md:pb-6 md:pr-6 md:pl-6 md:border md:border-gray-200 md:rounded-lg md:shadow-md max-w-4xl mx-auto flex justify-center items-center">
                <video loop muted autoPlay className="w-full h-auto">
                    <source src="/monitoring.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}