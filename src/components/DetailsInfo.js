import React from 'react';
import './DetailsInfo.css';

const DetailsInfo = ({ image, banner, title, genre, view, lang, desc }) => {
    return (
        <div>
            {
                image ? (
                    <img
                        className="detailsInfo__image"
                        src={banner}
                        alt={title}
                    />
                ) : (
                    <div></div>
                )
            }
            <p className="detailsInfo__title">{title}</p>
            <div className="detailsInfo__info">
                <span>{genre}</span>
                <span style={{ color: "#989ba0", margin: "5px" }}>&#8226;</span>
                <span>{view}</span>
            </div>
            <p className="detailsInfo__lang">{lang}</p>
            <p className="detailsInfo__desc">{desc}</p>
        </div>
    )
}

export default DetailsInfo;
