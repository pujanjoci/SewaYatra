import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { isSessionValid, clearSession } from '../../utils/sessionManager';

const ProtectedRoute = () => {
    const { isAuthenticated, loading, logout } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>; // Or a proper Loader component
    }

    // Check if session is valid
    if (!isSessionValid()) {
        // Session expired - clear it and logout
        clearSession();
        if (logout) logout();

        return (
            <Navigate
                to="/admin/login"
                replace
                state={{ sessionExpired: true, intendedPath: location.pathname }}
            />
        );
    }

    // If not authenticated, redirect to login with state indicating this was a protected route access
    if (!isAuthenticated) {
        return (
            <Navigate
                to="/admin/login"
                replace
                state={{ fromProtectedRoute: true, intendedPath: location.pathname }}
            />
        );
    }

    return <Outlet />;
};

export default ProtectedRoute;
