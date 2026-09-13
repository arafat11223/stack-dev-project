import banner from "../../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">

                      

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                            Build Your
                            <span className="gradient-text block">
                                Developer Stack
                            </span>
                        </h1>

                        <p className="mt-6 text-gray-600 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
                            Discover the technologies you need to build modern,
                            scalable, and powerful web applications. Explore,
                            compare, and create your own developer stack.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                            <button className="gradient-theme text-white font-semibold px-6 py-3 rounded-full">
                                Explore Technologies
                            </button>

                            <button className="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-50">
                                Learn More
                            </button>

                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-lg">
                            <img
                                src={banner}
                                alt="Developer working with technology"
                                className="w-full"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;