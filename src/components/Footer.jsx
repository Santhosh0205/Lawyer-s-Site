import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-2">
      <div className="container text-center" data-aos="zoom-out">
        <h5 className="fw-bold">Lawyer's Site</h5>
        <p className="mb-3">Empowering Legal Services</p>

        {/* Social Icons */}
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a
            href="https://wa.me/919360164622"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://instagram.com/santhosh._.krishnamoorthy/"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/santhosh-k-b8bab724a/"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright */}
        <small>&copy; {new Date().getFullYear()} Lawyer's Site. All rights reserved.</small>
      </div>
    </footer>
  );
}
