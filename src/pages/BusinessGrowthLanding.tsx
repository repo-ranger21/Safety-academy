import React from 'react';

const BusinessGrowthLanding: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Accelerate Your Business Growth
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transform your organization's safety culture and drive business success with our comprehensive growth solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Growth Solutions</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-600 text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Revenue Optimization</h3>
              <p className="text-gray-600">
                Reduce costs through improved safety practices and decreased incidents, 
                leading to lower insurance premiums and operational expenses.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-600 text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Competitive Advantage</h3>
              <p className="text-gray-600">
                Stand out in your industry with superior safety standards and 
                certified safety professionals driving your operations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-600 text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Workforce Excellence</h3>
              <p className="text-gray-600">
                Attract and retain top talent with comprehensive safety training 
                and professional development opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Proven Results</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">40%</div>
              <div className="text-gray-600">Reduction in Incidents</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">25%</div>
              <div className="text-gray-600">Cost Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">90%</div>
              <div className="text-gray-600">Employee Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">2x</div>
              <div className="text-gray-600">Faster Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join hundreds of companies that have already revolutionized their safety culture and business performance.
          </p>
          <button className="bg-primary-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default BusinessGrowthLanding;