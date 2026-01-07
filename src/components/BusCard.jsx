import React from 'react';
import { MapPin, Clock, Armchair, Users, Wifi, Snowflake, Zap, Navigation, Star, Bus, Tag, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusCard = ({ bus, showRouteInfo = false, routeFrom = null, routeTo = null }) => {
    // Helper function to render amenities icons
    const renderAmenityIcon = (amenity, key) => {
        const amenityLower = amenity.toLowerCase();
        const icons = {
            wifi: <Wifi className="w-4 h-4" />,
            ac: <Snowflake className="w-4 h-4" />,
            charging: <Zap className="w-4 h-4" />,
            toilet: <Users className="w-4 h-4" />,
            'water bottle': <Zap className="w-4 h-4" />,
            blanket: <Users className="w-4 h-4" />,
            'dinner stop': <Users className="w-4 h-4" />
        };

        return (
            <div key={key} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg" title={amenity}>
                {icons[amenityLower] || <Zap className="w-4 h-4" />}
                <span className="text-sm text-gray-700">{amenity}</span>
            </div>
        );
    };

    // Determine bus type class
    const getBusTypeClass = (type) => {
        if (type?.toLowerCase().includes('luxury') || type?.toLowerCase().includes('deluxe')) {
            return 'bg-gradient-to-r from-amber-500 to-amber-600 text-white';
        }
        if (type?.toLowerCase().includes('vip') || type?.toLowerCase().includes('sleeper')) {
            return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
        }
        if (type?.toLowerCase().includes('semi')) {
            return 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white';
        }
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
    };

    // Format price range
    const formatPriceRange = () => {
        if (bus.minPrice && bus.maxPrice) {
            return (
                <div className="flex flex-col">
                    <div className="text-2xl font-bold text-green-600">
                        NPR {bus.minPrice} - {bus.maxPrice}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                        Price varies by route and season
                    </div>
                </div>
            );
        } else if (bus.basePrice) {
            return (
                <div className="flex flex-col">
                    <div className="text-2xl font-bold text-green-600">
                        Starting at NPR {bus.basePrice}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                        Contact for specific route pricing
                    </div>
                </div>
            );
        } else if (bus.price) {
            return (
                <div className="text-2xl font-bold text-green-600">
                    NPR {bus.price}
                </div>
            );
        }
        return (
            <div className="text-lg font-medium text-gray-600">
                Price on request
            </div>
        );
    };

    return (
        <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-emerald-300 overflow-hidden">
            {/* Card Content Wrapper */}
            <div className="p-6">
                {/* Header with Bus Info */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-5">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
                                <Bus className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">{bus.name}</h3>
                                {bus.description && (
                                    <p className="text-sm text-gray-500 mt-1 max-w-md line-clamp-2">{bus.description}</p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-gray-600 text-sm">
                            <span className="font-medium">{bus.company}</span>
                            <span className="text-gray-400">•</span>
                            <span className="bg-gray-100 px-2.5 py-1 rounded-md font-medium text-xs">{bus.busNumber}</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-2.5">
                        {/* Bus Type Badge */}
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm ${getBusTypeClass(bus.type)}`}>
                            {bus.type}
                        </span>

                        {/* Rating */}
                        {bus.rating && (
                            <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-lg">
                                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                <span className="text-sm font-bold text-gray-900">{bus.rating}</span>
                                <span className="text-xs text-gray-500">/5</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Route Information - Only shown when showRouteInfo is true */}
                {showRouteInfo && routeFrom && routeTo && (
                    <div className="mb-5 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-100">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-emerald-600" />
                                <span className="font-semibold text-gray-800">{routeFrom}</span>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400" />
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-green-600" />
                                <span className="font-semibold text-gray-800">{routeTo}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>Departure: {bus.departureTime || 'Flexible'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>Arrival: {bus.arrivalTime || 'Flexible'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>Duration: {bus.duration || 'Varies'}</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Amenities Section */}
                {bus.amenities && bus.amenities.length > 0 && (
                    <div className="mb-5">
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-sm font-semibold text-gray-700">Amenities</h4>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                {bus.amenities.length} available
                            </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {bus.amenities.slice(0, 6).map((amenity, index) => (
                                <div key={index} className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-lg hover:bg-emerald-50 hover:border-emerald-200 border border-transparent transition-all">
                                    {renderAmenityIcon(amenity, index)}
                                </div>
                            ))}
                        </div>
                        {bus.amenities.length > 6 && (
                            <p className="text-xs text-gray-500 mt-2 text-center">
                                +{bus.amenities.length - 6} more amenities
                            </p>
                        )}
                    </div>
                )}

                {/* Seats and Price Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-gray-200">
                    <div className="flex flex-wrap items-center gap-6">
                        {/* Seats Info */}
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-50 rounded-lg">
                                <Armchair className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 font-medium">Available Seats</div>
                                <div className="text-lg font-bold text-gray-900">
                                    {bus.seatsAvailable || bus.totalSeats || 40} / {bus.totalSeats || 40}
                                </div>
                            </div>
                        </div>

                        {/* Price Info */}
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-50 rounded-lg">
                                <Tag className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 font-medium">Price Range</div>
                                <div className="text-lg font-bold text-green-600">
                                    NPR {bus.minPrice} - {bus.maxPrice}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <Link
                        to={`/book/${bus.id}`}
                        className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group"
                    >
                        <span>Select Seats</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Service Areas if not showing specific route */}
                {!showRouteInfo && bus.serviceAreas && (
                    <div className="mt-5 pt-5 border-t border-gray-100">
                        <div className="text-xs font-medium text-gray-500 mb-2">Service Areas:</div>
                        <div className="flex flex-wrap gap-2">
                            {bus.serviceAreas[0] === "all" ? (
                                <span className="px-3 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                                    All Major Routes
                                </span>
                            ) : (
                                bus.serviceAreas.slice(0, 3).map((area, index) => (
                                    <span key={index} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors">
                                        {area}
                                    </span>
                                ))
                            )}
                            {bus.serviceAreas.length > 3 && bus.serviceAreas[0] !== "all" && (
                                <span className="px-3 py-1.5 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                                    +{bus.serviceAreas.length - 3} more
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BusCard;