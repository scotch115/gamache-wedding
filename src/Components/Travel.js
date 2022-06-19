import React, { useEffect, useState } from 'react';
import '../App.css';
import Header from './Models/Header';
import mountains from '../images/mountains.png';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import Footer from './Models/Footer';


export const Travel = (props) => {
    const [showingInfoWindow, setShowingInfoWindow] = useState(false);
    const [activeMarker, setActiveMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState({});
    // eslint-disable-next-line no-unused-vars
    const [mapSize, setMapSize] = useState(800);
    const [zoomLevel, setZoomLevel] = useState(13);

    const onMarkerClick = (props, marker) => {
        setSelectedPlace(props);
        setActiveMarker(marker);
        setShowingInfoWindow(true);
    };

    useEffect(() => {
        if (window.innerWidth > 500) {
            setMapSize(800);
            setZoomLevel(13);
            console.log(window.innerWidth);
        } else {
            setMapSize(400);
            setZoomLevel(10);
            console.log(window.innerWidth);
        }
    }, []);

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
            <Map google={props.google} style={{width: '100%', height: '80vmin'}} zoom={zoomLevel} initialCenter={{lat: '38.800302', lng: '-104.804939'}} >
            <Marker 
                name={'Cañon Retreat - ⚭'} 
                position={{lat: 38.791654, lng: -104.863764}}
                onClick={onMarkerClick}
            />
            <Marker 
                name={'Kinship Landing - ⌂'} 
                position={{lat: 38.827405, lng: -104.821457}} 
                onClick={onMarkerClick}
            />
            <Marker 
                name={'COS Airport - ✈︎'} 
                position={{lat: 38.79884627225451, lng: -104.70065547555635}} 
                onClick={onMarkerClick}
            />

            <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}>
                <div>
                <h1>{selectedPlace.name}</h1>
                </div>
            </InfoWindow>
            </Map>
            <div style={{height: "80vh"}}></div>
            <Footer />
        </div>
    );
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyD3HrSwb8dhCSAtLIySqHUgAca5vkSXvL0',
    version: 3.31
})(Travel);
