import React from 'react';

const AlumniNetwork: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Alumni Network</h1>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Network Overview</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">2,500+</div>
                  <div className="text-gray-600">Active Alumni</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
                  <div className="text-gray-600">Companies Represented</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">45</div>
                  <div className="text-gray-600">Countries Worldwide</div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-4">Featured Alumni</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border flex items-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-bold text-lg">JS</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Jessica Smith</h4>
                    <p className="text-gray-600">Senior Safety Manager at TechCorp Industries</p>
                    <p className="text-sm text-gray-500">Class of 2019 • Workplace Safety Fundamentals</p>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700">Connect</button>
                </div>
                
                <div className="bg-white p-6 rounded-lg border flex items-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-bold text-lg">MR</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Michael Rodriguez</h4>
                    <p className="text-gray-600">EHS Director at Global Manufacturing Co.</p>
                    <p className="text-sm text-gray-500">Class of 2020 • Industrial Safety Management</p>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700">Connect</button>
                </div>
                
                <div className="bg-white p-6 rounded-lg border flex items-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-bold text-lg">AC</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Amanda Chen</h4>
                    <p className="text-gray-600">Safety Consultant & Company Founder</p>
                    <p className="text-sm text-gray-500">Class of 2018 • Construction Safety</p>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700">Connect</button>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Alumni Events</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold">Annual Safety Innovation Conference</h4>
                  <p className="text-gray-600">March 15, 2024 • Virtual Event</p>
                  <p className="text-sm text-gray-500">Keynote speakers from industry leaders</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold">Regional Networking Mixer</h4>
                  <p className="text-gray-600">April 8, 2024 • Chicago, IL</p>
                  <p className="text-sm text-gray-500">Connect with local alumni and industry professionals</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold">Career Development Workshop</h4>
                  <p className="text-gray-600">May 12, 2024 • Online</p>
                  <p className="text-sm text-gray-500">Leadership skills for safety professionals</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Network Benefits</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">🤝</span>
                  Professional networking opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">💼</span>
                  Exclusive job board access
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">📚</span>
                  Continuing education discounts
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">🎯</span>
                  Mentorship programs
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">📰</span>
                  Industry news and updates
                </li>
              </ul>
            </div>
            
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Join the Network</h3>
              <p className="text-sm text-gray-700 mb-4">
                Connect with fellow graduates and expand your professional network in the safety industry.
              </p>
              <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Create Profile
              </button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Industry Insights</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium">Recent Discussion Topics</h4>
                  <ul className="text-gray-600 mt-2 space-y-1">
                    <li>• New OSHA Regulations 2024</li>
                    <li>• Safety Technology Trends</li>
                    <li>• Remote Work Safety Protocols</li>
                    <li>• Mental Health in Safety</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniNetwork;