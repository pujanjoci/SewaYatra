import React from 'react';
import { Award, Users, Bus, Map, Heart, Shield, Clock, CreditCard, Smartphone, CheckCircle, Star, TrendingUp } from 'lucide-react';

const About = () => {
    const stats = [
        { label: "Happy Travelers", value: "50k+", icon: <Users className="w-6 h-6" /> },
        { label: "Buses Partnered", value: "200+", icon: <Bus className="w-6 h-6" /> },
        { label: "Routes Covered", value: "100+", icon: <Map className="w-6 h-6" /> },
        { label: "Years of Service", value: "5+", icon: <Award className="w-6 h-6" /> }
    ];

    const offerings = [
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Online Bus Ticket Booking",
            description: "Book your bus tickets anytime, anywhere with our easy-to-use platform. No more waiting in long queues."
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Real-time Availability",
            description: "Check live seat availability and choose your preferred seat with our interactive seat selection system."
        },
        {
            icon: <CreditCard className="w-8 h-8" />,
            title: "Secure Checkout",
            description: "Safe and secure payment processing with multiple payment options for your convenience."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "User & Admin Dashboards",
            description: "Comprehensive dashboards for both travelers and bus operators to manage bookings efficiently."
        }
    ];

    const benefits = [
        {
            icon: <CheckCircle className="w-8 h-8" />,
            title: "Easy Booking Process",
            description: "Simple 3-step booking: Search, Select, and Pay. Get your ticket in minutes."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Trusted Operators",
            description: "We partner only with verified and licensed bus operators who meet our safety standards."
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Transparent Pricing",
            description: "No hidden charges. What you see is what you pay. Clear pricing for every route."
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Local-First Focus",
            description: "Built specifically for Nepal's transportation needs, connecting every corner of the country."
        }
    ];

    const values = [
        {
            icon: <Heart className="w-10 h-10 text-emerald-600" />,
            title: "Customer First",
            description: "We prioritize your comfort and satisfaction above all else, ensuring a delightful travel experience."
        },
        {
            icon: <Shield className="w-10 h-10 text-emerald-600" />,
            title: "Safety & Trust",
            description: "We only partner with verified operators who strictly adhere to safety and maintenance protocols."
        },
        {
            icon: <Award className="w-10 h-10 text-emerald-600" />,
            title: "Excellence",
            description: "We continuously improve our platform and services to provide the best ticketing solution in Nepal."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-gray-50 py-16 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Redefining Bus Travel in Nepal</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        SewaYatra is more than just a ticketing platform. We are a team of dreamers and doers dedicated to making your journey as beautiful as the destination.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="container mx-auto px-4 -mt-10 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-4">
                            <div className="flex justify-center mb-3 text-emerald-600 bg-emerald-50 w-12 h-12 rounded-full items-center mx-auto">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* About the Platform Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About the Platform</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        SewaYatra is Nepal's premier online bus ticketing platform, designed to make travel booking simple, reliable, and convenient.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 md:p-12 border border-emerald-100">
                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                        <p>
                            <strong className="text-emerald-700">Our Mission:</strong> To revolutionize bus travel in Nepal by providing a seamless, transparent, and user-friendly booking experience that connects travelers with trusted bus operators across the country.
                        </p>
                        <p>
                            <strong className="text-emerald-700">Our Vision:</strong> To become the most trusted and preferred bus ticketing platform in Nepal, ensuring every journey is safe, comfortable, and hassle-free.
                        </p>
                        <p>
                            We focus on three core pillars: <strong>Reliability</strong> - partnering with verified operators; <strong>Convenience</strong> - making booking effortless; and <strong>Safety</strong> - ensuring every trip meets the highest standards.
                        </p>
                    </div>
                </div>
            </div>

            {/* What We Offer Section */}
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive features designed to make your bus travel experience smooth and enjoyable.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {offerings.map((offer, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition-all group">
                                <div className="flex justify-center mb-6">
                                    <div className="bg-emerald-50 p-4 rounded-full text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        {offer.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{offer.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-center">{offer.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We go the extra mile to ensure your travel experience is exceptional.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-xl shadow-sm border border-emerald-100 hover:shadow-lg transition-all">
                            <div className="flex justify-center mb-6">
                                <div className="bg-white p-4 rounded-full text-emerald-600 shadow-md">
                                    {benefit.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-center">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Story & Mission */}
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 md:order-1">
                            <div className="absolute -top-4 -left-4 w-full h-full bg-emerald-100 rounded-2xl transform rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop"
                                alt="Bus Travel in Nepal"
                                className="relative rounded-2xl shadow-lg w-full h-auto object-cover z-10"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
                            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                <p>
                                    Founded in 2024, SewaYatra started with a simple idea: why should booking a bus ticket be complicated? We saw travelers queuing for hours, facing uncertainty about seats, and lacking clear information.
                                </p>
                                <p>
                                    We decided to change that. By combining technology with a deep understanding of Nepal's transportation landscape, we built a platform that puts the traveler first.
                                </p>
                                <p>
                                    Today, we serve thousands of passengers daily, connecting remote villages to bustling cities, ensuring that no matter where you need to go, we can get you there safely and comfortably.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide every decision we make.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((val, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition-all text-center">
                            <div className="flex justify-center mb-6">
                                <div className="bg-emerald-50 p-4 rounded-full">
                                    {val.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{val.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{val.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
