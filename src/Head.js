import React from 'react'
import img from './gto_logo.png'
import Navbar from './components/Nav'
import './App.css';


export const Head = () => {
  return (
    <>
<div className="App">
  <div className="kon">
    <span className="image-container">
      <img className="im" src={img} alt="logo" />
    </span>
    <span className="header-container">
      <h1 className="head">Good Thinker Organization</h1>
      <h2 className="bloc">
        A Non-profit NGO, working for Human right through legislative Reforms in
        Pakistan
      </h2>
      <h2 className="add">
        Office: 22-club Road, Abdul Shakoor Colony, Kasur(Punjab) Pakistan
      </h2>
      <p className="con">
        www.gtopakistan.org Tel: +92-322-6812700 Email: info@gtopakistan.org
      </p>
    </span>
  </div>
</div>



    <div className='sto'>
    <Navbar/>
    </div>
    </>
   

    
    
  )
}
export default Head;
