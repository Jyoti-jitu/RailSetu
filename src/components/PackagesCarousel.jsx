import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pkgMaharaja from '../assets/pkg_maharaja.png';
import pkgIntl from '../assets/pkg_intl.png';
import pkgDomestic from '../assets/pkg_domestic.png';
import pkgBharat from '../assets/pkg_bharat.png';

const PackagesCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const packages = [
        { title: 'Maharajas Express', img: pkgMaharaja, desc: 'Redefining Royal Luxury on Wheels' },
        { title: 'International Packages', img: pkgIntl, desc: 'Best deals in International Holiday packages' },
        { title: 'Domestic Air Packages', img: pkgDomestic, desc: 'Be it the spiritual devotee or leisure traveller' },
        { title: 'Bharat Gaurav', img: pkgBharat, desc: 'Theme based tourist circuit trains' },
    ];

    return (
        <div className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-irctc-dark mb-12">Holiday Packages</h2>

                <div className="px-4">
                    <Slider {...settings}>
                        {packages.map((pkg, index) => (
                            <div key={index} className="px-3 pb-8">
                                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
                                    <img src={pkg.img} alt={pkg.title} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-irctc-dark mb-2">{pkg.title}</h3>
                                        <p className="text-gray-500 text-sm mb-6 flex-grow">{pkg.desc}</p>
                                        <button className="border border-gray-300 text-irctc-dark font-medium py-2 px-4 rounded hover:bg-gray-50 self-start transition-colors">
                                            Know More &rarr;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default PackagesCarousel;
