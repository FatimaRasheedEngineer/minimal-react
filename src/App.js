
import { useRef } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import BrandSection from './Components/BrandSection';
import Recent from './Components/Recent';
import Team from './Components/Team';
import Contact from './Components/Contact';
import './App.css';

function App() {
  const processRef = useRef(null);
  const projectsRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Navbar onNavigate={scrollToSection} refs={{ processRef, projectsRef, teamRef, contactRef }} />
      <Hero />
      <div ref={processRef} id="process">
        <BrandSection />
      </div>
      <div ref={projectsRef} id="projects">
        <Recent />
      </div>
      <div ref={teamRef} id="team">
        <Team />
      </div>
      <div ref={contactRef} id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
