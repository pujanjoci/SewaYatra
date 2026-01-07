import React, { useState, useEffect } from 'react';
import AdminTable from '../../components/admin/ui/AdminTable';
import StatusBadge from '../../components/admin/ui/StatusBadge';
import { Trash2, Users } from 'lucide-react';
import { getNonAdminUsers, formatUserForDisplay, deleteUser } from '../../utils/userRoleMigration';
import { useToast } from '../../context/ToastContext';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { success, error } = useToast();

    // Fetch non-admin users from localStorage
    const fetchUsers = () => {
        try {
            // Get only non-admin users from localStorage
            const registeredUsers = getNonAdminUsers();

            // Format users for display
            const formattedUsers = registeredUsers.map(formatUserForDisplay);

            setUsers(formattedUsers);
        } catch (err) {
            console.error('Error fetching users:', err);
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };

    // Fetch users on component mount
    useEffect(() => {
        fetchUsers();

        // Optional: Listen for storage changes to update table in real-time
        const handleStorageChange = (e) => {
            if (e.key === 'registeredUsers') {
                fetchUsers();
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    // Handle user deletion with confirmation
    const handleDeleteUser = (userId, userName) => {
        // Show confirmation dialog
        const confirmed = window.confirm(
            `Are you sure you want to delete user "${userName}"?\n\nThis action cannot be undone.`
        );

        if (!confirmed) {
            return;
        }

        // Delete user from localStorage
        const result = deleteUser(userId);

        if (result.success) {
            success('User deleted successfully');
            // Refresh the user list
            fetchUsers();
        } else {
            error(result.message || 'Failed to delete user');
        }
    };

    const columns = [
        {
            header: 'Name',
            accessor: 'name',
            render: (user) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                        {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <div className="font-medium text-gray-900">{user.name}</div>
                    </div>
                </div>
            )
        },
        {
            header: 'Email',
            accessor: 'email',
            render: (user) => (
                <span className="text-sm text-gray-600">{user.email}</span>
            )
        },
        {
            header: 'Status',
            accessor: 'status',
            render: (user) => <StatusBadge status={user.status} />
        },
        {
            header: 'Actions',
            render: (user) => (
                <button
                    onClick={() => handleDeleteUser(user.id, user.name)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
                    title="Delete user"
                >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                </button>
            )
        }
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Manage registered users and their accounts.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="text-sm text-gray-600">
                        Total Users: <span className="font-semibold text-blue-600">{users.length}</span>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="flex items-center justify-center h-64">
                    <div className="text-gray-500">Loading users...</div>
                </div>
            ) : users.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                    <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Users Yet</h3>
                    <p className="text-gray-500 text-sm">
                        Users will appear here once they register on the platform.
                    </p>
                </div>
            ) : (
                <AdminTable
                    columns={columns}
                    data={users}
                    searchPlaceholder="Search users..."
                />
            )}
        </div>
    );
};

export default ManageUsers;
