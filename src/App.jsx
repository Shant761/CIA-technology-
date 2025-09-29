import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import MobileDetection from './components/layout/MobileDetection';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import SuppliersPage from './pages/SuppliersPage';
import AnalyticsPage from './pages/AnalyticsPage';
import OrdersPage from './pages/OrdersPage';
import SettingsPage from './pages/SettingsPage';

// Layout
import AppLayout from './components/layout/AppLayout';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <MobileDetection />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* Protected routes with layout */}
            <Route path="/app" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="suppliers" element={<SuppliersPage />} />
              <Route path="analytics" element={<AnalyticsPage />} />
              <Route path="orders" element={<OrdersPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;