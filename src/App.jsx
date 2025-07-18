import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Overview from './sections/Overview.jsx';
import Services from './sections/Services.jsx';
import Portfolio from './sections/Portfolio.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
function App() {
 
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Overview/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App
