import React from 'react';
import { useBooking } from '../../context/BookingContext';
import { calculateTotalRevenue, getRecentBookings } from '../../utils/bookingStorage';
import { Bus, Map as MapIcon, Ticket, Wallet, Calendar, User } from 'lucide-react';

const AdminDashboard = () => {
    const { buses, routes, getAllBookingsForAdmin } = useBooking();

    // Get all bookings from localStorage
    const allBookings = getAllBookingsForAdmin();
    const recentBookings = getRecentBookings(5);

    // Calculate Stats from localStorage
    const totalRevenue = calculateTotalRevenue();
    const totalBuses = buses.length;
    const activeRoutes = routes.length;
    const totalBookings = allBookings.length;

    const stats = [
        {
            label: 'Total Revenue',
            value: `NPR ${totalRevenue.toLocaleString()}`,
            icon: Wallet,
            color: 'bg-emerald-500',
            trend: `${totalBookings} bookings`,
            trendUp: true
        },
        {
            label: 'Total Bookings',
            value: totalBookings,
            icon: Ticket,
            color: 'bg-blue-500',
            trend: `${recentBookings.length} recent`,
            trendUp: true
        },
        {
            label: 'Active Routes',
            value: activeRoutes,
            icon: MapIcon,
            color: 'bg-purple-500',
            trend: 'Available',
            trendUp: true
        },
        {
            label: 'Fleet Size',
            value: totalBuses,
            icon: Bus,
            color: 'bg-orange-500',
            trend: 'Active',
            trendUp: true
        }
    ];

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-gray-500">Welcome back, here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-start justify-between hover:shadow-md transition-shadow">
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                            <div className="flex items-center mt-2 text-xs">
                                <span className="text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-full">
                                    {stat.trend}
                                </span>
                            </div>
                        </div>
                        <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10`}>
                            <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-gray-900">Recent Bookings</h2>
                    <button
                        onClick={() => window.location.href = '/admin/bookings'}
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                        View All
                    </button>
                </div>

                {recentBookings.length === 0 ? (
                    <div className="p-6 text-center text-gray-500 py-12">
                        <p>No bookings yet.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bus</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {recentBookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm font-mono text-gray-500">#{booking.bookingId || booking.id.slice(0, 10)}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                                    <User className="w-4 h-4 text-blue-600" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">{booking.passengerName}</div>
                                                    <div className="text-xs text-gray-500">{booking.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{booking.busName}</div>
                                            <div className="text-xs text-gray-500">{booking.seatNumbers?.length} seat(s)</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {booking.date}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm font-semibold text-gray-900">NPR {booking.totalAmount?.toLocaleString()}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                {booking.status || 'Confirmed'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
