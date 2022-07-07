import React from 'react';
import '../App.css';
import Header from './Models/Header';
import Footer from './Models/Footer';


export const Photos = () => {

    return (  
        <div>          
        <div style={{backgroundColor: "#153630", color: "white", textAlign: "center", paddingTop: "2vh", paddingBottom: "1vh"}}>
        <Header />
        </div>
        <div id="target_div" style={{width: '100%', height: '8000px'}}>
            <iframe
                title="zola_photo_library"
                src="https://www.zola.com/wedding/jordantorri/photo"
                width="100%"
                height="100%"
            />
        </div>
            <div style={{height: "50vmin"}}></div>
           <Footer />
        </div>
    );
}

export default Photos;
