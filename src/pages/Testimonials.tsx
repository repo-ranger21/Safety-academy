import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Safety Manager, ABC Manufacturing",
      content: "The training I received at ASPT Safety Academy transformed my career. The practical approach and expert instructors prepared me for real-world challenges.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Construction Supervisor",
      content: "Excellent program with hands-on training. The construction safety course helped me implement better safety practices on my job sites.",
      rating: 5
    },
    {
      name: "Emily Chen",
      role: "EHS Coordinator",
      content: "ASPT Safety Academy provided comprehensive training that enhanced my knowledge and skills. Highly recommend their programs.",
      rating: 5
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Student Testimonials</h1>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Our graduates have gone on to lead safety initiatives at major corporations, 
            start their own consulting businesses, and make significant impacts in their communities. 
            Join the thousands of professionals who have advanced their careers with ASPT Safety Academy.
          </p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            Share Your Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;