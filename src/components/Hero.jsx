import React from 'react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-900">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Overlay for text readability */}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 -mt-20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                    Effortless Travel with <br /> Indian Railways
                </h1>
                <p className="mt-4 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
                    Experience safe, secure, and comfortable journeys across the nation.
                </p>
            </div>
        </div>
    );
};

export default Hero;
