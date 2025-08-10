import { useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Particles from './components/Particles/Particles';

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
      className='relative h-full overflow-auto bg-slate-950 z-20'
      onMouseMove={updateCursorPosition}
    >
      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          lazy: true,
        }}
        className='-z-10'
      >
        <Particles />
      </div>
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
      <Footer />
    </div>
  );
}

export default App;
