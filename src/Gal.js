import React from 'react';
import ReactPlayer from "react-player";
import Footer from './Footer.jsx';
import Head from './Head.js';
import './Gal.css';

function Gal() {
  return (
    <>
    <Head />
    <h1 className="min" style={{fontSize:"28px", backgroundColor:"#ffa500ba",marginLeft:"18%", marginRight: "18%"}}>Our PUBLICATIONS</h1>
    <div className="A">
      <span className="A1" style={{ display: 'inline-block' }}>
        <ReactPlayer
          url="https://youtu.be/9muiOEeZT78"
          className="react-player"
          width="100%"
          height="100%"
          controls={false}
          light="https://i.ytimg.com/vi/9muiOEeZT78/maxresdefault.jpg"
          playIcon={<div className="react-player__play-icon"></div>}
          wrapper={(props) => <div className="react-player__wrapper">{props.children}</div>}
          config={{ youtube: { playerVars: { showinfo: 1 } }
        }}
        />
        </span>
        <span className="A1" style={{ display: 'inline-block' }}>
        <ReactPlayer
        url="https://youtu.be/9muiOEeZT78"
        className="react-player"
        width="100%"
        height="100%"
        controls={false}
        light="https://i.ytimg.com/vi/9muiOEeZT78/maxresdefault.jpg"
        playIcon={<div className="react-player__play-icon"></div>}
        wrapper={(props) => <div className="react-player__wrapper">{props.children}</div>}
        config={{ youtube: { playerVars: { showinfo: 1 } } }}
        />
        </span>
        <span className="A1" style={{ display: 'inline-block' }}>
        <ReactPlayer
        url="https://youtu.be/9muiOEeZT78"
        className="react-player"
        width="100%"
        height="100%"
        controls={false}
        light="https://i.ytimg.com/vi/9muiOEeZT78/maxresdefault.jpg"
        playIcon={<div className="react-player__play-icon"></div>}
        wrapper={(props) => <div className="react-player__wrapper">{props.children}</div>}
        config={{ youtube: { playerVars: { showinfo: 1 } } }}
        />
        </span>
        <span className="A1" style={{ display: 'inline-block' }}>
        <ReactPlayer
        url="https://youtu.be/9muiOEeZT78"
        className="react-player"
        width="100%"
        height="100%"
        controls={false}
        light="https://i.ytimg.com/vi/9muiOEeZT78/maxresdefault.jpg"
        playIcon={<div className="react-player__play-icon"></div>}
        wrapper={(props) => <div className="react-player__wrapper">{props.children}</div>}
        config={{ youtube: { playerVars: { showinfo: 1 } } }}
        />
        </span>
        <span className="A1" style={{ display: 'inline-block' }}>
        <ReactPlayer
        url="https://youtu.be/9muiOEeZT78"
        className="react-player"
        width="100%"
        height="100%"
        controls={false}
        light="https://i.ytimg.com/vi/9muiOEeZT78/maxresdefault.jpg"
        playIcon={<div className="react-player__play-icon"></div>}
        wrapper={(props) => <div className="react-player__wrapper">{props.children}</div>}
        config={{ youtube: { playerVars: { showinfo: 1 } } }}
        />
        </span>
        <span className="A1" style={{ display: 'inline-block' }}>
        <ReactPlayer
        url="https://youtu.be/9muiOEeZT78"
        className="react-player"
        width="100%"
        height="100%"
        controls={false}
        light="https://i.ytimg.com/vi/9muiOEeZT78/maxresdefault.jpg"
        playIcon={<div className="react-player__play-icon"></div>}
        wrapper={(props) => <div className="react-player__wrapper">{props.children}</div>}
        config={{ youtube: { playerVars: { showinfo: 1 } } }}
        />
        </span>
        </div>
        <Footer/>
        </>
        
        );
        }
        
        export default Gal;