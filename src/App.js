import React, { Component } from 'react';
import './App.css';
import homepage from './images/homepage.JPG';
import AddToHomescreen from 'react-add-to-homescreen';
import Header from './Header';

class App extends Component {

  handleAddToHomescreenClick = () => {
    alert(`
 1. Open Share menu
 2. Tap on "Add to Home Screen" button`);
  };
  
  render() { 
      return (
        // <div class="App" style={{backgroundColor: "#CCA497", position: "relative", height: "100vh", width: "100vw"}}>  {/* Colors from bousch's screenshots */}
        //   <div style={{backgroundColor: "#153630", top: "30vh", left: "18vw", width: "50vw",padding: "10vh", position: "relative"}}>  {/* Colors from bousch's screenshots */}
        //     <div style={{backgroundColor: "#81471b", width: "40vw", padding: "10vh", position: "relative", color: "white"}}>  {/* Colors from bousch's screenshots */}
        <div>
          <div style={{backgroundColor: "#153630", color: "white", textAlign: "center", paddingTop: "1vh", paddingBottom: "1vh"}}>
           <Header />
          </div>
          <div style={{display: 'flex', background: 'white', textAlign: 'center', overflow: 'hidden', position: 'relative'}}>
            <img src={homepage} alt="us" style={{width: "100vw", height: '100%', objectFit: 'cover', opacity: '0.5'}}/> 
            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '4vw', color: 'black', fontFamily: 'Ranille'}}>We're getting married!</div>
            <div style={{position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '2.5vw', color: 'black', fontFamily: 'Ranille'}}> The 12<sup style={{fontSize: '1.5vw'}}>th</sup> of July, 2022</div>
          </div>
          <div className="has-text-centered">
            More details to follow! Check back in as the date gets closer for access to other areas of the site :) 
          </div>
          <div style={{height: "50vh"}}></div>
          <footer className="hero-footer">
              <div className="content has-text-centered">
              Made with <a href="https://jordangamache.io" style={{textDecoration: "none", color: "black"}}><i className="fa fa-heart" style={{color: "rgb(235, 43, 86)"}}></i> & <i className="fa fa-coffee" style={{color: "rgb(44, 31, 22)"}}></i></a> in Orlando
              </div>
          </footer>
          <AddToHomescreen title={'Add to your homescreen ↓'} onAddToHomescreenClick={this.handleAddToHomescreenClick} />
        </div>
      );
    }
  }

export default App;
