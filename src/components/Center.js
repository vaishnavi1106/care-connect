import React from 'react';
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.png';
import t3 from '../assets/t3.png';
import './Center.css';

const Center = () => (
  <section className="team">
    <h2>CENTER INFORMATION</h2>
    <div className="team-members">
      <div className="member">
        <img src={t1} alt="SANJAY CHOUDAHA" />
        <p>Mauli Balakashram in Wagholi,Pune</p>
        <p1>Contact: 09035153277</p1>
      </div>
      <div className="member">
        <img src={t2} alt="Li Wei Chen" />
        <p>Shanti Ban Care Center in Talegaon,Pune</p>
        <p1>Contact: 09035194518</p1>
      </div>
      <div className="member">
        <img src={t3} alt="Carina Mendoza" />
        <p>Handicap Welfare Association in Aundh,Pune</p>
        <p1>Contact: 0794736046</p1>
      </div>
    </div>
  </section>
);

export default Center;
