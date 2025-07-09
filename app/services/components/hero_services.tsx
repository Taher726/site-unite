export default function HeroServices() {
    return(
        <div className="relative h-[30vh] md:h-[50vh] min-h-[300px] md:min-h-[370px] w-[full] overflow-hidden rounded-b-4xl">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/about_page1.jpg')`,
                    filter: "brightness(0.7)"
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-blue-950/40" />
            <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center items-center text-left">
                <div className="max-w-7xl">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        Services
                    </h1>
                </div>
            </div>
        </div>
    );
}