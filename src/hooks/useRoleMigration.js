// Custom hook to run user role migration on app initialization
import { useEffect } from 'react';
import { migrateUserRolesToStaff } from '../utils/userRoleMigration';

/**
 * Hook that runs user role migration from "user" to "staff"
 * Runs once on component mount
 */
const useRoleMigration = () => {
    useEffect(() => {
        // Run migration on mount
        const result = migrateUserRolesToStaff();

        if (result.updatedCount > 0) {
            console.log(`✅ User role migration completed: ${result.updatedCount} users updated to 'staff' role`);
        } else if (result.alreadyMigrated) {
            console.log('ℹ️ User role migration already completed');
        } else {
            console.log('ℹ️ No users to migrate');
        }
    }, []); // Empty dependency array ensures this runs only once
};

export default useRoleMigration;
