import React from 'react';

const BusinessTools: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Business Tools</h1>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary-600 text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Safety Analytics Dashboard</h3>
            <p className="text-gray-600 mb-4">
              Track safety metrics, incident reports, and compliance status across your organization.
            </p>
            <button className="text-primary-600 font-medium hover:text-primary-700">
              Launch Tool →
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary-600 text-2xl">📋</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Compliance Checker</h3>
            <p className="text-gray-600 mb-4">
              Automated compliance verification against OSHA and industry standards.
            </p>
            <button className="text-primary-600 font-medium hover:text-primary-700">
              Launch Tool →
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary-600 text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Risk Assessment Tool</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive risk evaluation and mitigation planning system.
            </p>
            <button className="text-primary-600 font-medium hover:text-primary-700">
              Launch Tool →
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary-600 text-2xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Incident Reporter</h3>
            <p className="text-gray-600 mb-4">
              Streamlined incident reporting and investigation management.
            </p>
            <button className="text-primary-600 font-medium hover:text-primary-700">
              Launch Tool →
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary-600 text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Training Manager</h3>
            <p className="text-gray-600 mb-4">
              Organize, schedule, and track employee safety training programs.
            </p>
            <button className="text-primary-600 font-medium hover:text-primary-700">
              Launch Tool →
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary-600 text-2xl">📄</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Policy Generator</h3>
            <p className="text-gray-600 mb-4">
              Create and customize safety policies and procedures for your organization.
            </p>
            <button className="text-primary-600 font-medium hover:text-primary-700">
              Launch Tool →
            </button>
          </div>
        </div>

        <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Custom Tools?</h2>
          <p className="text-gray-700 mb-6">
            Our team can develop custom safety management tools tailored to your specific industry and requirements.
          </p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            Contact Us for Custom Solutions
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessTools;