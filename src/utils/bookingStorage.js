/**
 * Booking Storage Utility
 * Manages user-specific bookings in localStorage
 * 
 * Storage Structure:
 * {
 *   "userBookings": {
 *     "user@email.com": [
 *       { id, busId, seatNumbers, totalAmount, date, ... }
 *     ]
 *   }
 * }
 */

const STORAGE_KEY = 'userBookings';

/**
 * Get all bookings from localStorage
 * @returns {Object} Object with user emails as keys and booking arrays as values
 */
const getAllBookingsData = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : {};
    } catch (error) {
        console.error('Error reading bookings from localStorage:', error);
        return {};
    }
};

/**
 * Save all bookings to localStorage
 * @param {Object} bookingsData - Object with user emails as keys
 */
const saveAllBookingsData = (bookingsData) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bookingsData));
    } catch (error) {
        console.error('Error saving bookings to localStorage:', error);
    }
};

/**
 * Save a booking for a specific user
 * @param {string} userEmail - User's email address
 * @param {Object} bookingData - Booking details
 * @returns {Object} The saved booking with generated ID
 */
export const saveUserBooking = (userEmail, bookingData) => {
    if (!userEmail) {
        throw new Error('User email is required to save booking');
    }

    // Get all bookings
    const allBookings = getAllBookingsData();

    // Initialize user's bookings array if it doesn't exist
    if (!allBookings[userEmail]) {
        allBookings[userEmail] = [];
    }

    // Create booking with ID and timestamp
    const newBooking = {
        id: `BK-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        createdAt: new Date().toISOString(),
        status: 'Confirmed',
        userEmail: userEmail,
        ...bookingData
    };

    // Add to user's bookings
    allBookings[userEmail].unshift(newBooking); // Add to beginning for recent-first order

    // Save back to localStorage
    saveAllBookingsData(allBookings);

    return newBooking;
};

/**
 * Get all bookings for a specific user
 * @param {string} userEmail - User's email address
 * @returns {Array} Array of user's bookings
 */
export const getUserBookings = (userEmail) => {
    if (!userEmail) {
        return [];
    }

    const allBookings = getAllBookingsData();
    return allBookings[userEmail] || [];
};

/**
 * Get all bookings across all users (for admin)
 * @returns {Array} Array of all bookings with user email included
 */
export const getAllBookings = () => {
    const allBookings = getAllBookingsData();
    const bookingsArray = [];

    // Flatten all user bookings into a single array
    Object.entries(allBookings).forEach(([email, userBookings]) => {
        userBookings.forEach(booking => {
            bookingsArray.push({
                ...booking,
                userEmail: email // Ensure email is included
            });
        });
    });

    // Sort by creation date (most recent first)
    return bookingsArray.sort((a, b) =>
        new Date(b.createdAt) - new Date(a.createdAt)
    );
};

/**
 * Delete a specific booking for a user
 * @param {string} userEmail - User's email address
 * @param {string} bookingId - Booking ID to delete
 * @returns {boolean} True if deleted successfully
 */
export const deleteUserBooking = (userEmail, bookingId) => {
    if (!userEmail || !bookingId) {
        return false;
    }

    const allBookings = getAllBookingsData();

    if (!allBookings[userEmail]) {
        return false;
    }

    // Filter out the booking to delete
    const updatedUserBookings = allBookings[userEmail].filter(
        booking => booking.id !== bookingId
    );

    // Update the user's bookings
    allBookings[userEmail] = updatedUserBookings;

    // Save back to localStorage
    saveAllBookingsData(allBookings);

    return true;
};

/**
 * Calculate total revenue from all bookings
 * @returns {number} Total revenue amount
 */
export const calculateTotalRevenue = () => {
    const allBookings = getAllBookings();

    return allBookings.reduce((total, booking) => {
        // Handle different possible field names for total amount
        const amount = booking.totalAmount || booking.totalPrice || 0;

        // Convert to number if it's a string
        const numAmount = typeof amount === 'string'
            ? parseInt(amount.replace(/,/g, ''))
            : amount;

        return total + (numAmount || 0);
    }, 0);
};

/**
 * Get recent bookings (for admin dashboard)
 * @param {number} limit - Number of bookings to return
 * @returns {Array} Array of recent bookings
 */
export const getRecentBookings = (limit = 10) => {
    const allBookings = getAllBookings();
    return allBookings.slice(0, limit);
};

/**
 * Get booked seats for a specific bus and date
 * @param {number} busId - Bus ID
 * @param {string} date - Date in YYYY-MM-DD format
 * @returns {Array} Array of booked seat numbers
 */
export const getBookedSeatsForBus = (busId, date = null) => {
    const allBookings = getAllBookings();

    let filteredBookings = allBookings.filter(
        booking => booking.busId === parseInt(busId)
    );

    // Filter by date if provided
    if (date) {
        filteredBookings = filteredBookings.filter(
            booking => booking.date === date
        );
    }

    // Extract and flatten all seat numbers
    return filteredBookings.flatMap(booking => booking.seatNumbers || []);
};

/**
 * Clear all bookings (use with caution - for testing only)
 */
export const clearAllBookings = () => {
    localStorage.removeItem(STORAGE_KEY);
};
