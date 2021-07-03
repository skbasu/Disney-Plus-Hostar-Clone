import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import db from '../firebase';
import './ContentRow.css';
import WindowSize from '../utils/screenSize';

const ContentRow = ({ head, endpoint }) => {

    const [height, width] = WindowSize();
    const [posters, setPosters] = useState([]);

    useEffect(() => {
        const getPosters = async () => {
            await db.collection(`${endpoint}`)
                .get()
                .then((item) => {
                    const items = item.docs.map((doc) => doc.data());
                    setPosters(items);
                })
        }

        getPosters();
    }, [endpoint]);

    return (
        <div className="contentRow">
            {
                width > 800 ? (
                    <div>
                        <p className="contentRow__head">{head}</p>
                        <div style={{ marginTop: '20px', marginRight: '30px', marginLeft: '30px', marginBottom: '40px' }}>
                            <Slider
                                prevArrow={<ArrowBackIosIcon />}
                                nextArrow={<ArrowForwardIosIcon />}
                                speed={2000}
                                infinite={false}
                                slidesToShow={8}
                                slidesToScroll={8}
                            >
                                {
                                    posters.map((poster) => (
                                        <div key={poster.id}>
                                            <Link to={`/${endpoint}/${poster.id}`} >
                                                <img
                                                    style={{
                                                        width: "150px",
                                                        height: "200px",
                                                        cursor: "pointer",
                                                        border: "none",
                                                        borderRadius: "3%",
                                                    }}
                                                    className="contentRow__poster"
                                                    src={poster.img}
                                                    alt={poster.title}
                                                />
                                            </Link>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p className="contentRow__head">{head}</p>
                        <div className="contentRow__posters">
                            {
                                posters.map((poster) => (
                                    <div key={poster.id}>
                                        <Link to={`/${endpoint}/${poster.id}`}>
                                            <img
                                                className="contentRow__poster"
                                                src={poster.img}
                                                alt={poster.title}
                                            />
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default ContentRow;