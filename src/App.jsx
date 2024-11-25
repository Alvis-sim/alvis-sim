import './App.css';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import { RandomQuote } from './Components/RandomQuote/RandomQuote'; 
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route for routing

function App() {
  return (
    <Routes>
      {/* Main Page Route */}
      <Route
        path="/"
        element={
          <>
            <Hero />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </>
        }
      />
      
      {/* Random Quote Page Route */}
      <Route path="/random-quote" element={<RandomQuote />} />
    </Routes>
  );
}

export default App;
