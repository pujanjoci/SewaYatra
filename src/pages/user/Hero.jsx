import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { useAuth } from '../../context/AuthContext';
import { Search, Calendar, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();
    const { routes, searchBuses } = useBooking();
    const { isAuthenticated } = useAuth();

    const [formData, setFormData] = useState({
        from: '',
        to: '',
        date: new Date().toISOString().split('T')[0]
    });
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
    const [activeInput, setActiveInput] = useState(null);
    const [gradientAngle, setGradientAngle] = useState(135);
    const heroRef = useRef(null);

    // Detect touch devices
    useEffect(() => {
        const checkTouchDevice = () => {
            return ('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0) ||
                (window.DocumentTouch && document instanceof DocumentTouch);
        };

        setIsTouchDevice(checkTouchDevice());
    }, []);

    // Animated gradient angle - slower animation for better performance
    useEffect(() => {
        const interval = setInterval(() => {
            setGradientAngle(prev => (prev + 0.1) % 360);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    // Parallax effect for desktop
    useEffect(() => {
        if (isTouchDevice || !heroRef.current) return;

        let rafId = null;
        let lastX = 0;
        let lastY = 0;

        const handleMouseMove = (e) => {
            if (!heroRef.current) return;

            const { left, top, width, height } = heroRef.current.getBoundingClientRect();
            const x = ((e.clientX - left) / width - 0.5) * 40;
            const y = ((e.clientY - top) / height - 0.5) * 40;

            // Use requestAnimationFrame for smooth performance
            if (rafId) {
                cancelAnimationFrame(rafId);
            }

            rafId = requestAnimationFrame(() => {
                // Add damping for smoother movement
                const dampedX = lastX + (x - lastX) * 0.3;
                const dampedY = lastY + (y - lastY) * 0.3;

                setParallaxOffset({ x: dampedX, y: dampedY });
                lastX = dampedX;
                lastY = dampedY;
            });
        };

        const handleMouseLeave = () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
            setParallaxOffset({ x: 0, y: 0 });
        };

        const element = heroRef.current;
        element.addEventListener('mousemove', handleMouseMove, { passive: true });
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        };
    }, [isTouchDevice]);

    // Locations data
    const locations = routes && Array.isArray(routes)
        ? [...new Set(routes.map(r => r.from).filter(Boolean))]
        : ['Kathmandu', 'Pokhara', 'Chitwan', 'Kakarvitta', 'Lumbini'];

    const popularRoutes = routes?.filter(route => route.isPopular).slice(0, 3) || [];

    // Form handlers with debouncing to prevent flickering
    const handleInputChange = useCallback((field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const { from, to, date } = formData;

        if (!from || !to || !date) {
            alert('Please fill in all fields');
            return;
        }

        if (!isAuthenticated) {
            sessionStorage.setItem('pendingSearch', JSON.stringify(formData));
            sessionStorage.setItem('loginRequired', 'true');
            navigate('/login', { replace: true });
            return;
        }

        if (searchBuses) {
            searchBuses(from, to, date);
        }

        navigate(`/buses?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}`);
    };

    const handlePopularRouteClick = useCallback((routeFrom, routeTo) => {
        setFormData({
            from: routeFrom,
            to: routeTo,
            date: new Date().toISOString().split('T')[0]
        });
    }, []);

    // Touch interaction for mobile with throttling
    const handleTouchInteraction = useCallback((e) => {
        if (!isTouchDevice || !heroRef.current) return;

        const touch = e.touches[0];
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = ((touch.clientX - left) / width - 0.5) * 20;
        const y = ((touch.clientY - top) / height - 0.5) * 20;

        setParallaxOffset({ x, y });
    }, [isTouchDevice]);

    // Fix: Separate background styles to avoid React warning
    const backgroundStyles = {
        backgroundImage: `linear-gradient(${gradientAngle}deg, 
            #065f46 0%, 
            #047857 25%, 
            #059669 50%, 
            #10b981 75%, 
            #34d399 100%)`,
        backgroundSize: '400% 400%',
        animation: 'gradientShift 20s ease infinite'
    };

    return (
        <div
            ref={heroRef}
            className="relative min-h-screen text-white overflow-hidden touch-manipulation"
            onTouchMove={isTouchDevice ? handleTouchInteraction : undefined}
            onTouchEnd={() => isTouchDevice && setParallaxOffset({ x: 0, y: 0 })}
            style={backgroundStyles}
        >
            {/* CSS Animation for gradient - moved to separate style tag */}
            <style>{`
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(5deg); }
                }
                
                /* Prevent tap highlight on mobile */
                * {
                    -webkit-tap-highlight-color: transparent;
                }
                
                /* Improve select dropdown on mobile */
                select {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }
                
                /* Prevent zoom on input focus on mobile */
                @media (max-width: 768px) {
                    input, select, textarea {
                        font-size: 16px !important;
                    }
                }
            `}</style>

            {/* Navbar Spacer */}
            <div className="h-4 md:h-2" />

            {/* Layered Gradient Overlays */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Primary gradient overlay with parallax */}
                <div
                    className="absolute inset-0 transition-transform duration-500 ease-out"
                    style={{
                        transform: `translate(${parallaxOffset.x * 0.2}px, ${parallaxOffset.y * 0.2}px)`,
                        background: `linear-gradient(135deg, 
                            rgba(6, 95, 70, 0.9) 0%,
                            rgba(4, 120, 87, 0.7) 33%,
                            rgba(5, 150, 105, 0.5) 66%,
                            rgba(52, 211, 153, 0.3) 100%)`
                    }}
                />

                {/* Animated gradient orbs - simplified for performance */}
                <div className="absolute inset-0">
                    {/* Large floating orb */}
                    <div
                        className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full transition-transform duration-700 ease-out"
                        style={{
                            transform: `translate(${parallaxOffset.x * 0.8}px, ${parallaxOffset.y * 0.8}px)`,
                            background: 'radial-gradient(circle at 30% 30%, rgba(52, 211, 153, 0.4) 0%, transparent 70%)',
                            filter: 'blur(40px)',
                            animation: 'float 15s ease-in-out infinite'
                        }}
                    />

                    {/* Secondary floating orb */}
                    <div
                        className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full transition-transform duration-500 ease-out"
                        style={{
                            transform: `translate(${-parallaxOffset.x * 0.6}px, ${-parallaxOffset.y * 0.6}px)`,
                            background: 'radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
                            filter: 'blur(30px)',
                            animation: 'float 20s ease-in-out infinite 2s'
                        }}
                    />
                </div>

                {/* Subtle noise texture */}
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
                <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center py-8 md:py-12 lg:py-0">
                    <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
                        {/* Left Content - Optimized for mobile */}
                        <div className="lg:w-1/2 text-center lg:text-left px-2 md:px-4 w-full">
                            <div className="space-y-4 md:space-y-6">
                                <div className="space-y-2 md:space-y-4">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                                        Journey Across{' '}
                                        <span className="bg-gradient-to-r from-emerald-200 to-green-300 bg-clip-text text-transparent">
                                            Nepal
                                        </span>
                                    </h1>
                                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium bg-gradient-to-r from-emerald-100 to-green-200 bg-clip-text text-transparent">
                                        with SewaYatra
                                    </p>
                                </div>

                                <p className="text-base sm:text-lg md:text-xl text-emerald-50/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                    Experience premium, reliable bus journeys across Nepal's breathtaking landscapes.
                                    Your adventure begins here.
                                </p>
                            </div>
                        </div>

                        {/* Right Content - Search Form */}
                        <div className="lg:w-1/2 w-full max-w-md lg:max-w-lg mx-auto">
                            <div
                                className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl"
                            >
                                <div className="mb-6 md:mb-8">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">Plan Your Journey</h2>
                                    <p className="text-emerald-100/80 text-sm md:text-base">Find the perfect bus for your trip</p>
                                </div>

                                <form onSubmit={handleSearch} className="space-y-4 md:space-y-6">
                                    {/* From Input - Fixed flickering issue */}
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-emerald-100 mb-2 ml-1">
                                            From
                                        </label>
                                        <div className="relative group">
                                            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-300 w-4 h-4 md:w-5 md:h-5 z-10 pointer-events-none" />
                                            <select
                                                className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 bg-white/10 border border-white/20 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all text-white font-medium cursor-pointer appearance-none hover:bg-white/15 relative z-10 text-sm md:text-base"
                                                value={formData.from}
                                                onChange={(e) => handleInputChange('from', e.target.value)}
                                                onFocus={() => setActiveInput('from')}
                                                onBlur={() => setActiveInput(null)}
                                                required
                                            >
                                                <option value="" className="bg-gray-900 text-gray-300">Select origin city</option>
                                                {locations.map((loc, index) => (
                                                    <option key={index} value={loc} className="bg-gray-900 text-white">{loc}</option>
                                                ))}
                                            </select>
                                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                <div className="w-2 h-2 border-r-2 border-b-2 border-white/60 transform rotate-45" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* To Input - Fixed flickering issue */}
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-emerald-100 mb-2 ml-1">
                                            To
                                        </label>
                                        <div className="relative group">
                                            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-300 w-4 h-4 md:w-5 md:h-5 z-10 pointer-events-none" />
                                            <select
                                                className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 bg-white/10 border border-white/20 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all text-white font-medium cursor-pointer appearance-none hover:bg-white/15 relative z-10 text-sm md:text-base"
                                                value={formData.to}
                                                onChange={(e) => handleInputChange('to', e.target.value)}
                                                onFocus={() => setActiveInput('to')}
                                                onBlur={() => setActiveInput(null)}
                                                required
                                            >
                                                <option value="" className="bg-gray-900 text-gray-300">Select destination city</option>
                                                {locations
                                                    .filter(l => l !== formData.from)
                                                    .map((loc, index) => (
                                                        <option key={index} value={loc} className="bg-gray-900 text-white">{loc}</option>
                                                    ))}
                                            </select>
                                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                <div className="w-2 h-2 border-r-2 border-b-2 border-white/60 transform rotate-45" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Date Input */}
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-emerald-100 mb-2 ml-1">
                                            Travel Date
                                        </label>
                                        <div className="relative group">
                                            <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-300 w-4 h-4 md:w-5 md:h-5 z-10 pointer-events-none" />
                                            <input
                                                type="date"
                                                className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 bg-white/10 border border-white/20 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all text-white font-medium cursor-pointer hover:bg-white/15 relative z-10 text-sm md:text-base"
                                                value={formData.date}
                                                min={new Date().toISOString().split('T')[0]}
                                                onChange={(e) => handleInputChange('date', e.target.value)}
                                                onFocus={() => setActiveInput('date')}
                                                onBlur={() => setActiveInput(null)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Search Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 md:py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2 md:gap-3 group text-sm md:text-base mt-2"
                                    >
                                        <Search className="w-4 h-4 md:w-5 md:h-5" />
                                        <span>Find a Bus</span>
                                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>

                                {/* Popular Destinations - Responsive */}
                                {popularRoutes.length > 0 && (
                                    <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/10">
                                        <p className="text-xs md:text-sm text-emerald-100/80 mb-2 md:mb-3">Popular routes:</p>
                                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                                            {popularRoutes.map((route, index) => (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    onClick={() => handlePopularRouteClick(route.from, route.to)}
                                                    className="px-2.5 py-1.5 md:px-3 md:py-2 bg-white/5 hover:bg-white/10 active:scale-95 text-emerald-100 text-xs md:text-sm font-medium rounded-lg transition-all duration-200 border border-white/10 backdrop-blur-sm flex items-center gap-1"
                                                >
                                                    <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                                    <span>{route.from} → {route.to}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;