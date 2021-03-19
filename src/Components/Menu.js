import React, { Component } from 'react';
import '../App.css';
import Header from './Header';

class Menu extends Component {
    render() { 
        return (  
            <div>
                <div style={{backgroundColor: "#153630", color: "white", textAlign: "center", paddingTop: "2vh", paddingBottom: "1vh"}}>
                    <Header />
                </div>
                <div style={{display: 'flex', background: 'black', textAlign: 'center', overflow: 'hidden', position: 'relative'}}>
                    <div style={{backgroundColor: "#eedfdd", objectFit: "cover", opacity: '0.2', width: "100vw"}}>
                        <iframe title="menu" src="https://docs.google.com/forms/d/e/1FAIpQLSdp2AbCru1p4ERRS0i7cpmpnZ1H3u5dJgE3Y7LQDMzEh6nU1g/viewform?embedded=true" width="100%" height="2307" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                    <div className="has-text-centered" style={{position: "absolute", color: "white", top: "35vh", left: "50%", transform: 'translate(-50%, -50%)', fontSize: '4vw', fontFamily: 'Ranille'}}>Check back later to see if the menu has been finalized yet!</div>    
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
 
export default Menu;