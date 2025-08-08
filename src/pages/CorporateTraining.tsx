import React from 'react';

const CorporateTraining: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Corporate Training Solutions</h1>
        
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Transform Your Workplace Safety Culture</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Comprehensive safety training programs designed specifically for your organization's needs
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Custom Quote
            </button>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Training Programs</h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">On-Site Safety Training</h3>
                <p className="text-gray-600 mb-4">
                  Customized training delivered at your facility with hands-on practical exercises.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tailored to your specific industry</li>
                  <li>• Hands-on practical sessions</li>
                  <li>• Immediate application to your workplace</li>
                  <li>• Flexible scheduling options</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Virtual Safety Workshops</h3>
                <p className="text-gray-600 mb-4">
                  Interactive online training sessions for distributed teams and remote workers.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Live interactive sessions</li>
                  <li>• Recorded sessions for later review</li>
                  <li>• Digital certificates upon completion</li>
                  <li>• Multi-language support available</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Safety Leadership Development</h3>
                <p className="text-gray-600 mb-4">
                  Advanced programs for managers and executives to lead safety initiatives.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Executive safety leadership training</li>
                  <li>• Safety culture transformation</li>
                  <li>• Risk management strategies</li>
                  <li>• ROI measurement and reporting</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Why Choose Our Corporate Training?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary-600 text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Customized Solutions</h3>
                  <p className="text-gray-600">Every program is tailored to your industry, challenges, and organizational goals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary-600 text-xl">👨‍🏫</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Expert Instructors</h3>
                  <p className="text-gray-600">Learn from certified safety professionals with real-world industry experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary-600 text-xl">📊</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Measurable Results</h3>
                  <p className="text-gray-600">Track progress with detailed analytics and reporting on training effectiveness.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary-600 text-xl">🏆</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Recognized Certifications</h3>
                  <p className="text-gray-600">Industry-recognized certificates that add value to your team's credentials.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8">Training Success Metrics</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Companies Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
              <div className="text-gray-600">Incident Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Employees Certified</div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Popular Training Topics</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>• OSHA Compliance</div>
              <div>• Emergency Response</div>
              <div>• Hazard Communication</div>
              <div>• Personal Protective Equipment</div>
              <div>• Fall Protection</div>
              <div>• Lockout/Tagout</div>
              <div>• Confined Space Entry</div>
              <div>• Chemical Safety</div>
              <div>• Fire Prevention</div>
              <div>• Ergonomics</div>
              <div>• Machine Guarding</div>
              <div>• Safety Leadership</div>
            </div>
          </div>
          
          <div className="bg-primary-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Get Started Today</h3>
            <p className="text-gray-700 mb-4">
              Ready to enhance your workplace safety culture? Contact our team for a consultation and custom training proposal.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Schedule Consultation
              </button>
              <button className="w-full border border-primary-600 text-primary-600 py-3 rounded-lg hover:bg-primary-50 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateTraining;