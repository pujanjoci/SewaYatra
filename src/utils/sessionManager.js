// Session Management Utility
// Handles session creation, validation, and activity tracking

const SESSION_KEY = 'app_session';
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds

/**
 * Creates a new session in sessionStorage
 * @param {Object} user - User object containing id, email, name, role, etc.
 * @returns {Object} Session object
 */
export const createSession = (user) => {
    const session = {
        isAuthenticated: true,
        userId: user.id,
        username: user.name || user.username,
        email: user.email,
        role: user.role,
        isAdmin: user.isAdmin || user.role === 'admin',
        lastActiveTimestamp: Date.now(),
        createdAt: Date.now()
    };

    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return session;
};

/**
 * Retrieves the current session from sessionStorage
 * @returns {Object|null} Session object or null if not found
 */
export const getSession = () => {
    try {
        const sessionData = sessionStorage.getItem(SESSION_KEY);
        if (!sessionData) return null;

        return JSON.parse(sessionData);
    } catch (error) {
        console.error('Error retrieving session:', error);
        return null;
    }
};

/**
 * Updates the lastActiveTimestamp in the session
 * Only updates if user is not an admin (admins don't have activity tracking)
 */
export const updateActivity = () => {
    const session = getSession();
    if (!session) return;

    // Only track activity for regular users, not admins
    if (!session.isAdmin) {
        session.lastActiveTimestamp = Date.now();
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    }
};

/**
 * Checks if the current session is still valid
 * @returns {boolean} True if session exists and hasn't expired
 */
export const isSessionValid = () => {
    const session = getSession();
    if (!session || !session.isAuthenticated) return false;

    // Admins don't have session timeout
    if (session.isAdmin) return true;

    // Check if session has expired (30 minutes of inactivity)
    const now = Date.now();
    const timeSinceLastActivity = now - session.lastActiveTimestamp;

    return timeSinceLastActivity < SESSION_TIMEOUT;
};

/**
 * Clears the session from sessionStorage
 * Does NOT touch localStorage
 */
export const clearSession = () => {
    sessionStorage.removeItem(SESSION_KEY);
};

/**
 * Gets the time remaining before session expires (in milliseconds)
 * @returns {number} Milliseconds until expiration, or Infinity for admins
 */
export const getTimeUntilExpiration = () => {
    const session = getSession();
    if (!session || !session.isAuthenticated) return 0;

    // Admins don't expire
    if (session.isAdmin) return Infinity;

    const now = Date.now();
    const timeSinceLastActivity = now - session.lastActiveTimestamp;
    const timeRemaining = SESSION_TIMEOUT - timeSinceLastActivity;

    return Math.max(0, timeRemaining);
};

/**
 * Checks if a session exists (regardless of validity)
 * @returns {boolean}
 */
export const hasSession = () => {
    return getSession() !== null;
};
