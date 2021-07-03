import React from 'react';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import ContentRow from '../components/ContentRow';
import Footer from '../components/Footer';


const HomeScreen = () => {
    return (
        <div className="homeScreen" style={{ backgroundColor: "#0c111b" }}>
            <Navbar />
            <ImageSlider endpoint="homeSlider" />
            <ContentRow head="Latest & Trending" endpoint="latest" />
            <ContentRow head="Quix: Chhote Episodes, Free Har Roz" endpoint="quix" />
            <ContentRow head="Popular Shows" endpoint="popular" />
            <ContentRow head="Popular Movies" endpoint="popularMovies" />
            <ContentRow head="Best of Kids" endpoint="kids" />
            <Footer />
        </div>
    );
}

export default HomeScreen;
