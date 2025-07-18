import React from 'react';
import { FaBalanceScale, FaUserTie, FaClock } from 'react-icons/fa'; // Font Awesome Icons

export default function Services() {
  const features = [
    {
      icon: <FaBalanceScale size={32} className="text-primary mb-3" />,
      title: 'Legal Matchmaking',
      desc: 'Connect civilians with the right lawyer based on expertise and location.',
    },
    {
      icon: <FaUserTie size={32} className="text-primary mb-3" />,
      title: 'Lawyer Dashboard',
      desc: 'Lawyers can manage appointments, documents, and case timelines efficiently.',
    },
    {
      icon: <FaClock size={32} className="text-primary mb-3" />,
      title: '24/7 Case Tracking',
      desc: 'Real-time updates and case status accessible to both clients and lawyers.',
    },
  ];

  return (
    <section className="py-5 bg-light" id="services" >
      <div className="container text-center" data-aos="fade-up" >
        <h2 className="fw-bold text-primary mb-4">What We Offer</h2>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="p-4 bg-white shadow-sm rounded h-100">
                {feature.icon}
                <h5 className="fw-bold mb-2">{feature.title}</h5>
                <p className="text-muted">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
