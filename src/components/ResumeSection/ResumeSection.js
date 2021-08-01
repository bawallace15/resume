import React from 'react';
import './ResumeSection.css';
import Tilt from 'react-tilt';

function ResumeSection({ logo, company, title, accomp }) {
  return (
    <div className="ResumeSection">
      <div className='compinfo'>
        <h1>{company}</h1>
        <Tilt className="Tilt br2 shadow-2" options={{ max: 25 }} style={{ height: 200, width: 250 }}>
          <img alt='logo' src={logo} width='250' height='200' />
        </Tilt>
      </div>
      <div className='roleinfo'>
        <h2>{title}</h2>
        <ul>
          {accomp.map((i) => {
            return (
              <li>{i}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
};

export default ResumeSection;
