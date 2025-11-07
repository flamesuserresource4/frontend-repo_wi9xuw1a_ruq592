import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
