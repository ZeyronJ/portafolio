import React, { useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - containerRect.left,
      y: e.clientY - containerRect.top,
    });
  };

  return (
    <div
      className='relative bg-slate-900 h-full overflow-auto'
      onMouseMove={updateCursorPosition}
    >
      <div
        className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'
        style={{
          background: `radial-gradient(600px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>

      <Nav />
      <Home />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
