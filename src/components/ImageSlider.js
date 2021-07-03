import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import ImageText from './ImageText';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import db from '../firebase';
import WindowSize from '../utils/screenSize';

const ImageSlider = ({ endpoint }) => {

    const [height, width] = WindowSize();
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        const getAllSliders = async () => {
            await db.collection(`${endpoint}`)
                .get()
                .then((item) => {
                    const items = item.docs.map((doc) => doc.data());
                    setSliders(items);
                });
        }

        getAllSliders();
    }, [endpoint]);

    return (
        <div className="imageSlider">
            {
                width > 800 ? (
                    <Slider
                        autoplay
                        autoplaySpeed={5000}
                        infinite
                        prevArrow={<ArrowBackIosIcon fontSize="large" />}
                        nextArrow={<ArrowForwardIosIcon fontSize="large" />}>
                        {
                            sliders.map((slider) => (
                                <div key={slider.id}>
                                    <ImageText
                                        imgUrl={slider.imgUrl}
                                        title={slider.title}
                                        channel={slider.view}
                                        lang={slider.language}
                                        desc={slider.desc}
                                        genre={slider.genre}
                                    />
                                </div>
                            ))
                        }
                    </Slider>
                ) : (
                    <Slider
                        autoplay
                        autoplaySpeed={5000}
                        infinite
                        arrows={false}>
                        {
                            sliders.map((slider) => (
                                <div key={slider.id}>
                                    <ImageText
                                        imgUrl={slider.imgUrl}
                                        title={slider.title}
                                        channel={slider.view}
                                        lang={slider.language}
                                        desc={slider.desc}
                                        genre={slider.genre}
                                    />
                                </div>
                            ))
                        }
                    </Slider>
                )
            }
        </div>
    );
}

export default ImageSlider;

