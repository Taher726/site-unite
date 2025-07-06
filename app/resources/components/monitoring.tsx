export default function Monitoring() {
    return (
        <div className="min-h-screen bg-white pt-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Management & Monitoring</h2>
            </div>
            <div className="pb-6 pr-6 pl-6 border border-gray-200 rounded-lg shadow-md max-w-4xl mx-auto flex justify-center items-center">
                <video loop muted autoPlay className="w-full h-auto">
                    <source src="/monitoring.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}