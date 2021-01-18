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
            <div style={{width: "100vw", height: "80vh"}}>
            <iframe title="schedule" width="100%" height="100%" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRTUMf1Lc7Ex_cUwXn_Ju7AjMeVtgjKi7M_NYkiMDG_bSpLQm_WLEU2ui73_RhHS2W-6W9V4eviYwpl/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
            </div>
        </div>
      );
    }
}
 
export default Schedule;