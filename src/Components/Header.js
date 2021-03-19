import React, { Component } from 'react';
import '../App.css';
import cute from '../images/cute_line.jpeg';

class Header extends Component {
    render() { 
        return ( 
            <div>
                <img src={cute} alt="cute" style={{width: "50vw"}}/>
                <div style={{fontSize: '10vmin', fontFamily: "Rockabye", color: "#CCA497"}}> <a href="/" style={{textDecoration: 'none', color: '#CCA497'}}>JORDAN & TORRI</a></div>
                {/* <div style={{fontSize: '10vmin', fontFamily: "Brotherline", color: "#CCA497"}}>Jordan & Torri</div> */}
                <ul className="nav"  style={{ fontFamily: "Ranille", fontSize: '2.5vmin'}}>
                <li><a href="/">Schedule 🔒</a></li>
                <li><a href="/venue">Venue</a></li>
                <li><a href="/travel">Travel</a></li>
                <li><a href="/menu">Menu 🔒</a></li>
                <li><a href="https://www.zola.com/registry/jordantorri">Registry</a></li>
                <li><a href="https://www.zola.com/wedding/jordantorri/photo">Photos</a></li>
                </ul>
            </div>
         );
    }
}
 
export default Header;