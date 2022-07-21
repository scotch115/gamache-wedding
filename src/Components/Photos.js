import React from 'react';
import '../App.css';
import Header from './Models/Header';
import Footer from './Models/Footer';


export const Photos = () => {

    return (  
        <div>          
        <Header />
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
