import React from 'react'
import './App.css';
import Head from './Head.js';
import Footer from './Footer';


const About = () => {
  return (
    <div>
        <>
        <Head />
        <h1 style={{fontSize:"28px", marginLeft:"0%", textAlign:"center"}}>Our Success</h1>

        <div className="About">
      <h1 className="min" style={{fontSize:"28px", backgroundColor:"#ffa500ba", backgroundSize:"20px",marginLeft:"18%", marginRight: "18%"}}>PARTNERSHIPS</h1>
     <div className="desc">
      <p style={{textAlign:"center", marginLeft:"13%", marginRight: "13%"}}>Through various programs, the organization has significantly contributed to the development of marginalized communities particularly women and children by upholding good-governance practices, advocating for the rights of people, providing free legal aid to victims, combating child labor, fostering economic empowerment and skill enhancement among women, and empowering youth and trans-persons. It undertook these interventions under enabling partnerships of government line departments, government commissions, national and international non-government organizations, bi-lateral funding agencies, and development networks. Its key donors including but not limited to; Norwegian Human Rights Fund, United States Agency for International Development, Department of Foreign Affairs, Trade and Development – Government of Canada, and Australian High Commission in Pakistan.</p>
         </div>
    </div> 
    <Footer />

        </>
    </div>
  )
}

export default About