import React from "react";
import heroImage from "../assets/hero-image.jpg";

export default function Hero(){
    return (
        <section className="py-5 bg-light" id="home">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT: Text content */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold text-primary mb-3" data-aos="fade-right">
              Legal
            </h1>
            <p className="lead text-secondary mb-4" data-aos="fade-left">
             A comprehensive platform connecting civilians with legal professionals, streamlining case
management and improving accessibility in the legal services industry.
            </p>
            <a href="#portfolio" className="btn btn-primary btn-lg me-3" data-aos="zoom-in">
              View Case Study
            </a>
            <a href="#contact" className="btn btn-primary btn-lg" data-aos="zoom-in">
              Get in Touch
            </a>
          </div>

          {/* RIGHT: Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src={heroImage}
              alt="Hero"
              className="img-fluid"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </section>
    );
}
