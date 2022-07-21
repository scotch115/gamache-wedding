import React from 'react';
import Footer from './Models/Footer';
import Header from './Models/Header';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';

export const Video = () => {

  return (
    <>
    <Header />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <ReactTwitchEmbedVideo
        video="1530212888"
        autoplay={false}
        time="0h30m08s"
        height={(window.screen.width < 840 ? 220 : 600)}
        width={(window.screen.width < 840 ? 350 : 1040)}
        />
    </div>
    <Footer />
    </>
  );
}

export default Video;