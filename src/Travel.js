import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import mountains from './images/mountains.png';
import { AppleMaps, Annotation } from 'react-apple-mapkitjs';


class Travel extends Component {
    render() { 
        var mapSize;
        if (window.innerWidth > 500) {
            mapSize = 800;
            console.log(window.innerWidth);
        } else {
            mapSize = 400;
            console.log(window.innerWidth);
        }
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
                <AppleMaps 
                    token='eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjY4NDZZV1E1VVkifQ.eyJpc3MiOiJGVDRBQVhXOU4zIiwiaWF0IjoxNjEzMDc1NDU1LCJleHAiOjE4OTY5ODU4NTV9.qHiQjt8fXJsDW_BDAWeEOYfEHOs1PyGxp2CsToWrJSuWmpkjlu1eAnhypyn3f0WgnRTB62Sk6rQX-_vlEVFaUg'
                    latitude={38.820302}
                    longitude={-104.784939}
                    zoomLevel={6}
                    height={mapSize}
                    darkMode={true}
                >
                    <Annotation
                        latitude={38.790302}
                        longitude={-104.864939}
                        color="#153630"
                        title="Gamache Wedding"
                        subtitle="Cañon Retreat"
                        // glyphText="⚭"
                        glyphText="💒"
                    />
                    <Annotation
                        latitude={38.827405}
                        longitude={-104.821457}
                        color="#153630"
                        title="Kinship Landing"
                        subtitle="Downtown"
                        glyphText="🏨"
                    />
                    <Annotation
                        latitude={38.79884627225451}
                        longitude={-104.70065547555635}
                        color="#153630"
                        title="COS Airport"
                        subtitle="Downtown"
                        glyphText="🛩"
                    />
                </AppleMaps>
                <div style={{height: "50vh"}}></div>
                <footer className="hero-footer">
                    <div className="content has-text-centered">
                    Made with <a href="https://jordangamache.io" style={{textDecoration: "none", color: "black"}}><i className="fa fa-heart" style={{color: "rgb(235, 43, 86)"}}></i> & <i className="fa fa-coffee" style={{color: "rgb(44, 31, 22)"}}></i></a> in Orlando
					</div>
                </footer>
            </div>
        );
    }
}
 
// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyD3HrSwb8dhCSAtLIySqHUgAca5vkSXvL0',
//     version: 3.31
// })(Travel);

export default Travel;