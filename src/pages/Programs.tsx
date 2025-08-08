import React from 'react';

const Programs: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Programs</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-primary-700">Workplace Safety Fundamentals</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive introduction to workplace safety principles and practices.
            </p>
            <ul className="text-sm text-gray-600 mb-6">
              <li>• OSHA Standards</li>
              <li>• Hazard Recognition</li>
              <li>• Emergency Procedures</li>
              <li>• Safety Documentation</li>
            </ul>
            <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Learn More
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-primary-700">Industrial Safety Management</h3>
            <p className="text-gray-600 mb-4">
              Advanced safety management for industrial environments.
            </p>
            <ul className="text-sm text-gray-600 mb-6">
              <li>• Risk Assessment</li>
              <li>• Safety Auditing</li>
              <li>• Incident Investigation</li>
              <li>• Safety Leadership</li>
            </ul>
            <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Learn More
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-primary-700">Construction Safety</h3>
            <p className="text-gray-600 mb-4">
              Specialized safety training for construction industry professionals.
            </p>
            <ul className="text-sm text-gray-600 mb-6">
              <li>• Fall Protection</li>
              <li>• Equipment Safety</li>
              <li>• Site Management</li>
              <li>• OSHA 30-Hour Training</li>
            </ul>
            <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;