import React from 'react';
import overviewImage from '../assets/overview-image.jpg';

export default function About() {
  return (
    <section className="py-5 bg-white" style={{ minHeight: '70vh' }} id="about">
      <div className="container">
        <div className="row align-items-center">
          
          {/* LEFT: Text Content */}
          <div className="col-md-6" data-aos="fade-up">
            <h2 className="fw-bold text-primary mb-3">Overview</h2>
            <p className="text-secondary mb-3">
              LegalConnect is a dual-platform solution designed to bridge the gap between civilians seeking legal
              assistance and lawyers looking to efficiently manage their practice.
            </p>
            
            <h2 className="fw-bold text-primary mb-3">The Challenge</h2>
            <p className="text-secondary">
              The legal services industry faces significant accessibility barriers. Civilians struggle to find
              appropriate legal help, while lawyers juggle client management, case documentation, and
              practice administration.
            </p>
          </div>

          {/* RIGHT: Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0" data-aos="zoom-in">
            <img
              src={overviewImage}
              alt="Overview"
              className="img-fluid rounded"
              style={{ maxHeight: '400px' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
