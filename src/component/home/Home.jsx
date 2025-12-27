import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-left space-y-8">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                                Download Now
                                <span className="block text-4xl md:text-5xl text-orange-600 mt-2">
                                    Lorem Ipsum
                                </span>
                            </h1>
                            <p className="mt-6 text-lg text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                                to="/download"
                            >
                                <svg
                                    fill="white"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    className="mr-3"
                                >
                                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                </svg>
                                Download Now
                            </Link>
                            
                            <Link
                                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300 border border-gray-300"
                                to="/learn-more"
                            >
                                Learn More →
                            </Link>
                        </div>

                        <div className="flex items-center space-x-6 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">100K+</div>
                                <div className="text-gray-600">Downloads</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">4.8★</div>
                                <div className="text-gray-600">Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">24/7</div>
                                <div className="text-gray-600">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <img 
                                className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="App Preview"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-orange-100 rounded-full opacity-50"></div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
                        Why Choose Our Product
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                                    <span className="text-2xl">{feature.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8">
                        Join thousands of satisfied users today
                    </p>
                    <Link
                        className="inline-flex items-center px-10 py-5 text-xl font-bold text-orange-600 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-2xl hover:shadow-3xl"
                        to="/get-started"
                    >
                        Get Started Free
                        <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const features = [
    {
        icon: "🚀",
        title: "Fast Performance",
        description: "Lightning fast loading times and smooth user experience"
    },
    {
        icon: "🛡️",
        title: "Secure & Safe",
        description: "Enterprise-grade security to protect your data"
    },
    {
        icon: "🔄",
        title: "Easy to Use",
        description: "Intuitive interface that anyone can master quickly"
    }
]