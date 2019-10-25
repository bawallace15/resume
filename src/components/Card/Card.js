import React from 'react';

const Card = ({ media, username, pic, link}) => {
    return (
        <a href={link} target='_blank' rel="noopener noreferrer">
            <div className='tc bg-white black dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt={media} src={pic} width='200' height='200'/>
                <div>
                    <h2>{media}</h2>
                    <p>{username}</p>
                </div>
            </div>
        </a>
    );
}

export default Card;