import React from 'react';
import '../App.css';
import Header from './Models/Header';
import Gallery from 'react-photo-gallery';
import { photo } from '../photo';
import Footer from './Models/Footer';

export const Venue = () => {
    return (
        <div>
            <div style={{backgroundColor: "#153630", color: "white", textAlign: "center", paddingTop: "2vh", paddingBottom: "1vh"}}>
            <Header />
            </div>
            <div>
                <div style={{width: '100%'}}><Gallery photos={photo} direction={"column"}/></div>
            </div>
            <div style={{height: "50vmin"}}></div>
            <Footer />
        </div>
    );
};
 
export default Venue;