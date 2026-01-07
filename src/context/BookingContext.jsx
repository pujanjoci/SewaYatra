import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { buses as initialBuses } from '../data/buses';
import { routes } from '../data/routes';
import { useAuth } from './AuthContext';
import {
    saveUserBooking,
    getUserBookings,
    getAllBookings,
    deleteUserBooking,
    getBookedSeatsForBus
} from '../utils/bookingStorage';

const BookingContext = createContext();

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within BookingProvider');
    }
    return context;
};

export const BookingProvider = ({ children }) => {
    const { user } = useAuth();
    const [buses, setBuses] = useState(initialBuses);
    const [bookings, setBookings] = useState([]);
    const [searchParams, setSearchParams] = useState({
        from: '',
        to: '',
        date: ''
    });

    // Load bookings based on user role
    useEffect(() => {
        if (user) {
            if (user.isAdmin) {
                // Admin sees all bookings
                setBookings(getAllBookings());
            } else {
                // Regular user sees only their bookings
                setBookings(getUserBookings(user.email));
            }
        } else {
            // No user logged in, no bookings
            setBookings([]);
        }
    }, [user]);

    const searchBuses = useCallback((from, to, date) => {
        setSearchParams({ from, to, date });

        const selectedRoute = routes.find(
            r => r.from.toLowerCase() === from.toLowerCase() &&
                r.to.toLowerCase() === to.toLowerCase()
        );

        if (!selectedRoute) return [];

        return buses.filter(bus => {
            const rules = bus.rules || {};

            // Apply business rules
            if (rules.allowedDestinations &&
                !rules.allowedDestinations.includes(selectedRoute.to)) {
                return false;
            }

            if (rules.allowedTypes &&
                !rules.allowedTypes.includes(selectedRoute.type)) {
                return false;
            }

            if (rules.allowedDirections &&
                !rules.allowedDirections.includes(selectedRoute.direction)) {
                return false;
            }

            return true;
        });
    }, [buses]);

    const getBusById = useCallback((id) => {
        return buses.find(bus => bus.id === parseInt(id));
    }, [buses]);

    const getBookedSeats = useCallback((busId, date = null) => {
        // Read directly from localStorage to get real-time data
        return getBookedSeatsForBus(busId, date);
    }, []);

    const addBooking = useCallback((bookingDetails) => {
        if (!user || !user.email) {
            throw new Error('User must be logged in to create a booking');
        }

        // Save to localStorage with user email
        const newBooking = saveUserBooking(user.email, bookingDetails);

        // Update local state
        setBookings(prev => [newBooking, ...prev]);

        return newBooking;
    }, [user]);

    const deleteBooking = useCallback((id) => {
        if (!user || !user.email) {
            return;
        }

        // Delete from localStorage
        deleteUserBooking(user.email, id);

        // Update local state
        setBookings(prev => prev.filter(booking => booking.id !== id));
    }, [user]);

    const addBus = useCallback((newBus) => {
        setBuses(prev => [...prev, {
            id: Date.now(),
            createdAt: new Date().toISOString(),
            ...newBus
        }]);
    }, []);

    const updateBus = useCallback((updatedBus) => {
        setBuses(prev => prev.map(
            bus => bus.id === updatedBus.id ? updatedBus : bus
        ));
    }, []);

    const deleteBus = useCallback((id) => {
        setBuses(prev => prev.filter(bus => bus.id !== id));
    }, []);

    // Method for admin to get all bookings
    const getAllBookingsForAdmin = useCallback(() => {
        return getAllBookings();
    }, []);

    const value = {
        buses,
        routes,
        bookings,
        searchParams,
        searchBuses,
        getBusById,
        getBookedSeats,
        addBooking,
        deleteBooking,
        addBus,
        updateBus,
        deleteBus,
        getAllBookingsForAdmin
    };

    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    );
};