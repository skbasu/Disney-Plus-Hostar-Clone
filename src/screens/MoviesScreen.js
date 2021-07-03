import React from 'react';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import ContentRow from '../components/ContentRow';
import Footer from '../components/Footer';

const MoviesScreen = () => {

    return (
        <div className="moviesScreen" style={{ backgroundColor: "#0c111b" }}>
            <Navbar />
            <ImageSlider endpoint="moviesSlider" />
            <ContentRow head="Top Picks For You" endpoint="popularMovies" />
            <ContentRow head="New On Disney+ Hotstar" endpoint="latest" />
            <ContentRow head="Best For Kids" endpoint="kids" />
            <Footer />
        </div>
    );
}

export default MoviesScreen;
