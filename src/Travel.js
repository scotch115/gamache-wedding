import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import mountains from './images/mountains.png';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


class Travel extends Component {
    render() { 
        return (  
            <div>
                <div style={{backgroundColor: "#153630", color: "white", textAlign: "center", paddingTop: "2vh", paddingBottom: "1vh"}}>
                <Header />
                </div>
                <div style={{height: '20%' , width: '100%'}}><img src={mountains} alt="mountains"/></div>
                <div className="flights" style={{fontSize: '4vmin'}}>
                    <a style={{textDecoration: 'none', color: 'black'}} href="https://www.google.com/travel/flights/search?tfs=CBwQAhoeagcIARIDTUNPEgoyMDIxLTA3LTExcgcIARIDQ09TGh5qBwgBEgNDT1MSCjIwMjEtMDctMTRyBwgBEgNNQ09wAYIBCwj___________8BQAFIAZgBAQ&tfu=GgA">Orlando ✈️ Colorado Springs</a>
                    <a style={{textDecoration: 'none', color: 'black'}} href="https://www.google.com/travel/flights/search?tfs=CBwQAhoeagcIARIDSUxNEgoyMDIxLTA3LTExcgcIARIDQ09TGh5qBwgBEgNDT1MSCjIwMjEtMDctMTRyBwgBEgNJTE1wAYIBCwj___________8BQAFIAZgBAQ&tfu=GgA">Wilmington ✈️ Colorado Springs</a>
                </div>
                <div style={{height: '10vw'}}></div>
                <Map google={this.props.google} style={{width: '100%', height: '80vmin'}} zoom={15} initialCenter={{lat: '38.790302', lng: '-104.864939'}} >
                <Marker />
                </Map>
                <div style={{height: "100vh"}}></div>
                <footer className="hero-footer">
                    <div className="content has-text-centered">
                    Made with <a href="https://jordangamache.io" style={{textDecoration: "none", color: "black"}}><i className="fa fa-heart" style={{color: "rgb(235, 43, 86)"}}></i> & <i className="fa fa-coffee" style={{color: "rgb(44, 31, 22)"}}></i></a> in Orlando
					</div>
                </footer>
            </div>
        );
    }
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyD3HrSwb8dhCSAtLIySqHUgAca5vkSXvL0',
    version: 3.31
})(Travel);