import React from 'react';
import '../App.css';
import Header from './Models/Header';
import jump from '../images/registry1.jpeg';
import Footer from './Models/Footer';

export const Registry = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '5%' }}>
      <div style={{ background: 'white' }}>
          <img
            src={jump}
            alt="us"
            style={{
              height: '80%',
              objectFit: 'cover',
              opacity: '0.5',
              position: 'absolute',
              left: 'calc(10vw - 35px)'
            }}
            /> 
          <div
            style={{
              position: 'absolute',
              top: 'calc(30vw + 100px)',
              right: 'calc(8vw + 10px)',
              transform: 'translate(-50%, 100%)',
              fontSize: 'calc(4vw + 1vh)',
              color: 'black',
              fontFamily: 'Ranille',
            }}
          >
            <a href="https://www.zola.com/registry/jordantorri">Zola Registry</a>
          </div>
          <div
            style={{
              position: 'absolute',
              top: 'calc(50vw + 100px)',
              right: 'calc(3.5vw + 10px)',
              transform: 'translate(-50%, 100%)',
              fontSize: 'calc(4vw + 1vh)',
              color: 'black',
              fontFamily: 'Ranille',
            }}
          >
            <a href="https://www.target.com/gift-registry/gift/gamache"> Target Registry </a>
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          top: '90vh'
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Registry;