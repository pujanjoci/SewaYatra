import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { BookingProvider } from './context/BookingContext';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import useRoleMigration from './hooks/useRoleMigration';

function App() {
  // Run user role migration from "user" to "staff" on app initialization
  useRoleMigration();

  return (
    <ToastProvider>
      <AuthProvider>
        <BookingProvider>
          <AppRoutes />
        </BookingProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;