import React from 'react';

const Admissions: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Admissions</h1>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Application Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">1</span>
              <div>
                <h3 className="font-semibold">Submit Application</h3>
                <p className="text-gray-600">Complete our online application form with your personal and educational information.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">2</span>
              <div>
                <h3 className="font-semibold">Document Review</h3>
                <p className="text-gray-600">Submit required documents including transcripts and identification.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">3</span>
              <div>
                <h3 className="font-semibold">Interview & Assessment</h3>
                <p className="text-gray-600">Participate in an interview and skills assessment if required.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">4</span>
              <div>
                <h3 className="font-semibold">Enrollment</h3>
                <p className="text-gray-600">Receive acceptance notification and complete enrollment process.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Requirements</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• High school diploma or equivalent</li>
              <li>• Valid government-issued ID</li>
              <li>• Completed application form</li>
              <li>• Application fee payment</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Important Dates</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Spring Enrollment: January 15</li>
              <li>• Summer Enrollment: May 15</li>
              <li>• Fall Enrollment: August 15</li>
              <li>• Winter Enrollment: November 15</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admissions;