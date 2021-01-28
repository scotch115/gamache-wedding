import React, { Component } from 'react';
import './App.css';
import cute from './images/cute_line.jpeg';
import Gallery from 'react-photo-gallery';
import { cute_photo } from './cutephoto';


class Photos extends Component {

    render() { 
        return (  
            <div>          
            <div style={{backgroundColor: "#153630", color: "white", textAlign: "center", paddingTop: "2vh", paddingBottom: "1vh"}}>
            <img src={cute} alt="cute" style={{width: "50vw"}}/>
            <div style={{fontSize: '10vmin', fontFamily: "Rockabye", color: "#CCA497"}}> <a href="/" style={{textDecoration: 'none', color: '#CCA497'}}>JORDAN & TORRI</a></div>
            {/* <div style={{fontSize: '10vmin', fontFamily: "Brotherline", color: "#CCA497"}}>Jordan & Torri</div> */}
            <ul className="nav"  style={{ fontFamily: "Ranille", fontSize: '3vmin'}}>
            <li><a href="/schedule">Schedule</a></li>
            <li><a href="/venue">Venue </a></li>
            <li><a href="/travel">Travel</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="https://www.zola.com/registry/jordantorri">Registry</a></li>
            <li><a href="/photos">Photos</a></li>
            </ul>
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
