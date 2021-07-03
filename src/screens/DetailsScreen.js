import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ImageText from '../components/ImageText';
import db from '../firebase';
import './DetailsScreen.css';
import WindowSize from '../utils/screenSize';
import DetailsInfo from '../components/DetailsInfo';
import ReactPlayer from 'react-player/youtube';
import CloseIcon from '@material-ui/icons/Close';

function DetailsScreen() {

    const [height, width] = WindowSize();
    const match = useRouteMatch();
    const id = match.params.id;
    const endpoint = match.params.endpoint;

    const [selected, setSelected] = useState([]);
    const [trailer, setTrailer] = useState(false);

    useEffect(() => {
        const getSelectedInfo = () => {
            db.collection(`${endpoint}`)
                .doc(id).get()
                .then((snapshot) => {
                    setSelected(snapshot.data());
                })
                .catch((err) => {
                    alert(err.message);
                })
        }

        getSelectedInfo();
    }, []);

    return (
        <div className="detailsScreen">
            <Navbar />
            {
                width > 800 ? (
                    <div>
                        <div style={{ marginLeft: "30px", marginRight: "30px" }}>
                            {
                                trailer ? (
                                    <div>
                                        <ReactPlayer
                                            className="detailsScreen__player"
                                            url={selected.trailer}
                                            controls
                                            width='100%'
                                            height="460px"
                                        />
                                        <CloseIcon style={{
                                            right: "25",
                                            position: "absolute",
                                            marginTop: "20px",
                                            cursor: "pointer"
                                        }} fontSize="large" onClick={() => { setTrailer(false) }} />
                                    </div>
                                ) : (
                                    <div>
                                        <ImageText
                                            title={selected.title}
                                            imgUrl={selected.banner}
                                            channel={selected.view}
                                            genre={selected.genre}
                                            desc={selected.desc}
                                            lang={selected.lang}
                                        />
                                    </div>
                                )
                            }
                        </div>
                        {
                            trailer ? (
                                <DetailsInfo
                                    className="detailsScreen__detailsInfo"
                                    title={selected.title}
                                    lang={selected.lang}
                                    genre={selected.genre}
                                    desc={selected.desc}
                                    view={selected.view}
                                />
                            ) : (
                                <div className="detailsScreen__trailerContainer">
                                    <p className="detailsScreen__trailerHead">Trailers & Extras</p>
                                    <img onClick={() => { setTrailer(true) }} className="detailsScreen__trailerPic" src={selected.banner} alt={selected.title} />
                                    <p className="detailsScreen__trailerTitle">&#9658; {selected.title} - Trailer</p>
                                </div>
                            )
                        }

                    </div>
                ) : (
                    <div>
                        {
                            trailer ? (
                                <div>
                                    <ReactPlayer
                                        className="detailsScreen__player"
                                        url={selected.trailer}
                                        controls
                                        width="100%"
                                        height="220px"
                                    />
                                    <CloseIcon
                                        fontSize="large"
                                        onClick={() => { setTrailer(false) }}
                                        style={{
                                            right: "10",
                                            position: "absolute",
                                            marginTop: "16px",
                                        }}
                                    />
                                    <DetailsInfo
                                        title={selected.title}
                                        lang={selected.lang}
                                        genre={selected.genre}
                                        desc={selected.desc}
                                        view={selected.view}
                                    />
                                </div>
                            ) : (
                                <div>
                                    <DetailsInfo
                                        image
                                        title={selected.title}
                                        banner={selected.banner}
                                        lang={selected.lang}
                                        genre={selected.genre}
                                        desc={selected.desc}
                                        view={selected.view}
                                    />
                                    <p className="detailsScreen__trailerHead">Trailers & Extras</p>
                                    <img onClick={() => { setTrailer(true) }} className="detailsScreen__trailerPic" src={selected.banner} alt={selected.title} />
                                    <p className="detailsScreen__trailerTitle">&#9658; {selected.title} - Trailer</p>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div >
    );
}

export default DetailsScreen;
