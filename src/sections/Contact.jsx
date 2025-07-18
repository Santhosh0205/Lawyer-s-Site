import React from 'react';

export default function Contact() {
  return (
    <section className="py-5 bg-light" id="contact">
      <div className="container" data-aos="fade-up">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Contact Us</h2>
          <p className="text-muted">We’d love to hear from you!</p>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="row g-3 bg-white p-4 shadow rounded"
        >
          {/* Required hidden input for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" name="name" className="form-control" id="name" required />
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" name="email" className="form-control" id="email" required />
          </div>

          <div className="col-12">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea name="message" rows="4" className="form-control" id="message" required></textarea>
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary px-5">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
