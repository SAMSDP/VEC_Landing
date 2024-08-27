import React from 'react';
import './programmain.css';

const ProgramsPage = () => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className="programs-container">
      <h1>PROGRAMS</h1>
      <div className="programs">
        <div className="program-card">
          <h2>UG</h2>
          <ul>
            <li><a href="https://example.com/ug-course1" target="_blank" rel="noopener noreferrer">B.Sc. in Agriculture</a></li>
            <li><a href="https://example.com/ug-course2" target="_blank" rel="noopener noreferrer">B.Tech. in Agricultural Engineering</a></li>
            <li><a href="https://example.com/ug-course3" target="_blank" rel="noopener noreferrer">B.Sc. in Horticulture</a></li>
            <li><a href="https://example.com/ug-course4" target="_blank" rel="noopener noreferrer">B.Sc. in Forestry</a></li>
          </ul>
        </div>
        <div className="program-card">
          <h2>PG</h2>
          <ul>
            <li><a href="https://example.com/pg-course1" target="_blank" rel="noopener noreferrer">M.Sc. in Agronomy</a></li>
            <li><a href="https://example.com/pg-course2" target="_blank" rel="noopener noreferrer">M.Sc. in Soil Science</a></li>
            <li><a href="https://example.com/pg-course3" target="_blank" rel="noopener noreferrer">M.Tech. in Agricultural Engineering</a></li>
            <li><a href="https://example.com/pg-course4" target="_blank" rel="noopener noreferrer">M.Sc. in Plant Pathology</a></li>
          </ul>
        </div>
        <div className="program-card">
          <h2>Ph.D</h2>
          <ul>
            <li><a href="https://example.com/phd-course1" target="_blank" rel="noopener noreferrer">Ph.D. in Agricultural Economics</a></li>
            <li><a href="https://example.com/phd-course2" target="_blank" rel="noopener noreferrer">Ph.D. in Plant Breeding</a></li>
            <li><a href="https://example.com/phd-course3" target="_blank" rel="noopener noreferrer">Ph.D. in Soil Science</a></li>
            <li><a href="https://example.com/phd-course4" target="_blank" rel="noopener noreferrer">Ph.D. in Entomology</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;
