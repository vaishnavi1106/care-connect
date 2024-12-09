import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Use Routes and Route
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Values from './components/Values';
import Transformation from './components/Transformation';
import Gallery from './components/Gallery';
import Center from './components/Center';
import VideoPage from './components/VideoPage';
import CaseRegistrationForm from './components/Registercase'; // Correct import path
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Route to register case page */}
          <Route path="/registercase" element={<CaseRegistrationForm />} />

          {/* Default route */}
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

const Homepage = () => {
  const location = useLocation(); // Hook to get current route

  // Render other sections only on the homepage
  return (
    <>
      {location.pathname === '/' && (
        <>
          <section id="hero">
            <Hero />
          </section>

          <section id="about">
            <AboutUs />
          </section>

          <section id="transformation">
            <Transformation />
          </section>

          <section id="values">
            <Values />
          </section>

          <section id="center">
            <Center />
          </section>

          <section id="gallery">
            <Gallery />
          </section>

          <section id="video">
            <VideoPage />
          </section>
        </>
      )}
    </>
  );
};

export default App;
