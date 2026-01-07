// User Role Migration Utility
// Safely migrates user roles from "user" to "staff" in localStorage

const REGISTERED_USERS_KEY = 'registeredUsers';
const MIGRATION_FLAG_KEY = 'userRoleMigrated';

/**
 * Fetches registered users from localStorage
 * @returns {Array} Array of user objects, or empty array if not found
 */
export const getRegisteredUsers = () => {
    try {
        const users = localStorage.getItem(REGISTERED_USERS_KEY);
        return users ? JSON.parse(users) : [];
    } catch (error) {
        console.error('Error reading registered users from localStorage:', error);
        return [];
    }
};

/**
 * Saves registered users to localStorage
 * @param {Array} users - Array of user objects to save
 */
export const saveRegisteredUsers = (users) => {
    try {
        localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
    } catch (error) {
        console.error('Error saving registered users to localStorage:', error);
    }
};

/**
 * Migrates user roles from "user" to "staff"
 * This function runs once and updates all users with role "user" to role "staff"
 * Preserves all other user data
 * @returns {Object} Migration result with count of updated users
 */
export const migrateUserRolesToStaff = () => {
    // Check if migration has already been performed
    const migrationCompleted = localStorage.getItem(MIGRATION_FLAG_KEY);
    if (migrationCompleted === 'true') {
        return { alreadyMigrated: true, updatedCount: 0 };
    }

    // Fetch users from localStorage
    const users = getRegisteredUsers();

    if (users.length === 0) {
        // No users to migrate, mark as completed
        localStorage.setItem(MIGRATION_FLAG_KEY, 'true');
        return { alreadyMigrated: false, updatedCount: 0 };
    }

    // Update role from "user" to "staff"
    let updatedCount = 0;
    const updatedUsers = users.map(user => {
        if (user.role === 'user') {
            updatedCount++;
            return {
                ...user,
                role: 'staff' // Update role to staff
            };
        }
        return user; // Keep other users unchanged
    });

    // Save updated users back to localStorage
    saveRegisteredUsers(updatedUsers);

    // Mark migration as completed
    localStorage.setItem(MIGRATION_FLAG_KEY, 'true');

    return { alreadyMigrated: false, updatedCount };
};

/**
 * Gets all staff users (users with role "staff")
 * @returns {Array} Array of staff user objects
 */
export const getStaffUsers = () => {
    const users = getRegisteredUsers();
    return users.filter(user => user.role === 'staff');
};

/**
 * Gets all non-admin users (excludes admin users)
 * @returns {Array} Array of non-admin user objects
 */
export const getNonAdminUsers = () => {
    const users = getRegisteredUsers();
    return users.filter(user => user.role !== 'admin');
};

/**
 * Deletes a user from localStorage by user ID
 * Does NOT delete admin users for safety
 * @param {string} userId - ID of the user to delete
 * @returns {Object} Result object with success status and message
 */
export const deleteUser = (userId) => {
    try {
        // Fetch current users from localStorage
        const users = getRegisteredUsers();

        // Find the user to delete
        const userToDelete = users.find(user => user.id === userId);

        // Safety check: prevent deletion of admin users
        if (userToDelete && userToDelete.role === 'admin') {
            return {
                success: false,
                message: 'Cannot delete admin users'
            };
        }

        // Filter out the user to delete
        const updatedUsers = users.filter(user => user.id !== userId);

        // Check if user was actually removed
        if (users.length === updatedUsers.length) {
            return {
                success: false,
                message: 'User not found'
            };
        }

        // Save updated users back to localStorage
        saveRegisteredUsers(updatedUsers);

        return {
            success: true,
            message: 'User deleted successfully'
        };
    } catch (error) {
        console.error('Error deleting user:', error);
        return {
            success: false,
            message: 'Failed to delete user'
        };
    }
};

/**
 * Gets all users with their roles
 * @returns {Array} Array of all user objects
 */
export const getAllUsers = () => {
    return getRegisteredUsers();
};

/**
 * Formats user data for display in admin table
 * @param {Object} user - User object
 * @returns {Object} Formatted user object
 */
export const formatUserForDisplay = (user) => {
    return {
        id: user.id,
        name: user.name || 'N/A',
        email: user.email || 'N/A',
        role: user.role === 'staff' ? 'Staff' : user.role === 'admin' ? 'Admin' : user.role,
        status: user.status || 'Active',
        joinDate: user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'
    };
};
