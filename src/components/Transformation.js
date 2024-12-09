import React from 'react';
import './Transformation.css';

const transformationData = [
  {
    title: 'Medical care',
    description:
      'Regular checkups, medication management, and rehabilitation services.',
    color: '#FFD700', // Gold color for card background
  },
  {
    title: 'Education',
    description:
      'Special education services tailored to their individual needs.',
    color: '#FF6B6B', // Red color for card background
  },
  {
    title: 'Vocational training',
    description:
      'Help children develop skills to live independently as adults.Vocational training to help gain employment or start small businesses.',
    color: '#6A4BFF', // Purple color for card background
  },
  {
    title: 'Psychological Support',
    description:
      'Counseling and mental health services to boost confidence and address emotional challenges.',
    color: '#FFA07A', // Light coral color for card background
  },
  {
  title: 'Social Inclusion Programs',
    description:
      'Support for integrating disabled people into society, including sports, recreational activities, and community engagement.',
    color: '#FFC0CB', // Light coral color for card background
  },
];

const Transformation = () => (
  <section className="transformation-section">
    <h2>SERVICES</h2>
    <h2>This Is How We Create Impact</h2>
    <div className="transformation-grid">
      {transformationData.map((item, index) => (
        <div
          className="transformation-card"
          key={index}
          style={{ backgroundColor: item.color }}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Transformation;
