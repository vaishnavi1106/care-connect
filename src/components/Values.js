import React from 'react';
import './Values.css';

const valuesData = [
  {
    title: 'Orphans',
    description: 'Orphans are individuals (typically children under 18 years of age) who have lost one or both parents.',
  },
  {
    title: 'Handicap',
    description: 'People with disabilities (PWD) are individuals who face long-term physical, mental, intellectual.',
  },
  {
    title: 'Children',
    description: ' Every child is a different kind of flower, and together they make this world a beautiful garden.',
  },
  {
    title: 'Oldage',
    description: 'Senior citizens or elderly people are generally defined as individuals aged 60 years and above.',
  },
  {
    title: 'Mentalally Unstable',
    description: ' Understanding, supporting,individuals, with a focus on children and adults with mental health challenges.',
  },
];

const Values = () => (
  <section className="values-section">
    <h2>Who Can Enroll</h2>
    <div className="values-grid">
      {valuesData.map((value, index) => (
        <div className="value-card" key={index}>
          <h3>{value.title}</h3>
          <p>{value.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Values;
