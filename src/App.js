import React from 'react';
import './index.css'; // Import Tailwind CSS

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Volunteer />
      <Contact />
    </div>
  );
}

export default App;
