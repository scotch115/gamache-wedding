import React from 'react';
import './App.css';
import homepage from './images/homepage.JPG';
import AddToHomescreen from 'react-add-to-homescreen';
import Header from './Components/Models/Header';
import mountains from './images/brown_mountains.png';
import Footer from './Components/Models/Footer';

export const App = () => {
  const handleAddToHomescreenClick = () => {
    alert(`
      1. Open Share menu\n
      2. Tap on "Add to Home Screen" button`
    );
  };
  
  return (
    <div>
      <div style={{backgroundColor: "#153630", color: "white", textAlign: "center", paddingTop: "1vh", paddingBottom: "1vh"}}>
        <Header />
      </div>
      <div style={{display: 'flex', background: 'white', textAlign: 'center', overflow: 'hidden', position: 'relative'}}>
        <img src={homepage} alt="us" style={{width: "100vw", height: '100%', objectFit: 'cover', opacity: '0.5'}}/> 
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '4vw', color: 'black', fontFamily: 'Ranille'}}>We're getting married!</div>
        <div style={{position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '2.5vw', color: 'black', fontFamily: 'Ranille'}}> The 12<sup style={{fontSize: '1.5vw'}}>th</sup> of July, 2022</div>
      </div>
      <div>
        <img src={mountains} alt='mountains' style={{width: '100vw', height: '100%'}} />
      </div>
      <Footer />
      <AddToHomescreen title={'Add to your homescreen ↓'} onAddToHomescreenClick={() => handleAddToHomescreenClick()} />
    </div>
  );
};

  export default App;
