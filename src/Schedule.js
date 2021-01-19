import React, { Component } from 'react';
import './App.css';
import cute from './images/cute_line.jpeg';

class Schedule extends Component {
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
                <li><a href="/">Registry</a></li>
                <li><a href="/photos">Photos</a></li>
                </ul>
            </div>
            {/* <div style={{width: "100%", height: "80vh"}}> */}
            <iframe title="schedule" width="100%" height="1500" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRTUMf1Lc7Ex_cUwXn_Ju7AjMeVtgjKi7M_NYkiMDG_bSpLQm_WLEU2ui73_RhHS2W-6W9V4eviYwpl/pubhtml?gid=0&amp;single=false&amp;widget=false&amp;headers=false&amp;"></iframe>
            {/* </div> */}
            <div style={{height: "50vmin"}}></div>
            <footer className="hero-footer">
                <div className="content has-text-centered">
                    Made with <a href="https://jordangamache.io" style={{textDecoration: "none", color: "black"}}><i className="fa fa-heart" style={{color: "rgb(235, 43, 86)"}}></i> & <i className="fa fa-coffee" style={{color: "rgb(44, 31, 22)"}}></i></a> in Orlando
                <div className=" content has-text-centered">
                    <a href="https://bulma.io">
                    <img src="https://bulma.io/images/made-with-bulma--black.png" alt="Made with Bulma" width="128" height="24" />
                    </a>
                </div>
                </div>
            </footer>
        </div>
      );
    }
}
 
export default Schedule;