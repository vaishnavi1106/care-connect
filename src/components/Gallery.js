import React from 'react';
import g1 from '../assets/g1.jpg';
import g2 from '../assets/g2.jpg';
import g3 from '../assets/g3.jpg';
import g5 from '../assets/g5.jpeg';
import g6 from '../assets/g6.jpeg';
import './Gallery.css';

const Gallery = () => (
  <section className="gallery">
    <h2>Gallery</h2>
    <div className="gallery-logos">
      <img src={g1} alt="g1" />
      <img src={g2} alt="g2" />
      <img src={g3} alt="g3" />
      <img src={g5} alt="g5" />
      <img src={g6} alt="g6" />
    </div>
  </section>
);

export default Gallery;
