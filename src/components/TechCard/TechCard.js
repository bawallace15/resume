import React from 'react';
import './TechCard.css';

const TechCard = ({pic}) => {
    return (
        <div className='tc bg-white black dib br3 pa3 ma2 grow bw2 shadow-5 ba b--black'>
            <img alt='javascript' src={pic} width='150' height='150'/>
        </div>
    );
}

export default TechCard;
