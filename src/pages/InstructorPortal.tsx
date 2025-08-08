import React from 'react';

const InstructorPortal: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Instructor Portal</h1>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Welcome, Instructor</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold mb-3">Current Classes</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Workplace Safety 101</span>
                      <span className="text-sm text-gray-600">24 students</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Industrial Safety Mgmt</span>
                      <span className="text-sm text-gray-600">18 students</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Construction Safety</span>
                      <span className="text-sm text-gray-600">31 students</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-semibold mb-3">Recent Activity</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>Assignment graded: Safety Assessment #3</div>
                    <div>New student enrolled: John Smith</div>
                    <div>Class schedule updated: Monday 2PM</div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <button className="bg-primary-600 text-white p-4 rounded-lg hover:bg-primary-700 transition-colors">
                  Grade Assignments
                </button>
                <button className="bg-secondary-600 text-white p-4 rounded-lg hover:bg-secondary-700 transition-colors">
                  Manage Classes
                </button>
                <button className="border border-gray-300 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  View Reports
                </button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 border border-gray-200">
                  📚 Upload Course Materials
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 border border-gray-200">
                  📝 Create Assignment
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 border border-gray-200">
                  📊 View Analytics
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 border border-gray-200">
                  💬 Message Students
                </button>
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Upcoming Events</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <div className="font-medium">Faculty Meeting</div>
                  <div className="text-gray-600">Tomorrow, 10:00 AM</div>
                </div>
                <div>
                  <div className="font-medium">Safety Workshop</div>
                  <div className="text-gray-600">Friday, 2:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Instructor Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-600 text-xl">📖</span>
              </div>
              <h4 className="font-medium mb-2">Curriculum Library</h4>
              <p className="text-sm text-gray-600">Access standardized course materials and lesson plans</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-600 text-xl">🎯</span>
              </div>
              <h4 className="font-medium mb-2">Assessment Tools</h4>
              <p className="text-sm text-gray-600">Create and manage quizzes, tests, and evaluations</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-600 text-xl">📹</span>
              </div>
              <h4 className="font-medium mb-2">Video Content</h4>
              <p className="text-sm text-gray-600">Library of training videos and demonstrations</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-600 text-xl">🤝</span>
              </div>
              <h4 className="font-medium mb-2">Peer Network</h4>
              <p className="text-sm text-gray-600">Connect with other instructors and share best practices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorPortal;