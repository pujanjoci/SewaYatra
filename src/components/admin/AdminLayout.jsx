import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import ScrollToTop from '../common/ScrollToTop';
import ScrollToTopOnRouteChange from '../common/ScrollToTopOnRouteChange';

const AdminLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <ScrollToTopOnRouteChange />
            <Sidebar />
            <TopBar />

            {/* Main Content Area - Responsive padding */}
            <main className="lg:pl-64 pt-16 min-h-screen">
                <div className="p-4 sm:p-6 lg:p-8">
                    <Outlet />
                </div>
            </main>
            <ScrollToTop />
        </div>
    );
};

export default AdminLayout;
