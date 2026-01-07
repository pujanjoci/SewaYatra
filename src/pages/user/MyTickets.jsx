import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { useAuth } from '../../context/AuthContext';
import { Clock, MapPin, Calendar, Ticket } from 'lucide-react';

const MyTickets = () => {
    const navigate = useNavigate();
    const { bookings, getBusById, deleteBooking } = useBooking();
    const { user, isAuthenticated } = useAuth();

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login', { state: { from: '/my-tickets' } });
        }
    }, [isAuthenticated, navigate]);

    const handleCancelBooking = (bookingId) => {
        if (window.confirm("Are you sure you want to cancel this booking?")) {
            deleteBooking(bookingId);
        }
    };

    // Don't render if not authenticated
    if (!isAuthenticated || !user) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">My Tickets</h2>

                {bookings.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-xl shadow-sm">
                        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Ticket className="w-10 h-10 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">No Bookings Yet</h3>
                        <p className="text-gray-500 mb-6">You haven't made any bus bookings yet.</p>
                        <button
                            onClick={() => navigate('/buses')}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                        >
                            Book Your First Ticket
                        </button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {bookings.map(booking => {
                            const bus = getBusById(booking.busId);
                            return (
                                <div key={booking.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                                    <div className="grid grid-cols-1 md:grid-cols-4">
                                        <div className="md:col-span-3 p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-800">{booking.busName || bus?.name}</h3>
                                                    <p className="text-sm text-gray-500 font-medium">Booking ID: {booking.bookingId || booking.id}</p>
                                                </div>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                                    {booking.status}
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                                                <div className="flex items-center text-gray-600">
                                                    <MapPin className="w-4 h-4 mr-2" />
                                                    <span>{bus?.route || 'N/A'}</span>
                                                </div>
                                                <div className="flex items-center text-gray-600">
                                                    <Calendar className="w-4 h-4 mr-2" />
                                                    <span>{booking.date}</span>
                                                </div>
                                                <div className="flex items-center text-gray-600">
                                                    <Clock className="w-4 h-4 mr-2" />
                                                    <span>{booking.departureTime || bus?.departureTime || 'N/A'}</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-2 mb-2">
                                                <span className="text-sm font-semibold text-gray-500 mr-2">Seats:</span>
                                                {booking.seatNumbers.map(s => (
                                                    <span key={s} className="bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded text-sm font-medium">#{s}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 p-6 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-gray-100">
                                            <p className="text-sm text-gray-500 mb-1">Total Paid</p>
                                            <p className="text-2xl font-bold text-blue-600 mb-4">NPR {booking.totalAmount}</p>
                                            <button
                                                onClick={() => handleCancelBooking(booking.id)}
                                                className="text-red-500 hover:text-red-700 text-sm font-semibold underline"
                                            >
                                                Cancel Booking
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyTickets;
