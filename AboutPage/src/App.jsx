import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css';
import Dropdown from './Components/Dropdown';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <Footer />
    </div>
  );
}

  /**
   * A navigation bar component that renders a horizontal bar with links to
   * other parts of the app.
   * 
   * @returns {React.ReactElement} A `header` element containing a `nav` element
   * with a logo and a list of links.
   */
function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Farmer Aid</h1> 
        <ul className="nav-links">
          <li><a href="#services"><Dropdown/></a></li>
          <li><a href="https://homepage-ofdz.vercel.app/">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

function HeroSection() {
}

function Services() {
  return (
    <section className="services" id="services">
       <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are a group of students attending a hackathon for the first time ever! Though we lack a lot of experience and skill, we makeup for it with our effort. We feel strongly about the farmers of India.
      </p>
      <p>
        Our mission is to help people by offering various solutions tailored to their needs. We value quality, integrity, and customer satisfaction.
      </p>
      <h2></h2>
      <h1>Our Vision</h1>
      <p>To become a leading platform in delivering exceptional value to our users.</p>
      <h2> </h2>
      <h1>Our Team</h1>
      <p>
        We have a passionate team of professionals who work tirelessly to make sure our users get the best experience.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      
    </div>

    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Farmer Aid. All rights reserved.</p>
      <ul className="social-links">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </footer>
  );
}

export default App;

