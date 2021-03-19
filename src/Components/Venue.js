import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Gallery from 'react-photo-gallery';
import { photo } from '../photo';

class Venue extends Component {

    render() { 
        return (
            <div>
                <div style={{backgroundColor: "#153630", color: "white", textAlign: "center", paddingTop: "2vh", paddingBottom: "1vh"}}>
                <Header />
                </div>
                <div>
                    <div style={{width: '100%'}}><Gallery photos={photo} direction={"column"}/></div>
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
 
export default Venue;