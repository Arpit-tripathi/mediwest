import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Dr. Meera Sharma',
    title: 'Medical Director, Sunrise Hospital',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote:
      'QARA Healthcare guided us through the NABH accreditation process with unmatched professionalism. Their team made a complex journey feel seamless.',
  },
  {
    name: 'Col. Rajeev Bhatia (Retd)',
    title: 'Admin Head, ECHS Polyclinic',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    quote:
      'Their expertise in ECHS and CGHS compliance saved us months of effort. Highly recommended for any healthcare institution.',
  },
  {
    name: 'Dr. Ayesha Khan',
    title: 'CGHS Wellness Center Lead',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote:
      'Thanks to QARA Healthcare, our CGHS documentation and audits passed with flying colors. Their consultants are top-notch.',
  },
];



const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { name, title, image, quote } = testimonials[index];

  return (
    <section className="h-screen bg-black text-center flex items-center justify-center" id="testimonials">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-400 mb-10">Client Testimonials</h2>
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl shadow-2xl transition-all duration-500">
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-2 border-blue-400"
          />
          <h4 className="text-xl font-semibold text-blue-300">{name}</h4>
          <p className="text-sm text-gray-400 mb-6">{title}</p>
          <p className="text-gray-200 italic text-lg">"{quote}"</p>
          <div className="mt-8 flex justify-center space-x-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  i === index ? 'bg-blue-400' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;