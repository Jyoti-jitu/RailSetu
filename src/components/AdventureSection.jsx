import React from 'react';
import adventureImg from '../assets/adventure.png';

const AdventureSection = () => {
    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src={adventureImg}
                            alt="Indian Railways Adventure"
                            className="rounded-xl shadow-xl w-full object-cover h-[400px] hover:scale-[1.02] transition-transform duration-300"
                        />
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 text-left">
                        <h2 className="text-4xl font-bold text-irctc-dark mb-6">Book Your Next Adventure</h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            Embark on a railway adventure across India with IRCTC. Book your tickets effortlessly, select your preferred seats, and immerse yourself in the diverse landscapes and cultures of this beautiful country. Whether you're traveling for business or pleasure, IRCTC offers a wide range of train options to suit your needs. From high-speed express trains to leisurely overnight journeys, you'll find the perfect way to explore India's vast network of railways.
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-irctc-blue text-white px-8 py-3 rounded-md font-semibold hover:bg-irctc-royal transition-colors shadow-lg">
                                Book Now
                            </button>
                            <button className="bg-white text-irctc-dark border border-gray-300 px-8 py-3 rounded-md font-semibold hover:border-irctc-blue hover:text-irctc-blue transition-colors">
                                Check PNR Status
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdventureSection;
