import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import mountains from '../images/mountains.png';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';


class Travel extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };


    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });


    render() { 
        var mapSize;
        var zoomLevel;
        if (window.innerWidth > 500) {
            mapSize = 800;
            zoomLevel = 13;
            console.log(window.innerWidth);
        } else {
            mapSize = 400;
            zoomLevel = 10;
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
                <Map google={this.props.google} style={{width: '100%', height: '80vmin'}} zoom={zoomLevel} initialCenter={{lat: '38.800302', lng: '-104.804939'}} >
                <Marker 
                    name={'Cañon Retreat - ⚭'} 
                    position={{lat: 38.791654, lng: -104.863764}} 
                    onClick={this.onMarkerClick}
                />
                <Marker 
                    name={'Kinship Landing - ⌂'} 
                    position={{lat: 38.827405, lng: -104.821457}} 
                    onClick={this.onMarkerClick}
                />
                <Marker 
                    name={'COS Airport - ✈︎'} 
                    position={{lat: 38.79884627225451, lng: -104.70065547555635}} 
                    onClick={this.onMarkerClick}
                />

                <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                    <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
                </Map>
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
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyD3HrSwb8dhCSAtLIySqHUgAca5vkSXvL0',
    version: 3.31
})(Travel);
