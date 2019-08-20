import React from 'react';

const TextSection = ({title, text}) => {
    return (
        <div>
            <h2 className='tc'>{title}</h2>
            <p>{text}</p>
        </div>
    );
}

export default TextSection;