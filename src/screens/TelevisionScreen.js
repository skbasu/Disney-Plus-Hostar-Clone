import React from 'react';
import ContentRow from '../components/ContentRow';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import Navbar from '../components/Navbar';

const TelevisionScreen = () => {

    return (
        <div className="televisionScreen" style={{ backgroundColor: "#0c111b" }}>
            <Navbar />
            <ImageSlider endpoint="tvSlider" />
            <ContentRow head="Popular Picks" endpoint="popular" />
            <ContentRow head="Quix" endpoint="quix" />
            <ContentRow head="New On Disney+ Hotstar" endpoint="latest" />
            <ContentRow head="Best of Kids" endpoint="kids" />
            <Footer />
        </div>
    );
}

export default TelevisionScreen;
