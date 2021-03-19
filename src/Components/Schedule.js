import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class Schedule extends Component {
    render() { 
        return ( 
        <div>          
            <div style={{backgroundColor: "#153630", color: "white", textAlign: "center", paddingTop: "2vh", paddingBottom: "1vh"}}>
                <Header />
            </div>
            {/* <div style={{width: "100%", height: "80vh"}}> */}
            <iframe title="schedule" width="100%" height="1500" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRTUMf1Lc7Ex_cUwXn_Ju7AjMeVtgjKi7M_NYkiMDG_bSpLQm_WLEU2ui73_RhHS2W-6W9V4eviYwpl/pubhtml?gid=0&amp;single=false&amp;widget=false&amp;headers=false&amp;"></iframe>
            {/* </div> */}
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
 
export default Schedule;