import React, { useState } from 'react';
import { FaCalendarAlt, FaBriefcase, FaUser, FaWheelchair, FaTrain, FaExchangeAlt } from 'react-icons/fa';

const BookingCard = () => {
    const [activeTab, setActiveTab] = useState('book');
    const [tripType, setTripType] = useState('oneWay');

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 max-w-5xl mx-auto -mt-24 relative z-20 mx-4 lg:mx-auto">
            {/* Tabs */}
            <div className="flex border-b mb-6">
                <button
                    onClick={() => setActiveTab('book')}
                    className={`pb-4 px-4 font-semibold text-sm sm:text-base border-b-2 transition-colors ${activeTab === 'book' ? 'border-irctc-blue text-irctc-blue' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-irctc-blue dark:hover:text-blue-400'}`}
                >
                    Book Ticket
                </button>
                <button
                    onClick={() => setActiveTab('pnr')}
                    className={`pb-4 px-4 font-semibold text-sm sm:text-base border-b-2 transition-colors ${activeTab === 'pnr' ? 'border-irctc-blue text-irctc-blue' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-irctc-blue dark:hover:text-blue-400'}`}
                >
                    PNR Status
                </button>
                <button
                    onClick={() => setActiveTab('charts')}
                    className={`pb-4 px-4 font-semibold text-sm sm:text-base border-b-2 transition-colors ${activeTab === 'charts' ? 'border-irctc-blue text-irctc-blue' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-irctc-blue dark:hover:text-blue-400'}`}
                >
                    Charts / Vacancy
                </button>
            </div>

            {/* Content */}
            {activeTab === 'book' && (
                <div className="space-y-6">
                    <div className="flex items-center space-x-6">
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="tripType"
                                className="form-radio text-irctc-blue focus:ring-irctc-blue"
                                checked={tripType === 'oneWay'}
                                onChange={() => setTripType('oneWay')}
                            />
                            <span className="ml-2 dark:text-gray-300 font-medium">One Way Trip</span>
                        </label>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="tripType"
                                className="form-radio text-irctc-blue focus:ring-irctc-blue"
                                checked={tripType === 'roundTrip'}
                                onChange={() => setTripType('roundTrip')}
                            />
                            <span className="ml-2 text-irctc-dark font-medium">Round Trip</span>
                        </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-center">
                        {/* From */}
                        <div className="lg:col-span-5">
                            <div className="border border-gray-300 dark:border-gray-600 rounded p-3 flex items-center hover:border-irctc-blue focus-within:border-irctc-blue focus-within:ring-1 focus-within:ring-irctc-blue transition-colors">
                                <FaTrain className="text-gray-400 mr-3" />
                                <div className="w-full">
                                    <label className="block text-xs text-gray-500 mb-0.5">From</label>
                                    <input type="text" placeholder="New Delhi" className="w-full outline-none text-irctc-dark dark:text-gray-200 font-medium placeholder-gray-400" />
                                </div>
                            </div>
                        </div>

                        {/* Swap Icon */}
                        <div className="lg:col-span-2 flex justify-center">
                            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-irctc-blue transition-colors">
                                <FaExchangeAlt />
                            </button>
                        </div>

                        {/* To */}
                        <div className="lg:col-span-5">
                            <div className="border border-gray-300 dark:border-gray-600 rounded p-3 flex items-center hover:border-irctc-blue focus-within:border-irctc-blue focus-within:ring-1 focus-within:ring-irctc-blue transition-colors">
                                <FaTrain className="text-gray-400 mr-3" />
                                <div className="w-full">
                                    <label className="block text-xs text-gray-500 mb-0.5">To</label>
                                    <input type="text" placeholder="Mumbai Central" className="w-full outline-none text-irctc-dark dark:text-gray-200 font-medium placeholder-gray-400" />
                                </div>
                            </div>
                        </div>

                        {/* Date */}
                        <div className="lg:col-span-4">
                            <div className="border border-gray-300 dark:border-gray-600 rounded p-3 flex items-center hover:border-irctc-blue focus-within:border-irctc-blue focus-within:ring-1 focus-within:ring-irctc-blue transition-colors">
                                <FaCalendarAlt className="text-gray-400 mr-3" />
                                <div className="w-full">
                                    <label className="block text-xs text-gray-500 mb-0.5">Date</label>
                                    <input type="date" className="w-full outline-none text-irctc-dark dark:text-gray-200 font-medium" />
                                </div>
                            </div>
                        </div>
                        {/* Class */}
                        <div className="lg:col-span-4">
                            <div className="border border-gray-300 dark:border-gray-600 rounded p-3 flex items-center hover:border-irctc-blue focus-within:border-irctc-blue focus-within:ring-1 focus-within:ring-irctc-blue transition-colors">
                                <FaBriefcase className="text-gray-400 mr-3" />
                                <div className="w-full">
                                    <label className="block text-xs text-gray-500 mb-0.5">Class</label>
                                    <select className="w-full outline-none text-irctc-dark dark:text-gray-200 font-medium bg-transparent">
                                        <option>All Classes</option>
                                        <option>AC First Class (1A)</option>
                                        <option>AC 2 Tier (2A)</option>
                                        <option>AC 3 Tier (3A)</option>
                                        <option>Sleeper (SL)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Quota */}
                        <div className="lg:col-span-4">
                            <div className="border border-gray-300 dark:border-gray-600 rounded p-3 flex items-center hover:border-irctc-blue focus-within:border-irctc-blue focus-within:ring-1 focus-within:ring-irctc-blue transition-colors">
                                <FaUser className="text-gray-400 mr-3" />
                                <div className="w-full">
                                    <label className="block text-xs text-gray-500 mb-0.5">Quota</label>
                                    <select className="w-full outline-none text-irctc-dark dark:text-gray-200 font-medium bg-transparent">
                                        <option>GENERAL</option>
                                        <option>LADIES</option>
                                        <option>LOWER BERTH / SR. CITIZEN</option>
                                        <option>PERSON WITH DISABILITY</option>
                                        <option>DUTY PASS</option>
                                        <option>TATKAL</option>
                                        <option>PREMIUM TATKAL</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-6">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox text-irctc-blue rounded focus:ring-irctc-blue" />
                                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Person with Disability Concession</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox text-irctc-blue rounded focus:ring-irctc-blue" />
                                <span className="ml-2 text-sm text-gray-600">Railway Pass Concession</span>
                            </label>
                        </div>

                        <div className="flex space-x-4 w-full md:w-auto">
                            <button className="flex-1 md:flex-none border border-irctc-blue text-irctc-blue font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors">
                                AskDISHA
                            </button>
                            <button className="flex-1 md:flex-none bg-irctc-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-irctc-royal transition-colors shadow-lg shadow-blue-900/20">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {activeTab !== 'book' && (
                <div className="py-10 text-center text-gray-500">
                    Feature coming soon.
                </div>
            )}
        </div>
    );
};

export default BookingCard;
