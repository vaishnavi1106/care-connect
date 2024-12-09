import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Values from './components/Values';
import Transformation from './components/Transformation';
import Gallery from './components/Gallery';
import Center from './components/Center';
import VideoPage from './components/VideoPage';
import Login from './components/Login'; // Import LoginPage component
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define routes for different sections */}
        <Route
          path="/"
          element={
            <main>
              <section id="hero">
                <Hero />
              </section>
              <AboutUs />
              <Transformation />
              <Values />
              <Center />
              <Gallery />
              <VideoPage />
            </main>
          }
        />
        <Route path="/login" element={<Login />} /> {/* Route for Login Page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
