// Custom hook for tracking user activity
// Updates session timestamp on mouse/keyboard interactions

import { useEffect } from 'react';
import { updateActivity, isSessionValid, clearSession } from '../utils/sessionManager';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

/**
 * Hook that tracks user activity and updates session timestamp
 * Also checks for session expiration periodically
 */
const useActivityTracker = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Only track if user is authenticated
        if (!isAuthenticated) return;

        // Throttle function to prevent excessive updates
        let lastUpdate = 0;
        const THROTTLE_DELAY = 60000; // Update at most once per minute

        const handleActivity = () => {
            const now = Date.now();
            if (now - lastUpdate > THROTTLE_DELAY) {
                updateActivity();
                lastUpdate = now;
            }
        };

        // Activity event listeners
        const events = ['mousedown', 'keydown', 'scroll', 'touchstart', 'click'];

        events.forEach(event => {
            window.addEventListener(event, handleActivity, { passive: true });
        });

        // Check session validity every minute
        const sessionCheckInterval = setInterval(() => {
            if (!isSessionValid()) {
                // Session expired - logout and redirect
                clearSession();
                logout();
                navigate('/admin/login', {
                    replace: true,
                    state: { sessionExpired: true }
                });
            }
        }, 60000); // Check every minute

        // Cleanup
        return () => {
            events.forEach(event => {
                window.removeEventListener(event, handleActivity);
            });
            clearInterval(sessionCheckInterval);
        };
    }, [isAuthenticated, logout, navigate]);
};

export default useActivityTracker;
