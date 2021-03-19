import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Gallery from 'react-photo-gallery';
import { cute_photo } from '../cutephoto';


class Photos extends Component {

    render() { 
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
                <footer className="hero-footer">
                    <div className="content has-text-centered">
                    Made with <a href="https://jordangamache.io" style={{textDecoration: "none", color: "black"}}><i className="fa fa-heart" style={{color: "rgb(235, 43, 86)"}}></i> & <i className="fa fa-coffee" style={{color: "rgb(44, 31, 22)"}}></i></a> in Orlando
                    </div>
                </footer>
            </div>
        );
    }
}

export default Photos;
