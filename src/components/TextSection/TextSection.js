import React from 'react';
import './TextSection.css'

const TextSection = ({title, text}) => {
    return (
        <div className='text-sel'>
            <h2 className='tc'>{title}</h2>
            <p>{text}</p>
        </div>
    );
}

export default TextSection;