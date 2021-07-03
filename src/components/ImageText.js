import React from 'react';
import './ImageText.css';

const ImageText = ({ imgUrl, title, channel, lang, genre, desc }) => {
    return (
        <div className="imageText">
            <img src={imgUrl} alt={title} />
            <h2>{title}</h2>
            <div className="imageText__genre">
                <span><strong>{channel}</strong></span>
                <span className="imageText__genre__dots">&#8226;</span>
                <span><strong>{lang}</strong></span>
                <span className="imageText__genre__dots">&#8226;</span>
                <span><strong>{genre}</strong></span>
            </div>
            <p>{desc}</p>
       </div>
    );
}

export default ImageText;


