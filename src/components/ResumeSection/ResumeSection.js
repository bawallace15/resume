import React from 'react';
import './ResumeSection.css';
import Tilt from 'react-tilt';

const ResumeSection = ({logo, company, title, accomp}) => {
    return (
        <div className='res-row'>
            <compinfo>
                <h1 className='company'>{company}</h1>
                <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 200, width: 250 }} >
                    <img alt='logo' src={logo} width='250' height='200' />
                </Tilt>
            </compinfo>
            <roleinfo>
                <h2 className='tc'>{title}</h2>
                <ul className='roleinfo'>
                    {accomp.map((i) => {
                        return (
                            <li>{i}</li>
                        )
                    })}
                </ul>
            </roleinfo>
        </div>
    );
}

export default ResumeSection;