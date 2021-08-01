import React from 'react';
import './TextSection.css';

const TextSection = ({title, text}) => {
    return (
        <div className='TextSection'>
            <h2 className='tc'>{title}</h2>
            {text.split('\n\n').map(str => <p>{str}</p>)}
        </div>
    );
}

export default TextSection;