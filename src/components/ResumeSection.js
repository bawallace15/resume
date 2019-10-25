import React from 'react';

const ResumeSection = ({title, text}) => {
    return (
        <div>
            <h2 className='tc'>{title}</h2>
            <p>{text}</p>
        </div>
    );
}

export default ResumeSection;