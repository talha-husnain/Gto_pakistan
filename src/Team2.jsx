import React from 'react'
import './App.css';
import Footer from './Footer';
import Head from './Head.js';

const Card = (props) => {
  return (
    <div>
        <>
        <Head />

        <h1 className="min" style={{fontSize:"28px", backgroundColor:"orange",marginLeft:"18%", marginRight: "18%", textAlign:"center"}}>GTO Board Members</h1>

        <div className="team">
    <div className="row">
  <div className="column">
    <div className="card">
    <img
          style = {{width: '250px', height: '250px'}}
          src={props.src}
          alt={props.alt}
        />      <div className="container">
        <h2 >{props.Head}</h2>
        <p className="title">{props.title}</p>
        <p>{props.par}</p>
        <p>{props.email}</p>
        <span><button className="button">Contact</button></span>
        <div className="count" style={{textAlign: 'center'}}>.... </div>
        <div className="cont"> 24100245@lums.edu.pk</div>
      </div>
    </div>
  </div>
</div>

</div>



<Footer/>
        </>
      
    </div>
  )
}

export default Card;
