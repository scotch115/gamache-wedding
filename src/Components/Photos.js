import React from 'react';
import '../App.css';
import Header from './Models/Header';
import Gallery from 'react-photo-gallery';
import { cute_photo } from '../cutephoto';
import Footer from './Models/Footer';


export const Photos = () => {
    return (  
        <div>          
        <div style={{backgroundColor: "#153630", color: "white", textAlign: "center", paddingTop: "2vh", paddingBottom: "1vh"}}>
        <Header />
        </div>
        <div style={{width: '100%'}}>
            <p className="has-text-centered container" style={{fontSize: "2vw", padding: '1vw'}}>✨ More photos to come! ✨</p>
            <Gallery photos={cute_photo} direction={"column"}/>
        </div>
            <div style={{height: "50vmin"}}></div>
           <Footer />
        </div>
    );
}

export default Photos;
