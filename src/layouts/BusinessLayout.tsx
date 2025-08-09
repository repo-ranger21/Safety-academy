import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const BusinessLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Business Navigation */}
      <nav className="bg-primary-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-white">
                ASPT Safety Academy - Business
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/business-tools" className="text-gray-200 hover:text-white transition-colors">
                Business Tools
              </Link>
              <Link to="/business-growth" className="text-gray-200 hover:text-white transition-colors">
                Growth Landing
              </Link>
              <Link to="/instructor-portal" className="text-gray-200 hover:text-white transition-colors">
                Instructor Portal
              </Link>
              <Link to="/assessment-system" className="text-gray-200 hover:text-white transition-colors">
                Assessment System
              </Link>
              <Link to="/alumni-network" className="text-gray-200 hover:text-white transition-colors">
                Alumni Network
              </Link>
              <Link to="/corporate-training" className="text-gray-200 hover:text-white transition-colors">
                Corporate Training
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 ASPT Safety Academy Business Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BusinessLayout;