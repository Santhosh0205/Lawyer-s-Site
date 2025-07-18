import React from 'react';
import project1 from '../assets/project1.jpg'; // Replace with real images
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

export default function Portfolio() {
  const projects = [
    {
      image: project1,
      title: 'Legal Consultation Platform',
      desc: 'A web app connecting clients with legal professionals in real-time.',
    },
    {
      image: project2,
      title: 'Lawyer Scheduling App',
      desc: 'Mobile-friendly interface for lawyers to manage appointments and clients.',
    },
    {
      image: project3,
      title: 'Court Case Tracker',
      desc: 'Track court case updates and receive automated reminders.',
    },
  ];

  return (
    <section className="py-5 bg-white" id="portfolio">
      <div className="container text-center" data-aos="fade-up">
        <h2 className="fw-bold text-primary mb-4">Our Work</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{project.title}</h5>
                  <p className="card-text text-muted">{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
