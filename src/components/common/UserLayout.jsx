import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollToTopOnRouteChange from './ScrollToTopOnRouteChange';

const UserLayout = () => {
    const location = useLocation();

    // Hide footer on login pages
    const hideFooter = location.pathname === '/login' || location.pathname === '/admin/login';

    return (
        <div className="min-h-screen flex flex-col">
            <ScrollToTopOnRouteChange />
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            {!hideFooter && <Footer />}
            <ScrollToTop />
        </div>
    );
};

export default UserLayout;
