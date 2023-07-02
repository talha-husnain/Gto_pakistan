import React from 'react';
import './App.css';
import Footer from './Footer';
import Head from './Head.js';

const Publication = () => {
  return (
    <div>
        <Head />
        <h1 className="min" style={{fontSize:"28px", backgroundColor:"#ffa500ba",marginLeft:"18%", marginRight: "18%", textAlign:"center"}}>Our PUBLICATIONS</h1>

    <div className="pub" style={{ marginRight: "8%"}} >
      <ul>
      
      <a href="https://www.gtopakistan.org/wp-content/uploads/2021/03/Research-Study-COVID-19-impact-on-Transgender-Community-1.pdf">1- Inclusion of Transgender Persons in Response of Society and State to COVID-19 at PUNJAB-PAKISTAN <br></br></a>
      <a href="https://www.gtopakistan.org/wp-content/uploads/2021/03/Baseline-Survey-of-Home-Base-Working-Women-GTO.pdf">2- Baseline Survey of Home Base Working Women GTO <br></br></a>
      <a href="hhttps://www.gtopakistan.org/wp-content/uploads/2021/10/Review-Laws-related-to-Transgender-Community-2020-by-GTO-Pakistan.pdf">3- GTO Research Report–Poverty and Child Labour<br></br></a>
      <a href="https://www.gtopakistan.org/wp-content/uploads/2021/03/Situation-Assessment-Report-Recognition-of-Transgender.pdf">4- GTO Research Report–Gender Disparity in access to Basic Education<br></br></a>
      <a href="https://www.gtopakistan.org/wp-content/uploads/2021/03/GTO-research-report-gender-disparity-web-edition.pdf">5- Situation Assessment Report (Recognition of Transgender Community) <br></br></a>
      <a href="https://www.gtopakistan.org/wp-content/uploads/2021/03/GTO-research-report-gender-disparity-web-edition.pdf">6- STUDY TO REVIEW SUFFICIENCY OF EXISTING LAWS ON RIGHTS <br></br></a>
      </ul>

    </div>


     <Footer/> 
    </div>
  )
}

export default Publication
