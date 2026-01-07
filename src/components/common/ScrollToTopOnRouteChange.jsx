import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTopOnRouteChange
 * Automatically scrolls to top when route changes
 */
const ScrollToTopOnRouteChange = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant' // Use instant for route changes to avoid jarring transitions
        });
    }, [pathname]);

    return null;
};

export default ScrollToTopOnRouteChange;
