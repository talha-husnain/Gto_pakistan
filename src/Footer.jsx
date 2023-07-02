import React from 'react'
import "./fo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
  return (
    <div>
        
<footer className="footer-distributed">

			<div className="footer-left">

				<h3><span>GTO Pakistan</span></h3>

				<p className="footer-links">
					<a href="#" className="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">GTO Pakistan © 2015</p>
                 {/* <FontAwesomeIcon icon={faEnvelope} /> */}

			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
                    <span><FontAwesomeIcon icon={faLocation} /></span>
					<p><span>22-club Road, Abdul Shakoor Colony</span> Kasur(Punjab) Pakistan</p>
                    
				</div>

				<div>
					<i className="fa fa-phone"></i>
                    <span><FontAwesomeIcon icon={faPhoneFlip} /></span>

					<p>+92-322-6812700</p>

				</div>

				<div>
					<i className="fa fa-envelope"></i>
                    <span><FontAwesomeIcon icon={faEnvelope} /></span>

					<p><a href="mailto:support@company.com">info@gtopakistan.org</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					A Non-profit NGO, working for Human right through legislative Reforms in Pakistan
				</p>

				<div className="footer-icons">

					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
      
    </div>
  )
}

export default Footer
