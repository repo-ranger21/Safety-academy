import React from 'react';

const AssessmentSystem: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Assessment System</h1>
        
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Assessment Dashboard</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">42</div>
                  <div className="text-gray-600">Active Assessments</div>
                </div>
                <div className="bg-white p-6 rounded-lg border text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">156</div>
                  <div className="text-gray-600">Completed This Month</div>
                </div>
                <div className="bg-white p-6 rounded-lg border text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">87%</div>
                  <div className="text-gray-600">Average Pass Rate</div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-4">Recent Assessments</h3>
              <div className="bg-white rounded-lg border overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Student</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Assessment</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Score</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm">John Smith</td>
                      <td className="px-6 py-4 text-sm">Safety Fundamentals Quiz</td>
                      <td className="px-6 py-4 text-sm">92%</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Passed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm">Sarah Johnson</td>
                      <td className="px-6 py-4 text-sm">Industrial Safety Exam</td>
                      <td className="px-6 py-4 text-sm">85%</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Passed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm">Mike Rodriguez</td>
                      <td className="px-6 py-4 text-sm">Construction Safety Test</td>
                      <td className="px-6 py-4 text-sm">67%</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Failed</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Assessment Types</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Multiple Choice Quizzes</span>
                    <span className="text-primary-600 font-medium">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Practical Evaluations</span>
                    <span className="text-primary-600 font-medium">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Case Study Analysis</span>
                    <span className="text-primary-600 font-medium">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Final Examinations</span>
                    <span className="text-primary-600 font-medium">6</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Performance Analytics</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Overall Pass Rate</span>
                      <span className="text-sm">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '87%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Average Score</span>
                      <span className="text-sm">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Completion Rate</span>
                      <span className="text-sm">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{width: '94%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-primary-600 text-white p-3 rounded-lg hover:bg-primary-700 transition-colors">
                  Create Assessment
                </button>
                <button className="w-full border border-gray-300 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Grade Submissions
                </button>
                <button className="w-full border border-gray-300 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  View Reports
                </button>
                <button className="w-full border border-gray-300 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Export Results
                </button>
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Assessment Features</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                  Automated Grading
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                  Real-time Analytics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                  Customizable Templates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                  Anti-cheating Measures
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                  Mobile Compatibility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentSystem;