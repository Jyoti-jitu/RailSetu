import React from 'react';
import { FaPlane, FaHotel, FaTrain, FaChartLine, FaBus, FaUtensils, FaSubway, FaImages } from 'react-icons/fa';

const services = [
    { icon: <FaPlane />, title: 'Flights', desc: 'Book domestic and international flights at competitive rates.' },
    { icon: <FaHotel />, title: 'Hotels', desc: 'Wide range of hotels across India for easy booking.' },
    { icon: <FaTrain />, title: 'Tourist Train', desc: 'Luxurious theme-based trains for scenic journeys.' },
    { icon: <FaChartLine />, title: 'Rail Drishti', desc: 'Real-time train running status and PNR enquiry.' },
    { icon: <FaBus />, title: 'Bus', desc: 'Book bus services for inter-city and intra-city travel.' },
    { icon: <FaUtensils />, title: 'E-Catering', desc: 'Order food directly to your train seat from top brands.' },
    { icon: <FaSubway />, title: 'Charter Train', desc: 'Charter trains for corporate events, family trips, etc.' },
    { icon: <FaImages />, title: 'Gallery', desc: 'Scenic mountain and heritage railway journeys.' },
];

const Services = () => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-irctc-dark">Our Services</h2>
                <p className="mt-2 text-irctc-text">
                    Have you not found the right one? Find a service suitable for you here.
                </p>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center group cursor-pointer border border-transparent hover:border-gray-100">
                            <div className="w-16 h-16 rounded-full bg-irctc-blue text-white flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-irctc-dark mb-3">{service.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
