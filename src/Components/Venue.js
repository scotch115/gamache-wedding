import React from 'react';
import '../App.css';
import Header from './Models/Header';
import Gallery from 'react-photo-gallery';
import { photo } from '../photo';
import Footer from './Models/Footer';

export const Venue = () => {
    return (
        <div>
            <Header />
            <div>
                <div style={{width: '100%'}}><Gallery photos={photo} direction={"column"}/></div>
            </div>
            <div style={{height: "50vmin"}}></div>
            <Footer />
        </div>
    );
};
 
export default Venue;